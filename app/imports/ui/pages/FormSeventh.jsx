import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Header, Container, Label, Button } from 'semantic-ui-react';
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

class Seventh extends React.Component {

  addOwners = () => {
    var newdiv = document.createElement("div");

    newdiv.innerHTML = '<div class="fields"><div class="ten wide field"><label>Name</label><div class="ui input"><input type="text"></div></div><div class="six wide field"><label>Relationship to Applicant</label><div class="ui input"><input type="text"></div></div></div>';

    let div = document.getElementById('adding-owners');
    div.appendChild(newdiv);
  }

  submit(data) {
    const { email, phoneHome, phoneMobile } = data;
    const owner = Meteor.user().username;
    Section7DB.insert({ owner, email, phoneHome, phoneMobile }, (error) => {
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
        <div className="add-margin-top-40px"></div>
        <Header as="h3" className="dividing header">
          7. APPLICANT&#39;S INFORMATION
          <Label className="float-right green">
            Note: The Applicant is the person named on the utility account named in Section 2.
          </Label>
        </Header>

        <AutoForm schema={Section7DBSchemaWithoutOwner} onSubmit={data => this.submit(data)}>

          <Container>
            <Form.Group widths="equal">
              <TextField
                name='email'
                label='Email'
                showInlineError={true}
              />
              <div className="five wide field">
                <NumField
                  name='phoneHome'
                  label='Home Phone'
                decimal={false}
                />
              </div>
              <div className="five wide field">
                <NumField
                  name='phoneMobile'
                  label='Mobile Phone'
                  decimal={false}
                />
              </div>
            </Form.Group>

            <Form.Input
              name='mailingAddress'
              label='Mailing Address'
              placeholder='(if different from Installation Address in Section 5)'
              width={16}
            />

            <Form.Input
              name='partiesNames'
              label='All Parties Names'
              placeholder='Please list all parties named on Title to the Installation Address in Section 5 (including Trusts)'
              width={16}
            />

            <Button type="button" id="add-owners-btn" primary onClick={this.addOwners}>add other owner(s)</Button>

            <div id="adding-owners"></div>
            {/* <Form.Group>
              <Form.Input
                label='Name'
                width={10}
              />
              <Form.Input
                label='Relationship to Applicant'
                width={6}
              />
            </Form.Group> */}

            <div className="align-right">
              <Button>
                <Link to="/formsixth">&lt; Previous</Link>
              </Button>
              <SubmitField value='Submit' />
              <Button>
                <Link to="/formeighth">Save & Next &gt;</Link>
              </Button>
              <ErrorsField />
            </div>
          </Container>
        </AutoForm>
        <div className="add-margin-top-40px"></div>
      </Container>
    );
  }
}

export default Seventh;

// Seventh.propTypes = {
//   ready: PropTypes.bool.isRequired,
// };

// /** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
// export default withTracker(() => {
//   // Ensure that minimongo is populated with all collections prior to running render().
//   const sub1 = Meteor.subscribe(Section7DB);
//   return {
//     ready: sub1.ready(),
//   };
// })(Seventh);
