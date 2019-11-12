import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Form, Checkbox, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ExpandCanvas } from '../js/userSignature';
import swal from 'sweetalert';
import SelectField from 'uniforms-semantic/SelectField';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { AuthorizationDB, AuthorizationDBWithoutOwner } from '/imports/api/stuff/AuthorizationDB';

class AuthorizationPage extends React.Component {
  submit(data) {
    const owner = Meteor.user().username;
    const {
      customerName, todaysDate, serviceAddress, utility, utilityAccountNumber
    } = data;
    AuthorizationDB.insert({ customerName, todaysDate, serviceAddress, utility, utilityAccountNumber
    }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Authorization page saved successfully', 'success');
      }
    });
  }

  render() {
    return (
        <Container className='sizeOf'>
          <AutoForm schema={AuthorizationDBWithoutOwner} onSubmit={data => this.submit(data)}>
          <p className='title'>
            <Header>AUTHORIZATION FOR RELEASE OF INFORMATION</Header>
            <strong>HGIA Green Energy Money $aver On-Bill Program (Eligibility and Ongoing Participation)</strong>
          </p>

          <Form className='formFills'>
            <Form.Group>
              <TextField
                  name='customerName'
                  label='Customer Name'
                  placeholder='Name as seen on utility bill'
                  width={6}
                  showInlineError={false}
              />
            </Form.Group>
            <TextField
                name='serviceAddress'
                label='Service Address'
                width={8}
                showInlineError={false}
            />
            <SelectField
                label='Utility (Check all that apply)'
                checkboxes
                showInlineError={false}
                name='utility'
            />
            <TextField
                fluid label='Utility Account Number'
                showInlineError={false}
                width={6}
                name='utilityAccountNumber'
            />
          </Form>
          <Container center className='legalDiscretion'>
            <p>
              I am applying to participate in the Hawaii Green Infrastructure Authority's ("HGIA") Green Energy Money $aver On-Bill Program ("Program"). As part of the Program, HGIA needs access to my utility bill information. I understand that information about my utility bill will be shared with HGIA, both intially to evaluate my application and on an on-going basis for as long as I am a participant in the Program. I hereby authorize the utility indicated above to release the following information to HGIA and any of its representatives, agents, and contractors for the Programs:
              <ul>
                <li>Information to identify my account, including account numbers and identifiers for my service address.</li>
                <li>Bill history information, including prior disconnects, months of active service, the start date and any future move-out date.</li>
                <li>Information about my current bill and payment, including the dates, amounts, and document numbers.</li>
                <li>Rate information, including whether there is an interconnection agreement for this location, the rate schedule and tariff.</li>
              </ul>
              I understand that my authorization will remain effective from the date of my signature until my application evaluation is complete, and for as long as I am a participant in the program and an on-bill obligation is outstanding at the service address identified above. I also understand that information and data collected may be used to assess the Program's effectiveness and results, which will be anonymized and aggregated, and may be included in Program reports provided to the Hawaii Public Utilities Commission.
            </p>
          </Container>
          <Form className='termsAndConditions'>
            <Form.Input
                required
                label='Name of Customer'
                placeholder='Name as seen on utility bill'
                width={6}
            />
            <Form.Field
                required
                control={Checkbox}
                label={<label>I have read and understand the nature of this authorization.</label>}
            />
            <Form.Group>
              <Form.Input label="Applicant’s Signature" width={12} className="application-signature" required>
                <canvas id="sig-canvas" className="set-canvas-width">
                  Please use another browser in order to sign this form.
                </canvas>
              </Form.Input>
              <div className='four wide field'>
                <Form.Input label="Date" type="date" id="getDate" width={16}></Form.Input>
                <br />
                <Form.Input>
                  <Button type="button" className="green sixteen wide field require-margin" id="sig-clearBtn">Clear Signature</Button>
                </Form.Input>
                <br />
                <Form.Input>
                  <Button type='button' className='green sixteen wide field require-margin' id='submitFieldForm'>Upload Signature</Button>
                </Form.Input>
              </div>
            </Form.Group>
          </Form>
          <div className="align-right">
            <Button>
              <Link to="/form/9">&lt; Previous</Link>
            </Button>
            <Button>
              <Link to="/form/authorization">Save & Exit</Link>
            </Button>
            <Button>
              <Link to="/profile">Submit</Link>
            </Button>
          </div>
          <div>{this.addScript()}</div>
          <div>{ExpandCanvas()}</div>
            <ErrorsField />
          <SubmitField value='Submit' />
          </AutoForm>
        </Container>
    );
  }
  addScript() {
    import '../js/userSignature'
  }
}
export default AuthorizationPage;
