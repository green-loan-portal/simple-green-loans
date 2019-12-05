import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Form,
  Header,
  Container,
  Label,
  Button,
  Loader,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { Roles } from 'meteor/alanning:roles';
import { Redirect } from 'react-router';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Section7DB, Section7DBSchemaWithoutOwner } from '/imports/api/stuff/Section7DB';
import ProgressBar from '../components/ProgressBar';
// import { collectdata } from '../../api/stuff/CsvScript';

class Form7 extends React.Component {
  submit(data) {
    const {
      email,
      phoneHome,
      phoneMobile,
      mailingAddress,
      partiesNames,
      otherOwner1,
      otherOwnerRelationship1,
      otherOwner2,
      otherOwnerRelationship2,
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
      Section7DB.insert(
        {
          owner,
          email,
          phoneHome,
          phoneMobile,
          mailingAddress,
          partiesNames,
          otherOwner1,
          otherOwnerRelationship1,
          otherOwner2,
          otherOwnerRelationship2,
        },
        error => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Section #7 saved successfully', 'success');
          }
        },
      );
    } else {
      Section7DB.update(
        { _id: this.props.doc._id },
        {
          $set: {
            email,
            phoneHome,
            phoneMobile,
            mailingAddress,
            partiesNames,
            otherOwner1,
            otherOwnerRelationship1,
            otherOwner2,
            otherOwnerRelationship2,
          },
        },
        error => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Section #7 updated successfully', 'success');
          }
        },
      );
    }
  }

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
          7. APPLICANT&#39;S INFORMATION
          <Label className='green'>
            Note: The Applicant is the person named on the utility account named
            in Section 2.
          </Label>
        </Header>

        <AutoForm
          schema={Section7DBSchemaWithoutOwner}
          onSubmit={data => this.submit(data)}
          model={this.props.doc}
        >
          <Container>
            <Form.Group widths='equal'>
              <TextField name='email' label='Email' showInlineError={false} />
              <NumField
                className='five wide field'
                decimal={false}
                name='phoneHome'
                label='Home Phone'
              />
              <NumField
                className='five wide field'
                decimal={false}
                name='phoneMobile'
                label='Mobile Phone'
              />
            </Form.Group>

            <TextField
              className='sixteen wide field'
              name='mailingAddress'
              label='Mailing Address'
              placeholder='(if different from Installation Address in Section 5)'
            />

            <TextField
              className='sixteen wide field'
              name='partiesNames'
              label='All Parties Names'
              placeholder={`Please list all parties named on Title to the Installation
              Address in Section 5 (including Trusts)`}
            />

            <Form.Group>
              <TextField
                className='eight wide field'
                name='otherOwner1'
                label='Other Owner(s)'
              />
              <TextField
                className='eight wide field'
                name='otherOwnerRelationship1'
                label='Relationship to Applicant'
              />
            </Form.Group>

            <Form.Group>
              <TextField
                className='eight wide field'
                name='otherOwner2'
                label='Other Owner(s)'
              />
              <TextField
                className='eight wide field'
                name='otherOwnerRelationship2'
                label='Relationship to Applicant'
              />
            </Form.Group>

            <ErrorsField />

            <div className='align-right add-margin-top-20px'>
              <Button as={NavLink} exact to='/form/6'>
                &lt; Previous
              </Button>
              <Button as={NavLink} exact to='/form/8'>
                Next &gt;
              </Button>
              <SubmitField value='Save' className='green' />
            </div>
          </Container>
        </AutoForm>
      </Container>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
Form7.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // const documentId = Meteor.user().username;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Form7');

  const profile = Meteor.user() ? Meteor.user().username : null;
  return {
    doc: Section7DB.findOne({ owner: profile }),
    ready: subscription.ready(),
  };
})(Form7);
