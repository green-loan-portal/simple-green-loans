import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

class Eighth extends React.Component {
<<<<<<< HEAD
    render() {
        return (
            <Container>
                <div className="add-margin-top-40px"></div>
                <Form>
                    <Header as="h3" className="dividing header">8. LANDLORD OR PROPERTY MANAGER INFORMATION</Header>

                    <Form.Group>
                        <Form.Input label="Landlord Name" placeholder='First, Middle, Last' width={8} required />
                        <Form.Input type='email' label='Email' width={8} required />
                        <Form.Input label="Home Phone" width={4} />
                        <Form.Input label="Mobile Phone" width={4} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input label="Property Manager Name"
                            placeholder='First, Middle, Last' width={8} required />
                        <Form.Input type='email' label='Email' width={8} required />
                        <Form.Input label="Work Phone" width={4} />
                        <Form.Input label="Cell Phone" width={4} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input label="Property Management Company Name" width={8} required />
                        <Form.Input label="Property Management Company Address"
                            placeholder='Street, City, State, Zip' width={8} required />
                    </Form.Group>
                    <div className="align-right">
                        <Button>
                            <Link to="/formseventh">&lt; Previous</Link>
                        </Button>
                        <Button>
                            <Link to="">Save & Exit</Link>
                        </Button>
                        <Button>
                            <Link to="/formninth" rel="noopener noreferrer">Save & Next &gt;</Link>
                        </Button>
                    </div>
                </Form>
                <div className="add-margin-top-40px"></div>
            </Container>
        );
    }
=======
=======
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
>>>>>>> parent of 2bc5508... Finished section 2-9 except 7 & 9. Moved all forms to imports/ui/forms directory

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
<<<<<<< HEAD
        <div className="add-margin-top-40px"></div>
<<<<<<< HEAD
        <Header as="h3" className="dividing header">8. LANDLORD OR PROPERTY MANAGER INFORMATION</Header>
=======
        <Header as="h2" className="dividing header">8. LANDLORD OR PROPERTY MANAGER INFORMATION</Header>
>>>>>>> parent of 99fb843... Updated minor layouts
=======
        <Header as="h2" className="dividing header">8. LANDLORD OR PROPERTY MANAGER INFORMATION</Header>
>>>>>>> parent of 2bc5508... Finished section 2-9 except 7 & 9. Moved all forms to imports/ui/forms directory

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
<<<<<<< HEAD
                name='landlordPhoneHome'
                label='Home Phone'
                placeholder='Only numbers'
<<<<<<< HEAD
                decimal={false}
=======
>>>>>>> parent of 99fb843... Updated minor layouts
                />
            </div>
            <div className="four wide field">
              <NumField
                name='landlordPhoneCell'
                label='Cell Phone'
                placeholder='Only numbers'
                decimal={false}
=======
                decimal={false}
                name='landlordPhoneHome'
                label='Home Phone'
                placeholder='Only numbers'
              />
            </div>
            <div className="four wide field">
              <NumField
                decimal={false}
                name='landlordPhoneCell'
                label='Cell Phone'
                placeholder='Only numbers'
>>>>>>> parent of 2bc5508... Finished section 2-9 except 7 & 9. Moved all forms to imports/ui/forms directory
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
<<<<<<< HEAD
                name='propertyManagerPhoneHome'
                label='Home Phone'
                placeholder='Only numbers'
                decimal={false}
=======
                decimal={false}
                name='propertyManagerPhoneHome'
                label='Home Phone'
                placeholder='Only numbers'
>>>>>>> parent of 2bc5508... Finished section 2-9 except 7 & 9. Moved all forms to imports/ui/forms directory
              />
            </div>
            <div className="four wide field">
              <NumField
<<<<<<< HEAD
                name='propertyManagerPhoneCell'
                label='Cell Phone'
                placeholder='Only numbers'
                decimal={false}
=======
                decimal={false}
                name='propertyManagerPhoneCell'
                label='Cell Phone'
                placeholder='Only numbers'
>>>>>>> parent of 2bc5508... Finished section 2-9 except 7 & 9. Moved all forms to imports/ui/forms directory
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

<<<<<<< HEAD
          <div className="align-right">
            <Button>
              <Link to="/formseventh">&lt; Previous</Link>
=======
          <div className="align-right add-margin-top-20px">
            <Button>
              <Link to="/form/7">&lt; Previous</Link>
>>>>>>> parent of 2bc5508... Finished section 2-9 except 7 & 9. Moved all forms to imports/ui/forms directory
            </Button>
            <SubmitField value='Submit' />
            {/* <Button>
              <Link to="">Save & Exit</Link>
            </Button> */}
            <Button>
<<<<<<< HEAD
              <Link to="/formninth" rel="noopener noreferrer">Save & Next &gt;</Link>
=======
              <Link to="/form/9" rel="noopener noreferrer">Save & Next &gt;</Link>
>>>>>>> parent of 2bc5508... Finished section 2-9 except 7 & 9. Moved all forms to imports/ui/forms directory
            </Button>
          </div>
          <ErrorsField />
        </AutoForm>
<<<<<<< HEAD
        <div className="add-margin-top-40px"></div>
      </Container>
    );
  }
>>>>>>> parent of ad84aeb... Finished Section 6 & 8. Need to update/fix section 7 & 9
=======
      </Container>
    );
  }
>>>>>>> parent of 2bc5508... Finished section 2-9 except 7 & 9. Moved all forms to imports/ui/forms directory
}

export default Eighth;
