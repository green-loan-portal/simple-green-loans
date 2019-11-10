import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Header, Container, Label, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Section7DB, Section7DBSchemaWithoutOwner } from '/imports/api/stuff/Section7DB';

class Form7 extends React.Component {
  submit(data) {
    const owner = Meteor.user().username;
    const {
      email, phoneHome, phoneMobile, mailingAddress, partiesNames, otherOwner1,
      otherOwnerRelationship1, otherOwner2, otherOwnerRelationship2
    } = data;

    Section7DB.insert({
      owner, email, phoneHome, phoneMobile, mailingAddress, partiesNames,
      otherOwner1, otherOwnerRelationship1, otherOwner2, otherOwnerRelationship2
    }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Section #9 saved successfully', 'success');
      }
    });
  }

  render() {
    return (
      <Container>
        <Header as="h2" className="dividing header">
          7. APPLICANT&#39;S INFORMATION
          <Label className="green">
            Note: The Applicant is the person named on the utility account named in Section 2.
          </Label>
        </Header>

        <AutoForm schema={Section7DBSchemaWithoutOwner} onSubmit={data => this.submit(data)}>

          <Container>
            <Form.Group>
              <TextField
                className='seven wide field'
                name='email'
                label='Email'
                showInlineError={false}
              />
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
              placeholder='Please list all parties named on Title to the Installation Address in Section 5 (including Trusts)'
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
            <div className="align-right add-margin-top-20px">
              <Button>
                <Link to="/form/6">&lt; Previous</Link>
              </Button>
              <SubmitField value='Submit' disabled={false} />
              <Button>
                <Link to="/form/8">Save & Next &gt;</Link>
              </Button>
            </div>
          </Container>
        </AutoForm>
      </Container>
    );
  }
}

export default Form7;