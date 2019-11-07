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
  modifyOwners = () => {
    let newDiv = document.createElement("div");

    newDiv.innerHTML = `
    <div class="fields modify-owners">
      <div class="sixteen wide field">
          <label>Name</label>
          <div class="ui input">
              <input type="text" class="owner-name" />
          </div>
      </div>
      <div class="nine wide field">
          <label>Relationship to Applicant</label>
          <div class="ui input">
              <input type="text" class="owner-relationship" />
          </div>
      </div>
      <div class="one wide field">
          <button type="button" class="ui red icon button child-owners" style="margin-top: 55%">
            <i aria-hidden="true" class="trash icon"></i>
          </button>
      </div>
    </div>`;

    // remove child when trash button (".child-owners") is clicked
    $("#adding-owners").on("click", ".child-owners", function () {
      $(this).closest(".modify-owners").remove();
    });

    $('.owner-name').on("input", function () {
      console.log('"list": [{"owner-name": "' + $(this).val() + '", "owner-relationship": "' + $('.owner-name')[0].closest(".fields").children[1].children[1].children[0].value + '"}]');
    });

    // add a brand new child
    let div = document.getElementById('adding-owners');
    div.appendChild(newDiv);
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

  addHeader = function () {
    var head = document.getElementsByTagName('head')[0];

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js";
    head.appendChild(script);
  }

  render() {
    return (
      <Container>
        {this.addHeader()}
        <Header as="h2" className="dividing header">
          7. APPLICANT&#39;S INFORMATION
          <Label className="green">
            Note: The Applicant is the person named on the utility account named in Section 2.
          </Label>
        </Header>

        <AutoForm schema={Section7DBSchemaWithoutOwner} onSubmit={data => this.submit(data)}>

          <Container>
            <Form.Group widths="equal">
              <TextField
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

            <Button type="button" id="add-owners-btn" primary onClick={this.modifyOwners}>add other owner(s)</Button>

            {/* <Button icon color='red'>
              <Icon name='trash' />
            </Button> */}

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

{/* <div class="one wide field"><label></label><button type="button"><i aria-hidden="true" class="primary trash large icon"></i></button></div> */ }