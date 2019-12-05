import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Form, Button, Container, Loader } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import NumField from 'uniforms-semantic/NumField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Redirect } from 'react-router';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Section6DB, Section6DBSchemaWithoutOwner } from '../../api/stuff/Section6DB';
import ProgressBar from '../components/ProgressBar';
// import { collectdata } from '../../api/stuff/CsvScript';

/** Renders the Page for adding a document. */
class Form6 extends React.Component {
  submit(data) {
    const {
      income,
      totalOccupants,
      numAdults,
      numRetired,
      numChildrenBelow5,
      numChildren6to12,
      numChildren13to17,
      membersNotHomeDay,
      membersNotHomeNight,
      membersHomeDay,
      membersHomeWork,
      employerName,
      occupation,
      workPhone,
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
      Section6DB.insert(
        {
          owner,
          income,
          totalOccupants,
          numAdults,
          numRetired,
          numChildrenBelow5,
          numChildren6to12,
          numChildren13to17,
          membersNotHomeDay,
          membersNotHomeNight,
          membersHomeDay,
          membersHomeWork,
          employerName,
          occupation,
          workPhone,
        },
        error => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Section #6 saved successfully', 'success');
          }
        },
      );
    } else {
      Section6DB.update(
        { _id: this.props.doc._id },
        {
          $set: {
            income,
            totalOccupants,
            numAdults,
            numRetired,
            numChildrenBelow5,
            numChildren6to12,
            numChildren13to17,
            membersNotHomeDay,
            membersNotHomeNight,
            membersHomeDay,
            membersHomeWork,
            employerName,
            occupation,
            workPhone,
          },
        },
        error => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Section #6 updated successfully', 'success');
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

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
      <Container>
        <ProgressBar />
        <Header as='h2' className='dividing header'>
          6. Data For Program Reporting Purposes
        </Header>

        <AutoForm
          schema={Section6DBSchemaWithoutOwner}
          onSubmit={data => this.submit(data)}
          model={this.props.doc}
        >
          <div className='sixteen wide field'>
            <NumField
              decimal={true}
              name='income'
              showInlineError={false}
              placeholder={
                'Please include income of all person(s) occupying the home'
              }
            />
          </div>

          <br />

          <Form.Group>
            <NumField
              className='ten wide field'
              decimal={false}
              name='totalOccupants'
              showInlineError={false}
              placeholder={'Total occupants'}
            />
            <NumField
              className='ten wide field'
              decimal={false}
              name='numAdults'
              showInlineError={false}
              placeholder={'Total adults'}
            />
            <NumField
              className='ten wide field'
              decimal={false}
              name='numRetired'
              showInlineError={false}
              placeholder={'Total retired adults'}
            />
          </Form.Group>

          <br />

          <Form.Group>
            <NumField
              className='ten wide field'
              decimal={false}
              name='numChildrenBelow5'
              showInlineError={false}
              placeholder={'Children ages below 5'}
            />
            <NumField
              className='ten wide field'
              decimal={false}
              name='numChildren6to12'
              showInlineError={false}
              placeholder={'Children ages 6 - 12'}
            />
            <NumField
              className='ten wide field'
              decimal={false}
              name='numChildren13to17'
              showInlineError={false}
              placeholder={'Children ages 13 - 17'}
            />
          </Form.Group>

          <br />

          <Form.Group>
            <NumField
              className='ten wide field'
              decimal={false}
              name='membersNotHomeDay'
              showInlineError={false}
              placeholder={'# people not home day'}
            />
            <NumField
              className='ten wide field'
              decimal={false}
              name='membersNotHomeNight'
              showInlineError={false}
              placeholder={'# people not home night'}
            />
          </Form.Group>

          <br />

          <Form.Group>
            <NumField
              className='ten wide field'
              decimal={false}
              name='membersHomeDay'
              showInlineError={false}
              placeholder={'# people home during day'}
            />
            <NumField
              className='ten wide field'
              decimal={false}
              name='membersHomeWork'
              showInlineError={false}
              placeholder={'# people work from home'}
            />
          </Form.Group>

          <br />

          <Form.Group>
            <div className='seven wide field'>
              <TextField name='employerName' showInlineError={false} />
            </div>
            <div className='seven wide field'>
              <TextField name='occupation' showInlineError={false} />
            </div>
            <div className='seven wide field'>
              <NumField
                decimal={false}
                name='workPhone'
                showInlineError={false}
              />
            </div>
          </Form.Group>

          <ErrorsField />

          <div className='align-right add-margin-top-20px'>
            <Button as={NavLink} exact to='/form/2'>&lt; Previous</Button>
            <Button as={NavLink} exact to='/form/7'>Next &gt;</Button>
            <SubmitField value='Save' className='green' />
          </div>
        </AutoForm>
      </Container>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
Form6.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // const documentId = Meteor.user().username;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Form6');

  const profile = Meteor.user() ? Meteor.user().username : null;
  return {
    doc: Section6DB.findOne({ owner: profile }),
    ready: subscription.ready(),
  };
})(Form6);
