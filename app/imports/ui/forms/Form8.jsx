import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Header, Container, Button, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Section8DB, Section8DBSchemaWithoutOwner } from '/imports/api/stuff/Section8DB';

class Form8 extends React.Component {

  submit(data) {
    const { taxCreditClaimer, taxCreditClaimerRelationship } = data;
    const owner = Meteor.user().username;
    Section8DB.insert({ owner, taxCreditClaimer, taxCreditClaimerRelationship }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Section #8 saved successfully', 'success');
      }
    });
  }

  render() {
    return (
      <Container>
        <Header as="h2" className="dividing header">8. SYSTEM OWNER (For Solar Tax Credits)</Header>
        <Label color='red'>Please check with your tax advisor. Please also have the name of the system owner added to the EI contract (along with the utility account holder).</Label>

        <div className='add-margin-top-20px'></div>
        <AutoForm schema={Section8DBSchemaWithoutOwner} onSubmit={data => this.submit(data)}>
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
            label='If the entity(ies) or person(s) claiming the Tax Credit is not one of the Property Owner(s), please indicate relationship to Owner(s): '
            showInlineError={false}
          />

          <ErrorsField />
          <div className="align-right add-margin-top-20px">
            <Button>
              <Link to="/form/7">&lt; Previous</Link>
            </Button>
            <SubmitField value='Submit' />
            {/* <Button>
              <Link to="">Save & Exit</Link>
            </Button> */}
            <Button>
              <Link to="/form/9" rel="noopener noreferrer">Save & Next &gt;</Link>
            </Button>
          </div>
        </AutoForm>
      </Container >
    );
  }
}

export default Form8;
