import React from 'react';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.min.css';
import { Container, Form, Button, Header, Loader } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import SelectField from 'uniforms-semantic/SelectField';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Roles } from 'meteor/alanning:roles';
import { Redirect } from 'react-router';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { AuthorizationDB, AuthorizationDBWithoutOwner } from '/imports/api/stuff/AuthorizationDB';
import ProgressBar from '../components/ProgressBar';
import { ExpandCanvas } from '../js/userSignature';

class AuthorizationPage extends React.Component {

  submit(data) {
    const {
      owner, customerName, customerNamePart2, customerTermCondition,
      serviceAddress, utility, utilityAccountNumber, timestamp,
    } = data;
    const canvas = document.getElementById('sig-canvas');
    const signature = canvas.toDataURL();

    const blank = document.createElement('canvas');
    blank.width = canvas.width;
    blank.height = canvas.height;

    // check to see if the signature canvas is empty
    if (canvas.toDataURL() === blank.toDataURL()) {
      swal('Error', 'Please sign the form', 'error');
      return;
    }
    if (customerName.toLowerCase() !== customerNamePart2.toLowerCase()) {
      swal('Error', 'Your name doesn&apos;t match, please check again.', 'error');
      return;
    }

    let tmp = null;
    try {
      if (typeof this.props.doc.owner !== 'undefined') {
        tmp = this.props.doc.owner;
      }
    } catch (e) {
      tmp = 'not-defined';
    }

    if (tmp === 'not-defined') {
      AuthorizationDB.insert({
        owner, timestamp, customerName, customerNamePart2, customerTermCondition,
        serviceAddress, utility, utilityAccountNumber, signature,
      }, (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Thank you for completing the application. ' +
              'A GEM$ Employee will be in touch with you shortly.', 'success');
        }
      });
    } else {
      AuthorizationDB.update({ _id: this.props.doc._id }, {
        $set: {
          customerName, customerNamePart2, customerTermCondition, serviceAddress,
          utility, utilityAccountNumber, timestamp, signature,
        },
      }, (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Thank you for completing the application. ' +
              'A GEM$ Employee will be in touch with you shortly.', 'success');
        }
      });
    }
  }

  render() {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      return <Redirect to="/admin"/>;
    }
    return (this.props.ready) ? this.renderPage() :
        <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const headerStyle = { margin: '0px' };
    const header5Style = { margin: '0px', marginTop: '7px' };
    return (
        <Container>
          <ProgressBar/>
          <Header as='h2' className='title' style={headerStyle}>AUTHORIZATION FOR RELEASE OF INFORMATION</Header>
          <Header as='h5' style={header5Style} className='title dividing header'>HGIA Green Energy Money $aver On-Bill
            Program (Eligibility and Ongoing Participation)</Header>
          <AutoForm schema={AuthorizationDBWithoutOwner} onSubmit={data => this.submit(data)} model={this.props.doc}
                    className='add-margin-top-40px'>

            <Form.Group>
              <HiddenField name='owner' value={Meteor.user().username}/>
              <TextField
                  className='six wide field'
                  name='customerName'
                  label='Customer Name'
                  placeholder='Name as seen on utility bill'
                  showInlineError={false}
              />
              <TextField
                  className='six wide field'
                  name='utilityAccountNumber'
                  label='Utility Account Number'
                  showInlineError={false}
              />
              <TextField
                  className='six wide field'
                  name='serviceAddress'
                  label='Service Address'
                  showInlineError={false}
              />
            </Form.Group>

            <SelectField
                label='Utility (Check all that apply)'
                checkboxes
                name='utility'
            />

            <Container className='add-margin-top-20px'>
              I am applying to participate in the Hawaii Green Infrastructure Authority&apos;s (&apos;HGIA&apos;) Green
              Energy Money $aver On-Bill Program (&apos;Program&apos;). As part of the Program, HGIA needs access to my
              utility bill information. I understand that information about my utility bill will be shared with HGIA,
              both intially to evaluate my application and on an on-going basis for as long as I am a participant in
              the Program. I hereby authorize the utility indicated above to release the following information to HGIA
              and any of its representatives, agents, and contractors for the Programs:
              <ul>
                <li>Information to identify my account, including account numbers and identifiers for my service
                  address.
                </li>
                <li>Bill history information, including prior disconnects, months of active service, the start date and
                  any future move-out date.
                </li>
                <li>Information about my current bill and payment, including the dates, amounts, and document numbers.
                </li>
                <li>Rate information, including whether there is an interconnection agreement for this location, the
                  rate schedule and tariff.
                </li>
              </ul>
              I understand that my authorization will remain effective from the date of my signature until my
              application evaluation is complete, and for as long as I am a participant in the program and an on-bill
              obligation is outstanding at the service address identified above. I also understand that information and
              data collected may be used to assess the Program&apos;s effectiveness and results, which will be
              anonymized
              and aggregated, and may be included in Program reports provided to the Hawaii Public Utilities Commission.
            </Container>

            <TextField
                className='sixteen wide field add-margin-top-10px'
                name='customerNamePart2'
                label='Name of Customer'
                placeholder='Name as seen on utility bill'
                showInlineError={false}
            />

            <SelectField
                checkboxes
                name='customerTermCondition'
                showInlineError={false}
            />

            <Form.Group>
              <Form.Input label='Applicant’s Signature' width={12} className='application-signature' required>
                <canvas id='sig-canvas' className='set-canvas-width'>
                  Please use another browser in order to sign this form.
                </canvas>
              </Form.Input>

              <div className='four wide field'>
                <Form.Input label='Date' type='date' id='getDate' width={16}></Form.Input>
                <HiddenField name='timestamp' value={new Date()}/>
                <br/>
                <Form.Input>
                  <Button type='button' className='green sixteen wide field require-margin' id='sig-clearBtn'>Clear
                    Signature</Button>
                </Form.Input>
              </div>
            </Form.Group>
            <ErrorsField/>
            <div className='align-right add-margin-top-20px'>
              <Button as={NavLink} exact to='/form/9'>&lt; Previous</Button>
              <SubmitField value='Save' className='green'/>
              <SubmitField value='Finish' style={{ backgroundColor: '#00FFFF' }}/>
            </div>
            <div>{ExpandCanvas()}</div>
          </AutoForm>
        </Container>
    );
  }
}

AuthorizationPage.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('AuthorizationDB');

  const profile = Meteor.user() ? Meteor.user().username : null;
  return {
    doc: AuthorizationDB.findOne({ owner: profile }),
    ready: subscription.ready(),
  };

})(AuthorizationPage);
