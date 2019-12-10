import React, { Children } from 'react';
// import { Stuffs } from '/imports/api/stuff/Stuff';
import { Header, Form, Button, Container, Loader, Label, Image, Grid } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import BoolField from 'uniforms-unstyled/BoolField';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { BaseField, nothing } from 'uniforms';
import { Section1DBSchemaWithoutOwner, Section1DB } from '/imports/api/stuff/Section1DB';
import { Section2DBSchemaWithoutOwner, Section2DB } from '/imports/api/stuff/Section2DB';
import { Section6DBSchemaWithoutOwner, Section6DB } from '/imports/api/stuff/Section6DB';
import { Section7DBSchemaWithoutOwner, Section7DB } from '/imports/api/stuff/Section7DB';
import { Section8DBSchemaWithoutOwner, Section8DB } from '/imports/api/stuff/Section8DB';
import { Section9DB } from '/imports/api/stuff/Section9DB';

/** Create a schema to specify the structure of the data to appear in the form. */

/** Renders the Page for adding a document. */
class AdminForms extends React.Component {

  loadScript() {
    function loadScript() {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js';
      script.async = true;
      document.body.appendChild(script);
      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js';
      script2.async = true;
      document.body.appendChild(script2);
    }
    loadScript();
  }

  onClick() {
    const element = document.getElementById('clickbind');
    if (element) {
      element.addEventListener('click', function () {

        // eslint-disable-next-line new-cap,no-undef
        const pdf = new jsPDF('p', 'pt', 'a4');
        pdf.fromHTML(document.getElementById('root'), function () {
          pdf.save('test.pdf');
        });
      });
    }
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    // eslint-disable-next-line max-len
    // console.log(this.props.doc);
    const DisplayIf = ({ child, condition }, { uniforms }) => (condition(uniforms) ? Children.only(child) : nothing);
    DisplayIf.contextTypes = BaseField.contextTypes;
    this.loadScript();
    return (
      <div>
        <Container>
          <AutoForm schema={Section1DBSchemaWithoutOwner} model={this.props.doc}>
            <Header as='h2' className='dividing header'>
              <strong>1. PRE-APPLICATION SURVEY</strong>
            </Header>
            <div className='add-margin-top-10px' />
            <h3>How did you hear about us?</h3>
            <SelectField
              checkboxes
              name='howDidYouHearAboutUs'
              label={false}
            />
            <Form.Group>
              <TextField
                name='otherHDYHA'
                label={false}
                placeholder={'Other'}
              />
            </Form.Group>

            <h3>Which of these do you have in your home?</h3>
            <BoolField
              className='bool-field-style ui checkbox new-line'
              name='washer'
              label='Washer'
              showInlineError={false}
            />

            <DisplayIf condition={context => context.model.washer}>
              <section>
                <Form.Group>
                  <NumField
                    name='ageOfWasher'
                    decimal={false}
                    label={false}
                    placeholder={'Age of washer'}
                  />
                </Form.Group>
              </section>
            </DisplayIf>

            <BoolField
              className='bool-field-style ui checkbox new-line'
              name='dryer'
            />
            <DisplayIf condition={context => context.model.dryer}>
              <section>
                <Form.Group>
                  <NumField
                    name='ageOfDryer'
                    decimal={false}
                    label={false}
                    placeholder={'Age of dryer'}
                  />
                </Form.Group>
              </section>
            </DisplayIf>


            <BoolField
              className='bool-field-style ui checkbox new-line'
              name='kitchenRefrigerator'
            />
            <DisplayIf condition={context => context.model.kitchenRefrigerator}>
              <section>
                <Form.Group>
                  <NumField
                    name='ageOfKitchenRefrigerator'
                    decimal={false}
                    label={false}
                    placeholder={'Age of kitchen refrigerator'}
                  />
                </Form.Group>
              </section>
            </DisplayIf>

            <BoolField
              className='bool-field-style ui checkbox new-line'
              name='secondRefrigerator'
            />

            <DisplayIf condition={context => context.model.secondRefrigerator}>
              <section>
                <Form.Group>
                  <NumField
                    name='ageOfSecondRefrigerator'
                    decimal={false}
                    label={false}
                    placeholder={'Age of second refrigerator'}
                  />
                </Form.Group>
              </section>
            </DisplayIf>

            <BoolField
              className='bool-field-style ui checkbox new-line'
              name='chestFreezer'
            />

            <DisplayIf condition={context => context.model.chestFreezer}>
              <section>
                <Form.Group>
                  <NumField
                    name='ageOfChestFreezer'
                    decimal={false}
                    label={false}
                    placeholder={'Age of chest freezer'}
                  />
                </Form.Group>
              </section>
            </DisplayIf>

            <BoolField
              className='bool-field-style ui checkbox new-line'
              label='Solar hot water heater'
              name='solarHWHeater'
            />
            <DisplayIf condition={context => context.model.solarHWHeater}>
              <section>
                <Form.Group>
                  <NumField
                    name='ageOfSolarHWHeater'
                    decimal={false}
                    label={false}
                    placeholder={'Age of solar hot water heater'}
                  />
                </Form.Group>
              </section>
            </DisplayIf>
            <BoolField
              className='bool-field-style ui checkbox new-line'
              label='Solar PV system'
              name='PVSystem'
            />

            <DisplayIf condition={context => context.model.PVSystem}>
              <section>
                <Form.Group>
                  <NumField
                    name='ageOfPVSystem'
                    decimal={false}
                    label={false}
                    placeholder={'Age of PV system'}
                  />
                </Form.Group>
              </section>
            </DisplayIf>
            <BoolField
              className='bool-field-style ui checkbox new-line'
              label='LED or CFL light bulbs'
              name='LEDCFLBulbs'
            />
            <BoolField
              className='bool-field-style ui checkbox new-line'
              label='WIFI'
              name='WIFI'
            />

            <h3>Which energy savings product(s) would you most likely be interested in installing within the next
              three (3) years?</h3>
            <SelectField
              checkboxes
              name='interestedInInstalling'
              label={false}
            />
            <Form.Group>
              <TextField
                name='otherInterestedInInstalling'
                label={false}
                placeholder={'Other'}
              />
            </Form.Group>

            <h3>Where are you most likely to go to get assistance or training regarding managing energy costs and
              finances?</h3>
            <SelectField
              checkboxes
              name='assistanceFrom'
              label={false}
            />

            <Form.Group>
              <TextField
                name='assistanceFromOther'
                label={false}
                placeholder={'Other'}
              />
            </Form.Group>

            <h3>Is there anyone you know that could benefit from lowering their energy costs?</h3>

            <Form.Group widths='equal'>
              <TextField
                name='anyoneYouKnowName'
                label={false}
                placeholder={'First, Middle, Last'}
              />
              <TextField
                name='anyoneYouKnowPhone'
                label={false}
                placeholder={'Phone number'}
              />
              <TextField
                name='anyoneYouKnowEmail'
                label={false}
                placeholder={'Email'}
              />
            </Form.Group>
          </AutoForm>
        </Container >

        <Container className='add-margin-top-40px'>
          <Header as='h2' className='dividing header'>
            2. RATEPAYER INFORMATION
            <Label className='green'>
              Note: The person named on the electric utility account should be the Applicant
            </Label>
          </Header>

          <AutoForm schema={Section2DBSchemaWithoutOwner} model={this.props.doc1}>

            <strong>Please print name exactly as it appears on your utility bill.</strong>
            <div className='add-margin-top-10px'></div>
            <Form.Group>
              <TextField
                className='five wide field'
                name='firstName'
                label={false}
                placeholder={'First Name'}
                showInlineError={false}
              />
              <TextField
                className='five wide field'
                name='middleName'
                label={false}
                placeholder={'Middle Name'}
              />
              <TextField
                className='five wide field'
                name='lastName'
                label={false}
                placeholder={'Last Name'}
                showInlineError={false}
              />
              <TextField
                className='five wide field'
                name='utilityAccountNumber'
                label={false}
                placeholder={'Utility Account Number'}
              />
            </Form.Group>

            {/* NEW SECTION */}
            <div className='add-margin-top-40px'></div>
            <Header as='h2' className='dividing header'>3. ENERGY IMPROVEMENT</Header>
            <SelectField
              label='What GEM$ Approved Energy Improvement would you like to install? (Check all that apply)'
              checkboxes
              showInlineError={false} name='energyImprovementOptions'
            />

            {/* NEW SECTION */}
            <div className='add-margin-top-40px'></div>
            <Header as='h2' className='dividing header'>4. CONTRACTOR INFORMATION</Header>
            <SelectField
              label='Have you met with a GEM$ Approved Contractor regarding installation?'
              checkboxes
              showInlineError={false}
              name='metWithApprovedContractor'
            />
            <br />
            <div>If yes, please indicate below:</div>
            <Form.Group>
              <TextField
                className='eight wide field'
                name='contractorName'
                label={false}
                placeholder={'Contractor Name'}
              />
              <TextField
                className='eight wide field'
                name='contactName'
                label={false}
                placeholder={'Contact Name'}
              />
            </Form.Group>

            {/* NEW SECTION */}
            <div className='add-margin-top-40px'></div>
            <Header as='h2' className='dividing header'>
              5. INSTALLATION ADDRESS
              <Label className='green'>
                Note: This is the address at which the proposed Energy Improvement will be installed
              </Label>
            </Header>

            <Form.Group>
              <TextField
                className='seven wide field'
                label='Street Address'
                placeholder='Street, City, State, Zip'
                name='streetAddress'
                showInlineError={false}
              />
              <SelectField
                className='seven wide field'
                label='On which island is this located?'
                name='islandLocation'
                showInlineError={false}
              />
              <SelectField
                className='seven wide field'
                label='Type of Residence'
                name='residenceType'
                showInlineError={false}
              />
            </Form.Group>
          </AutoForm>
        </Container>

        <Container>
          <Header as='h2' className='dividing header add-margin-top-40px'>
            6. Data For Program Reporting Purposes
          </Header>

          <AutoForm schema={Section6DBSchemaWithoutOwner} model={this.props.doc2}>
            <div className='sixteen wide field'>
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
              <NumField
                className='ten wide field'
                decimal={false}
                name='membersNotHomeNight'
                showInlineError={false}
                placeholder={'# people not home night'}
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
              <div className='seven wide field'>
                <TextField name='employerName' showInlineError={false} />
              </div>
              <div className='seven wide field'>
                <TextField name='occupation' showInlineError={false} />
              </div>
              <div className='seven wide field'>
                <NumField decimal={false} name='workPhone' showInlineError={false} />
              </div>
            </Form.Group>
          </AutoForm>
        </Container>

        <Container>
          <Header as='h2' className='dividing header add-margin-top-40px'>
            7. APPLICANT&#39;S INFORMATION
          <Label className='green'>
              Note: The Applicant is the person named on the utility account named in Section 2.
          </Label>
          </Header>

          <AutoForm schema={Section7DBSchemaWithoutOwner} model={this.props.doc3}>

            <Container>
              <Form.Group widths='equal'>
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
                placeholder={`Please list all parties named on Title to the
                Installation Address in Section 5 (including Trusts)`}
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
            </Container>
          </AutoForm>
        </Container>

        <Container>
          <Header as='h2' className='dividing header add-margin-top-40px'>
            8. SYSTEM OWNER (For Solar Tax Credits)
          </Header>
          <Label color='red'>
            Please check with your tax advisor. Please also have the name of the system
            owner added to the EI contract (along with the utility account holder).
          </Label>

          <div className='add-margin-top-20px'></div>
          <AutoForm schema={Section8DBSchemaWithoutOwner} model={this.props.doc4}>
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
              label={`If the entity(ies) or person(s) claiming the Tax Credit is not one of the
              Property Owner(s), please indicate relationship to Owner(s): `}
              showInlineError={false}
            />
          </AutoForm>
        </Container >

        <Container>
          <Header as='h2' className='dividing header add-margin-top-40px'>
            9. DISCLOSURE AND AGREEMENT REGARDING GEM$ APPLICATION
          </Header>

          <div>
            <p>
              By completing and submitting an Application, I certify that I have read,understand, and
              agree to all of the terms and conditions of the GEM$ Program. By signing below, I certify
              that all information provided on this Application is true, correct and complete.
              If necessary, I further agree to provide additional information to HGIA to review this
              Application. I hereby authorize HGIA to retain this Application whether or not it is approved.
            </p>
            <p>
              I further agree, that HGIA may communicate and share with my landlord and/or property
              manager and the Contractor identified in Section 4 above, or subsequently identified by
              me to HGIA, and disclose orally and/or in writing, the following information regarding this
              Application: energy usage history; whether this Application has been pre-approved by HGIA
              and any additional items requested by HGIA in order to complete the processing of my request;
              whether this Application has been approved by HGIA so that my landlord and/or property manager
              and Contractor(s) can proceed with scheduling the work; and whether this Application has been
              denied so that the landlord and/or property manager and Contractor(s) can determine if there
              are other financing available and whether I intend to proceed.
            </p>
            <p>
              I understand and agree that HGIA does not guarantee the security of any data submitted
              electronically and will not be held responsible or liable for interception by third parties.
              I understand and agree that in no event will HGIA be liable for any technical, hardware or
              software failure of any kind, any interruption in the availability of this service,
              any delay in operation or transmission, any incomplete transmission, computer virus,
              loss of data, or other similar loss.
            </p>
            <p>As an agency of the State of Hawaii, HGIA is subject to section 92F-12(a)(8) of the
              Hawaii Revised Statutes, which requires agencies to collect and make available upon
              request “the name, address and occupation of any person borrowing funds from a state
              or county loan program and the amount, purpose, and current status of the loan.”
            </p>
            <p>I also authorize and grant HGIA unrestricted permission to share the information
              provided on this Application and subsequent Program information related to the on-bill
              obligation (OBO), which will be the amount financed by HGIA to install the approved
              Energy Improvement until the OBO is paid in full, with HGIA’s Servicing Agent,
              HGIA’s Board of Directors, my electric utility, the Public Benefits Fund
              Administrator (currently known as Hawaii Energy) and the State of Hawaii.
            </p>
            <p>I understand I must meet all eligibility criteria and requirements, including at
              least an estimated 10% net utility bill savings for each Energy Improvement requested,
              utilize a GEMS Approved Contractor and obtain permission from my landlord in order
              to participate in GEM$.
            </p>
            <p>The federal Equal Credit Opportunity Act (ECOA) prohibits creditors from
              discriminating against credit applicants on the basis of race, color, religion,
              national origin, sex, marital status, age (provided the applicant has the
              capacity to enter into a binding contract); because all or part of the applicant&apos;s
              income derives from any public assistance program; or because the applicant has
              in good faith exercised any right under the Consumer Credit Protection Act.
              The federal agency that administers compliance with this law concerning this creditor
              is the Federal Trade Commission Consumer Response Center Washington, DC 20580
              1‐877‐FTC‐HELP (1‐877‐382‐4357) TDD: 1‐866‐653‐4261
              <a href='https://www.ftc.gov' target='_blank' rel='noopener noreferrer'>www.ftc.gov</a>.
            </p>
            <p>By signing this Application, I confirm that I have received HGIA’s Privacy Notice as
              part of this Application packet. I also agree that I may, but am not required to,
              agree to and accept the terms of this Application by electronic means, and that my
              submission of this Application by electronic means shall be sufficient evidence
              of my agreement to do so by electronic means.
            </p>
          </div>

          <br />

          <strong>Signature:</strong>

          <Grid.Row columns={2}>
            <Grid.Column>
              {this.props.doc5 ?
                <Image className='darkOutline' src={this.props.doc5.signature} /> :
                <div className='ui red'>*No signature</div>}
            </Grid.Column>
            <Grid.Column>
              {this.props.doc5 ? <Form.Input value={this.props.doc5.timestamp} /> :
                <Form.Input label='Date' type='date' id='getDate' width={16}></Form.Input>}
            </Grid.Column>
          </Grid.Row>
        </Container>

        <Button id='clickbind' onClick={this.onClick}>Print</Button>
      </div >
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
AdminForms.propTypes = {
  doc: PropTypes.object,
  doc1: PropTypes.object,
  doc2: PropTypes.object,
  doc3: PropTypes.object,
  doc4: PropTypes.object,
  doc5: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const subscription = Meteor.subscribe('StuffAdmin');

  return {
    doc: Section1DB.findOne({ owner: match.params.owner }),
    doc1: Section2DB.findOne({ owner: match.params.owner }),
    doc2: Section6DB.findOne({ owner: match.params.owner }),
    doc3: Section7DB.findOne({ owner: match.params.owner }),
    doc4: Section8DB.findOne({ owner: match.params.owner }),
    doc5: Section9DB.findOne({ owner: match.params.owner }),
    ready: subscription.ready(),
  };

})(AdminForms);
