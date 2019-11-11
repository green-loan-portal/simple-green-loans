import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ExpandCanvas } from "../js/userSignature";
import AutoForm from 'uniforms-semantic/AutoForm';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import HiddenField from 'uniforms-semantic/HiddenField';
import TextField from 'uniforms-semantic/TextField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Section9DB, Section9DBSchemaWithoutOwner } from '/imports/api/stuff/Section9DB';

class Form9 extends React.Component {
  submit(data) {
    const { userSignature } = data;
    console.log(userSignature);
    // const owner = Meteor.user().username;
    // const todaysDate = new Date().toJSON().split("T")[0];
    // Section9DB.insert({
    //   owner, userSignature, todaysDate
    // }, (error) => {
    //   if (error) {
    //     swal('Error', error.message, 'error');
    //   } else {
    //     swal('Success', 'Section #9 saved successfully', 'success');
    //   }
    // });
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
        <Header as="h2" className="dividing header">9. DISCLOSURE AND AGREEMENT REGARDING GEM$ APPLICATION</Header>

        <p>By completing and submitting an Application, I certify that I have read, understand, and agree to all of the terms and conditions of the
        GEM$ Program. By signing below, I certify that all information provided on this Application is true, correct and complete. If necessary, I
        further agree to provide additional information to HGIA to review this Application. I hereby authorize HGIA to retain this Application
        whether or not it is approved.</p>
        <p>I further agree, that HGIA may communicate and share with my landlord and/or property manager and the Contractor identified in Section
        4 above, or subsequently identified by me to HGIA, and disclose orally and/or in writing, the following information regarding this
        Application: energy usage history; whether this Application has been pre-approved by HGIA and any additional items requested by HGIA
        in order to complete the processing of my request; whether this Application has been approved by HGIA so that my landlord and/or
        property manager and Contractor(s) can proceed with scheduling the work; and whether this Application has been denied so that the
        landlord and/or property manager and Contractor(s) can determine if there are other financing available and whether I intend to proceed.</p>
        <p>I understand and agree that HGIA does not guarantee the security of any data submitted electronically and will not be held responsible
        or liable for interception by third parties. I understand and agree that in no event will HGIA be liable for any technical, hardware or software
        failure of any kind, any interruption in the availability of this service, any delay in operation or transmission, any incomplete transmission,
        computer virus, loss of data, or other similar loss.</p>
        <p>As an agency of the State of Hawaii, HGIA is subject to section 92F-12(a)(8) of the Hawaii Revised Statutes, which requires agencies to
        collect and make available upon request “the name, address and occupation of any person borrowing funds from a state or county loan
        program and the amount, purpose, and current status of the loan.”</p>
        <p>I also authorize and grant HGIA unrestricted permission to share the information provided on this Application and subsequent Program
        information related to the on-bill obligation (OBO), which will be the amount financed by HGIA to install the approved Energy Improvement
        until the OBO is paid in full, with HGIA’s Servicing Agent, HGIA’s Board of Directors, my electric utility, the Public Benefits Fund
        Administrator (currently known as Hawaii Energy) and the State of Hawaii.</p>
        <p>I understand I must meet all eligibility criteria and requirements, including at least an estimated 10% net utility bill savings for each Energy
        Improvement requested, utilize a GEMS Approved Contractor and obtain permission from my landlord in order to participate in GEM$.</p>
        <p>The federal Equal Credit Opportunity Act (ECOA) prohibits creditors from discriminating against credit applicants on the basis of race,
        color, religion, national origin, sex, marital status, age (provided the applicant has the capacity to enter into a binding contract); because
        all or part of the applicant's income derives from any public assistance program; or because the applicant has in good faith exercised any
        right under the Consumer Credit Protection Act. The federal agency that administers compliance with this law concerning this creditor is
        the Federal Trade Commission Consumer Response Center Washington, DC 20580 1‐877‐FTC‐HELP (1‐877‐382‐4357) TDD: 1‐866‐
                  653‐4261 <a href="https://www.ftc.gov" target="_blank" rel="noopener noreferrer">www.ftc.gov</a>.</p>
        <p>By signing this Application, I confirm that I have received HGIA’s Privacy Notice as part of this Application packet. I also agree that I may,
        but am not required to, agree to and accept the terms of this Application by electronic means, and that my submission of this Application
      by electronic means shall be sufficient evidence of my agreement to do so by electronic means.</p>

        <AutoForm schema={Section9DBSchemaWithoutOwner} onSubmit={data => this.submit(data)}>
          <Form.Group>
            <Form.Input name='userSignature' label="Applicant’s Signature" width={12} className="application-signature" required>
              <canvas id="sig-canvas" className="set-canvas-width">
                Please use another browser in order to sign this form.
              </canvas>
            </Form.Input>

            <div className='four wide field'>
              <Form.Input label="Date" type="date" id="getDate" width={16}></Form.Input>
              <br />
              <Form.Input>
                <Button type="button" className="green sixteen wide field require-margin" id="sig-clearBtn">Clear Signature</Button>
              </Form.Input>
              <br />
              <Form.Input>
                <Button type='button' className='green sixteen wide field require-margin' id='submitFieldForm'>Upload Signature</Button>
              </Form.Input>
            </div>
          </Form.Group>
          {/* <TextField
            name='userSignature'
            id='customer-signature'
            showInlineError={false}
          /> */}

          {/* <TextField id="userSignatureField" name="userSignature" showInlineError={false} /> */}
          <ErrorsField />
          <div className="align-right add-margin-top-20px">
            <Button>
              <Link to="/form/8">&lt; Previous</Link>
            </Button>
            {/* <Button>
              <Link to="">Save & Exit</Link>
            </Button> */}
            {/* <Button type='button' id='submitFieldForm'>click here</Button> */}
            <SubmitField value='Submit' id='submitFormHidden' />
            <Button type='button' id='saveBtn'>Save</Button>
            <Button>
              <Link to="/authorization">Save & Next &gt;</Link>
            </Button>
          </div>
        </AutoForm>

        <div>{ExpandCanvas()}</div>
      </Container>
    );
  }
}

export default Form9;


// https://www.meteor.com/tutorials/blaze/update-and-remove
