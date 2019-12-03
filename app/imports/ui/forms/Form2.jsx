import React from 'react';
import {
  Header,
  Container,
  Form,
  Button,
  Label,
  Loader,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Redirect } from 'react-router';
import 'semantic-ui-css/semantic.min.css';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import SelectField from 'uniforms-semantic/SelectField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Section2DB, Section2DBSchemaWithoutOwner } from '../../api/stuff/Section2DB';
import ProgressBar from '../components/ProgressBar';
// import { collectdata } from '../../api/stuff/CsvScript';

class Form2 extends React.Component {
  submit(data) {
    const {
      firstName,
      middleName,
      lastName,
      utilityAccountNumber,
      energyImprovementOptions,
      metWithApprovedContractor,
      contractorName,
      contactName,
      streetAddress,
      islandLocation,
      residenceType,
    } = data;

    // check to see if account is already in the database.
    let tmp = null;
    try {
      if (typeof this.props.doc.owner !== 'undefined') {
        tmp = this.props.doc.owner;
      }
    } catch (e) {
      tmp = 'not-defined';
    }

    if (tmp === 'not-defined') {
      const owner = Meteor.user().username;
      Section2DB.insert(
        {
          owner,
          firstName,
          middleName,
          lastName,
          utilityAccountNumber,
          energyImprovementOptions,
          metWithApprovedContractor,
          contractorName,
          contactName,
          streetAddress,
          islandLocation,
          residenceType,
        },
        error => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Section #2 saved successfully', 'success');
          }
        },
      );
    } else {
      Section2DB.update(
        { _id: this.props.doc._id },
        {
          $set: {
            firstName,
            middleName,
            lastName,
            utilityAccountNumber,
            energyImprovementOptions,
            metWithApprovedContractor,
            contractorName,
            contactName,
            streetAddress,
            islandLocation,
            residenceType,
          },
        },
        error => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Section #2 updated successfully', 'success');
          }
        },
      );
    }
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      return <Redirect to="/admin" />;
    }
    return (this.props.ready) ? this.renderPage() :
      <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
      <Container>
        <ProgressBar />
        <Header as='h2' className='dividing header'>
          2. RATEPAYER INFORMATION
          <Label className='green'>
            Note: The person named on the electric utility account should be the
            Applicant
          </Label>
        </Header>

        <AutoForm
          schema={Section2DBSchemaWithoutOwner}
          onSubmit={data => this.submit(data)}
          model={this.props.doc}
        >
          <strong>
            Please print name exactly as it appears on your utility bill.
          </strong>
          <Form.Group className='add-margin-top-10px'>
            <TextField
              className='five wide field'
              label={false}
              placeholder={'First Name'}
              name='firstName'
              showInlineError={false}
            />

            <TextField
              className='five wide field'
              name='middleName'
              label={false}
              placeholder={'Middle Name'}
            />

            <TextField
              className='five wide field'
              label={false}
              placeholder={'Last Name'}
              name='lastName'
              showInlineError={false}
            />
            <TextField
              className='five wide field'
              label={false}
              placeholder={'Utility Account Number'}
              name='utilityAccountNumber'
              showInlineError={false}
            />
          </Form.Group>

          {/* NEW SECTION */}
          <Header as='h2' className='dividing header add-margin-top-40px'>
            3. ENERGY IMPROVEMENT
          </Header>
          <SelectField
            label='What GEM$ Approved Energy Improvement would you like to install? (Check all that apply)'
            checkboxes
            showInlineError={false}
            name='energyImprovementOptions'
          />

          {/* NEW SECTION */}
          <Header as='h2' className='dividing header add-margin-top-40px'>
            4. CONTRACTOR INFORMATION
          </Header>
          <SelectField
            label='Have you met with a GEM$ Approved Contractor regarding installation?'
            checkboxes
            showInlineError={false}
            name='metWithApprovedContractor'
          />
          <br />
          <div>If yes, please indicate below:</div>
          <Form.Group>
            <TextField
              className='eight wide field'
              name='contractorName'
              label={false}
              placeholder={'Contractor Name'}
            />
            <TextField
              className='eight wide field'
              name='contactName'
              label={false}
              placeholder={'Contact Name'}
            />
          </Form.Group>

          {/* NEW SECTION */}
          <Header as='h2' className='dividing header add-margin-top-40px'>
            5. INSTALLATION ADDRESS
            <Label className='green'>
              Note: This is the address at which the proposed Energy Improvement
              will be installed
            </Label>
          </Header>

          <Form.Group>
            <TextField
              className='seven wide field'
              label='Street Address'
              placeholder='Street, City, State, Zip'
              name='streetAddress'
              showInlineError={false}
            />
            <SelectField
              className='seven wide field'
              label='On which island is this located?'
              name='islandLocation'
              showInlineError={false}
            />
            <SelectField
              className='seven wide field'
              label='Type of Residence'
              name='residenceType'
              showInlineError={false}
            />
          </Form.Group>

          <ErrorsField />
          <div className='align-right add-margin-top-20px'>
            <Button as={NavLink} exact to='/form/1'>
              &lt; Previous
            </Button>
            <Button as={NavLink} exact to='/form/6'>
              Next &gt;
            </Button>
            <SubmitField value='Save' className='green' />
          </div>
        </AutoForm>
      </Container>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
Form2.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // const documentId = Meteor.user().username;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Form2');

  const profile = Meteor.user() ? Meteor.user().username : null;
  return {
    doc: Section2DB.findOne({ owner: profile }),
    ready: subscription.ready(),
  };
})(Form2);
