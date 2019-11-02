import React from 'react';
import { Grid, Segment, Header, Form, Loader } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import DateField from 'uniforms-semantic/DateField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import swal from 'sweetalert';
import { _ } from 'meteor/underscore';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import MultiSelectField from '../forms/controllers/MultiSelectField';
import RadioField from '../forms/controllers/RadioField';
import { StudentFormSchema as formSchema, gpa2String, gpa2Number } from '../forms/StudentFormInfo';
import { StudentData } from '../../api/studentdata/StudentData';
import { ApplicantData } from '../../api/enrollmentdata/ApplicantData';

/** Renders the Page for editing a document. */
class EditStudent extends React.Component {

  /** On submit, try to insert the data. If successful, reset the form. */
  submit(data) {
    let updateError;
    const studentId = this.props.studentDoc._id;
    const enrollmentId = this.props.enrollmentDoc._id;
    const { name, email, bio, level, gpa, enrolled, hobbies, major, instructor } = data;
    StudentData.update(studentId, {
      $set: { name, email, bio, level, gpa: gpa2Number(gpa), hobbies, major, instructor } },
      (error) => { updateError = error; });
    if (updateError) {
      swal('Error', updateError.message, 'error');
    } else {
      ApplicantData.update(enrollmentId, { $set: { enrolled } },
        (error) => { updateError = error; });
      if (updateError) {
        swal('Error', updateError.message, 'error');
      } else {
        swal('Success', 'The student record was updated.', 'success');
      }
    }
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    // Build the model object that Uniforms will use to fill in the form.
    const model = _.extend({}, this.props.studentDoc, this.props.enrollmentDoc);
    model.gpa = gpa2String(model.gpa);
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Edit Student</Header>
          <AutoForm schema={formSchema} onSubmit={data => this.submit(data)} model={model}>
            <Segment>
              <Form.Group widths={'equal'}>
                <TextField name='name' showInlineError={true} placeholder={'Your name'}/>
                <TextField name='email' showInlineError={true} placeholder={'Your email'}/>
                <SelectField name='instructor' showInlineError={true}/>
              </Form.Group>
              <LongTextField name='bio' showInlineError={true} placeholder={'A bit about you'}/>
              <Form.Group widths={'equal'}>
                <SelectField name='level' showInlineError={true} />
                <SelectField name='gpa' showInlineError={true} placeholder={'Select one'} />
                <DateField name='enrolled' showInlineError={true}/>
              </Form.Group>
              <MultiSelectField name='hobbies' showInlineError={true} placeholder={'Select hobbies (optional)'}/>
              <RadioField name='major' inline showInlineError={true}/>
              <SubmitField value='Update'/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

/** Require a studentdata and enrollment doc.  Uniforms adds 'model' to the props, which we use. */
EditStudent.propTypes = {
  studentDoc: PropTypes.object,
  enrollmentDoc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the email from the URL field. See imports/ui/layouts/App.jsx for the route containing :email.
  const email = match.params.email;
  // Request StudentData and Enrollment docs. Won't be locally available until ready() returns true.
  const studentDataSubscription = Meteor.subscribe('StudentData');
  const enrollmentDataSubscription = Meteor.subscribe('EnrollmentData');
  return {
    studentDoc: StudentData.findOne({ email }),
    enrollmentDoc: ApplicantData.findOne({ email }),
    ready: studentDataSubscription.ready() && enrollmentDataSubscription.ready(),
  };
})(EditStudent);
