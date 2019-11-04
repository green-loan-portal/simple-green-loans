import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Header, Container, Button } from 'semantic-ui-react';
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

class Eighth extends React.Component {

  submit(data) {
    const { landlordName, landlordEmail, landlordPhoneHome, landlordPhoneCell, propertyManagerName, propertyManagerEmail, propertyManagerPhoneHome,
      propertyManagerPhoneCell, propertyManagementCompanyName, propertyManagementCompanyAddress } = data;
    const owner = Meteor.user().username;
    Section8DB.insert({
      owner, landlordName, landlordEmail, landlordPhoneHome, landlordPhoneCell, propertyManagerName, propertyManagerEmail,
      propertyManagerPhoneHome, propertyManagerPhoneCell, propertyManagementCompanyName, propertyManagementCompanyAddress
    }, (error) => {
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
        <div className="add-margin-top-40px"></div>
        <Header as="h3" className="dividing header">8. LANDLORD OR PROPERTY MANAGER INFORMATION</Header>

        <AutoForm schema={Section8DBSchemaWithoutOwner} onSubmit={data => this.submit(data)}>
          <Form.Group>
            <div className="eight wide field">
              <TextField
                name='landlordName'
                label='Landlord Name'
                placeholder='First, Middle, Last'
                showInlineError={false}
              />
            </div>
            <div className="eight wide field">
              <TextField
                name='landlordEmail'
                label='Email'
                showInlineError={true}
              />
            </div>
            <div className="four wide field">
              <NumField
                name='landlordPhoneHome'
                label='Home Phone'
                placeholder='Only numbers'
                decimal={false}
                />
            </div>
            <div className="four wide field">
              <NumField
                name='landlordPhoneCell'
                label='Cell Phone'
                placeholder='Only numbers'
                decimal={false}
              />
            </div>
          </Form.Group>

          <Form.Group>
            <div className="eight wide field">
              <TextField
                name='propertyManagerName'
                label='Property Manager Name'
                placeholder='First, Middle, Last'
                showInlineError={true}
              />
            </div>
            <div className="eight wide field">
              <TextField
                name='propertyManagerEmail'
                label='Email'
                showInlineError={true}
              />
            </div>
            <div className="four wide field">
              <NumField
                name='propertyManagerPhoneHome'
                label='Home Phone'
                placeholder='Only numbers'
                decimal={false}
              />
            </div>
            <div className="four wide field">
              <NumField
                name='propertyManagerPhoneCell'
                label='Cell Phone'
                placeholder='Only numbers'
                decimal={false}
              />
            </div>
          </Form.Group>

          <Form.Group>
            <div className="eight wide field">
              <TextField
                name='propertyManagementCompanyName'
                label='Property Management Company Name'
                showInlineError={true}
              />
            </div>
            <div className="eight wide field">
              <TextField
                name='propertyManagementCompanyAddress'
                label='Property Management Company Address'
                placeholder='Street, City, State, Zip'
                showInlineError={true}
              />
            </div>
          </Form.Group>

          <div className="align-right">
            <Button>
              <Link to="/formseventh">&lt; Previous</Link>
            </Button>
            <SubmitField value='Submit' />
            {/* <Button>
              <Link to="">Save & Exit</Link>
            </Button> */}
            <Button>
              <Link to="/formninth" rel="noopener noreferrer">Save & Next &gt;</Link>
            </Button>
          </div>
          <ErrorsField />
        </AutoForm>
        <div className="add-margin-top-40px"></div>
      </Container>
    );
  }
}

export default Eighth;
