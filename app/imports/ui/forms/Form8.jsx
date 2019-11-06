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

class Form8 extends React.Component {

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
        <Header as="h2" className="dividing header">8. LANDLORD OR PROPERTY MANAGER INFORMATION</Header>

        <AutoForm schema={Section8DBSchemaWithoutOwner} onSubmit={data => this.submit(data)}>
          <Form.Group>
            <TextField
              className='eight wide field'
              name='landlordName'
              label='Landlord Name'
              placeholder='First, Middle, Last'
              showInlineError={false}
            />
            <TextField
              className='eight wide field'
              name='landlordEmail'
              label='Email'
              showInlineError={false}
            />
            <NumField
              className='four wide field'
              decimal={false}
              name='landlordPhoneHome'
              label='Home Phone'
              placeholder='Only numbers'
            />
            <NumField
              className='four wide field'
              decimal={false}
              name='landlordPhoneCell'
              label='Cell Phone'
              placeholder='Only numbers'
            />
          </Form.Group>

          <Form.Group>
            <TextField
              className='eight wide field'
              name='propertyManagerName'
              label='Property Manager Name'
              placeholder='First, Middle, Last'
              showInlineError={false}
            />
            <TextField
              className='eight wide field'
              name='propertyManagerEmail'
              label='Email'
              showInlineError={false}
            />
            <NumField
              className='four wide field'
              decimal={false}
              name='propertyManagerPhoneHome'
              label='Home Phone'
              placeholder='Only numbers'
            />
            <NumField
              className='four wide field'
              decimal={false}
              name='propertyManagerPhoneCell'
              label='Cell Phone'
              placeholder='Only numbers'
            />
          </Form.Group>

          <Form.Group>
            <TextField
              className='eight wide field'
              name='propertyManagementCompanyName'
              label='Property Management Company Name'
              showInlineError={false}
            />
            <TextField
              className='eight wide field'
              name='propertyManagementCompanyAddress'
              label='Property Management Company Address'
              placeholder='Street, City, State, Zip'
              showInlineError={false}
            />
          </Form.Group>

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
