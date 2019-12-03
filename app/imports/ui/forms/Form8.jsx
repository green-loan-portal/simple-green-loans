import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Container, Button, Label, Loader } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Roles } from 'meteor/alanning:roles';
import { Redirect } from 'react-router';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Section8DB, Section8DBSchemaWithoutOwner } from '../../api/stuff/Section8DB';
import ProgressBar from '../components/ProgressBar';
// import { collectdata } from '../../api/stuff/CsvScript';

class Form8 extends React.Component {
  submit(data) {
    const { taxCreditClaimer, taxCreditClaimerRelationship } = data;

    // check to see if account is already in the database.
    let tmp = null;
    try {
      if ((typeof this.props.doc.owner) !== 'undefined') {
        tmp = this.props.doc.owner;
      }
    } catch (e) {
      tmp = 'not-defined';
    }

    if (tmp === 'not-defined') {
      const owner = Meteor.user().username;
      Section8DB.insert(
        { owner, taxCreditClaimer, taxCreditClaimerRelationship },
        error => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Section #8 saved successfully', 'success');
          }
        },
      );
    } else {
      Section8DB.update(
        { _id: this.props.doc._id },
        {
          $set: { taxCreditClaimer, taxCreditClaimerRelationship },
        },
        error => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Section #8 updated successfully', 'success');
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
          8. SYSTEM OWNER (For Solar Tax Credits)
        </Header>
        <Label color='red'>
          Please check with your tax advisor. Please also have the name of the
          system owner added to the EI contract (along with the utility account
          holder).
        </Label>

        <div className='add-margin-top-20px'></div>
        <AutoForm
          schema={Section8DBSchemaWithoutOwner}
          onSubmit={data => this.submit(data)}
          model={this.props.doc}
        >
          <TextField
            className='sixteen wide field'
            name='taxCreditClaimer'
            label='Name of Entity(ies) or Person(s) who will claim Tax Credit:'
            placeholder='Person 1, Person 2, Person 3, ...'
            showInlineError={false}
          />
          <TextField
            className='sixteen wide field'
            name='taxCreditClaimerRelationship'
            label='If the entity(ies) or person(s) claiming the Tax Credit is not
            one of the Property Owner(s), please indicate relationship to Owner(s): '
            showInlineError={false}
          />

          <ErrorsField />
          <div className='align-right add-margin-top-20px'>
            <Button as={NavLink} exact to='/form/7'>
              &lt; Previous
            </Button>
            <Button as={NavLink} exact to='/form/9'>
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
Form8.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // const documentId = Meteor.user().username;
  // Get access to Stuff documents.
  // const documentId = match.params._id;
  // Get access to Stuff documents.

  const subscription = Meteor.subscribe('Form8');

  const profile = Meteor.user() ? Meteor.user().username : null;
  return {
    doc: Section8DB.findOne({ owner: profile }),
    ready: subscription.ready(),
  };
})(Form8);
