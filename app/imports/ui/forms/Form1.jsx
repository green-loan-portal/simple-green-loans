import React, { Children } from 'react';
// import { Stuffs } from '/imports/api/stuff/Stuff';
import { Header, Form, Button, Container, Divider } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import BoolField from 'uniforms-unstyled/BoolField';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
// import SimpleSchema from 'simpl-schema';
// import { Section1DB } from '../../api/stuff/Stuff';
import { Section1DBSchemaWithoutOwner, Section1DB } from '/imports/api/stuff/Section1DB';
import { BaseField, nothing } from 'uniforms';
//import schema from './DisplayIfFieldSchema';

/** Create a schema to specify the structure of the data to appear in the form. */

/** Renders the Page for adding a document. */
class Form1 extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const {
      howDidYouHearAboutUs, otherHDYHA, washer, ageOfWasher, dryer, ageOfDryer,
      kitchenRefrigerator, ageOfKitchenRefrigerator, secondRefrigerator, ageOfSecondRefrigerator,
      chestFreezer, ageOfChestFreezer, solarHWHeater, ageOfSolarHWHeater, PVSystem, ageOfPVSystem,
      LEDCFLBulbs, WIFI, interestedInInstalling, otherInterestedInInstalling, assistanceFrom,
      assistanceFromOther, anyoneYouKnowName, anyoneYouKnowPhone, anyoneYouKnowEmail, nameOnUtilAcc,
    } = data;
    const owner = Meteor.user().username;
    Section1DB.insert({
          owner,
          howDidYouHearAboutUs,
          otherHDYHA,
          washer,
          ageOfWasher,
          dryer,
          ageOfDryer,
          kitchenRefrigerator,
          ageOfKitchenRefrigerator,
          secondRefrigerator,
          ageOfSecondRefrigerator,
          chestFreezer,
          ageOfChestFreezer,
          solarHWHeater,
          ageOfSolarHWHeater,
          PVSystem,
          ageOfPVSystem,
          LEDCFLBulbs,
          WIFI,
          interestedInInstalling,
          otherInterestedInInstalling,
          assistanceFrom,
          assistanceFromOther,
          anyoneYouKnowName,
          anyoneYouKnowPhone,
          anyoneYouKnowEmail,
          nameOnUtilAcc,
        },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Saved successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {

    // eslint-disable-next-line max-len
    const DisplayIf = ({ children, condition }, { uniforms }) => (condition(uniforms) ? Children.only(children) : nothing);
    DisplayIf.contextTypes = BaseField.contextTypes;
    return (

        <Container>
          <AutoForm schema={Section1DBSchemaWithoutOwner} onSubmit={data => this.submit(data)}>
            <Header as='h2' className='dividing centered header'>
              Pre-Application Survey
              {/** }
               <Label className="green">
               Note: The person named on the electric utility account should be the Applicant
               </Label>
               */}
            </Header>
            <div className='add-margin-top-10px'/>
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

            <Divider className="divider-props"/>

            <h3>Which of these do you have in your home?</h3>
            <BoolField
                className='bool-field-style'
                name='washer'
                label='Washer'
                showInlineError={false} // ???????????????????????????wat this do
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
                className='bool-field-style'
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
                className='bool-field-style'
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
                className='bool-field-style'
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
                className='bool-field-style'
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
                className='bool-field-style'
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
                className='bool-field-style'
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
                className='bool-field-style'
                name='LEDCFLBulbs'
            />
            <BoolField
                className='bool-field-style'
                name='WIFI'
            />


            <Divider className="divider-props"/>


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

            <Divider className="divider-props"/>


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


            <Divider className="divider-props"/>


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


            {/* NEW SECTION */}


            <ErrorsField/>
            <div className="align-right add-margin-top-20px">
              {/**
               <Button>
               <Link to="/form/1">&lt; Previous</Link>
               </Button>
               <SubmitField value='Submit'/>
               */}
              <Button>
                <Link to="/form/2">Save & Next &gt;</Link>
              </Button>
            </div>
          </AutoForm>
        </Container>
    );
  }
}

export default Form1;
