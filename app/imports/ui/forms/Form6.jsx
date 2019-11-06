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
class Form6 extends React.Component {

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
        <Header as="h2" className="dividing header">6. Data For Program Reporting Purposes</Header>
        <AutoForm schema={Section6DBSchemaWithoutOwner} onSubmit={data => this.submit(data)}>
          <div className="sixteen wide field">
            <NumField
              decimal={true}
              name='income'
              showInlineError={false}
              placeholder={'Please include income of all person(s) occupying the home'} />
          </div>

          <Form.Group>
            <NumField className='ten wide field'
              decimal={false} name='totalOccupants' showInlineError={false} placeholder={'Total occupants'}
            />
            <NumField className='ten wide field'
              decimal={false} name='numAdults' showInlineError={false} placeholder={'Total adults'}
            />
            <NumField className='ten wide field'
              decimal={false} name='numRetired' showInlineError={false} placeholder={'Total retired adults'}
            />
          </Form.Group>

          <Form.Group>
            <NumField className='ten wide field'
              decimal={false} name='numChildrenBelow5' showInlineError={false} placeholder={'Children ages below 5'}
            />
            <NumField className='ten wide field'
              decimal={false} name='numChildren6to12' showInlineError={false} placeholder={'Children ages 6 - 12'}
            />
            <NumField className='ten wide field'
              decimal={false} name='numChildren13to17' showInlineError={false} placeholder={'Children ages 13 - 17'}
            />
          </Form.Group>

          <Form.Group>
            <NumField className='ten wide field'
              decimal={false} name='membersNotHomeDay' showInlineError={false} placeholder={'# people not home day'}
            />
            <NumField className='ten wide field'
              decimal={false} name='membersNotHomeNight' showInlineError={false} placeholder={'# people not home night'}
            />
          </Form.Group>

          <Form.Group>
            <NumField className='ten wide field'
              decimal={false} name='membersHomeDay' showInlineError={false} placeholder={'# people home during day'}
            />
            <NumField className='ten wide field'
              decimal={false} name='membersHomeWork' showInlineError={false} placeholder={'# people work from home'}
            />
          </Form.Group>

          <Form.Group>
            <div className="seven wide field">
              <TextField name='employerName' showInlineError={false} />
            </div>
            <div className="seven wide field">
              <TextField name='occupation' showInlineError={false} />
            </div>
            <div className="seven wide field">
              <NumField decimal={false} name='workPhone' showInlineError={false} />
            </div>
          </Form.Group>

          <ErrorsField value='Submit' />
          <div className="align-right add-margin-top-20px">
            <Button>
              <Link to="/form/2">&lt; Previous</Link>
            </Button>
            <SubmitField value='Submit' />
            <Button>
              <Link to="/form/7">Save & Next &gt;</Link>
            </Button>
          </div>
        </AutoForm>
      </Container>
    );
  }
}

export default Form6;
