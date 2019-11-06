import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Form, Button, Container } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import NumField from 'uniforms-semantic/NumField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Section6DB, Section6DBSchemaWithoutOwner } from '/imports/api/stuff/Section6DB';

/** Renders the Page for adding a document. */
class FormSix extends React.Component {

  submit(data) {
    const owner = Meteor.user().username;
    const { income, totalOccupants, numAdults, numRetired, numChildrenBelow5, numChildren6to12, numChildren13to17,
      membersNotHomeDay, membersNotHomeNight, membersHomeDay, membersHomeWork, employerName, occupation, workPhone } = data;

    Section6DB.insert({
      owner, income, totalOccupants, numAdults, numRetired, numChildrenBelow5, numChildren6to12, numChildren13to17,
      membersNotHomeDay, membersNotHomeNight, membersHomeDay, membersHomeWork, employerName, occupation, workPhone
    }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Section #6 saved successfully', 'success');
      }
    });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
      <Container>
        <div className="add-margin-top-40px"></div>
        <Header as="h2" className="dividing header">6. Data For Program Reporting Purposes</Header>
        <AutoForm schema={Section6DBSchemaWithoutOwner} onSubmit={data => this.submit(data)}>
          <div className="sixteen wide field">
            <NumField
              decimal={true}
              name='income'
              showInlineError={true}
              placeholder={'Please include income of all person(s) occupying the home'} />
          </div>

          <Form.Group>
            <div className="ten wide field">
              <NumField decimal={false} name='totalOccupants' showInlineError={true} placeholder={'Total occupants'} />
            </div>
            <div className="ten wide field">
              <NumField decimal={false} name='numAdults' showInlineError={true} placeholder={'Total adults'} />
            </div>
            <div className="ten wide field">
              <NumField decimal={false} name='numRetired' showInlineError={true} placeholder={'Total retired adults'} />
            </div>
          </Form.Group>

          <Form.Group>
            <div className="ten wide field">
              <NumField decimal={false} name='numChildrenBelow5' showInlineError={true} placeholder={'Children ages below 5'} />
            </div>
            <div className="ten wide field">
              <NumField decimal={false} name='numChildren6to12' showInlineError={true} placeholder={'Children ages 6 - 12'} />
            </div>
            <div className="ten wide field">
              <NumField decimal={false} name='numChildren13to17' showInlineError={true} placeholder={'Children ages 13 - 17'} />
            </div>
          </Form.Group>

          <Form.Group>
            <div className="ten wide field">
              <NumField decimal={false} name='membersNotHomeDay' showInlineError={true} placeholder={'# people not home day'} />
            </div>
            <div className="ten wide field">
              <NumField decimal={false} name='membersNotHomeNight' showInlineError={true} placeholder={'# people not home night'} />
            </div>
          </Form.Group>

          <Form.Group>
            <div className="ten wide field">
              <NumField decimal={false} name='membersHomeDay' showInlineError={true} placeholder={'# people home during day'} />
            </div>
            <div className="ten wide field">
              <NumField decimal={false} name='membersHomeWork' showInlineError={true} placeholder={'# people work from home'} />
            </div>
          </Form.Group>

          <Form.Group>
            <div className="seven wide field">
              <TextField name='employerName' showInlineError={true} />
            </div>
            <div className="seven wide field">
              <TextField name='occupation' showInlineError={true} />
            </div>
            <div className="seven wide field">
              <NumField decimal={false} name='workPhone' showInlineError={true} />
            </div>
          </Form.Group>

<<<<<<< HEAD:app/imports/ui/forms/Form6.jsx
<<<<<<< HEAD:app/imports/ui/forms/Form6.jsx
          <ErrorsField value='Submit' />
=======
>>>>>>> parent of 2bc5508... Finished section 2-9 except 7 & 9. Moved all forms to imports/ui/forms directory:app/imports/ui/pages/FormSix.jsx
          <div className="align-right add-margin-top-20px">
=======
          <div className="align-right">
>>>>>>> parent of 99fb843... Updated minor layouts:app/imports/ui/pages/FormSix.jsx
            <Button>
              <Link to="/form/5">&lt; Previous</Link>
            </Button>
            <SubmitField value='Submit' />
            <Button>
              <Link to="/form/7">Save & Next &gt;</Link>
            </Button>
          </div>
          <ErrorsField value='Submit' />
        </AutoForm>
        <div className="add-margin-top-40px"></div>
      </Container>
    );
  }
}

export default FormSix;
