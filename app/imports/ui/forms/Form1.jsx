import React from 'react';
import { Stuffs } from '/imports/api/stuff/Stuff';
import { Grid, Segment, Header, Form, Button, Container, Label, Divider } from 'semantic-ui-react';
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
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
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

            <strong>How did you hear about us?</strong>
              <SelectField
                  checkboxes
                  name='howDidYouHearAboutUs'
                  label={false}
              />

              <Form.Group>
              <TextField
                  //className="five wide field"
                  name='otherHDYHA'
                  label='Other'
              />
              </Form.Group>



            <Divider className="divider-props"/>


            <BoolField
                  //className="five wide field"
                  name='washer'
                  label='Washer'
                  showInlineError={false} // ???????????????????????????wat this do
              />
              <NumField
                  name='ageOfWasher'
                  decimal={false}
                  label={false}
                  placeholder={'Age of washer'}
              />
              <BoolField
                  name='dryer'
              />
              <NumField
                  name='ageOfDryer'
                  decimal={false}
                  label={false}
                  placeholder={'Age of washer'}
              />
              <BoolField
                  name='kitchenRefrigerator'
              />
              <NumField
                  name='ageOfKitchenRefrigerator'
                  decimal={false}
                  label={false}
                  placeholder={'Age of washer'}
              />
              <BoolField
                  name='secondRefrigerator'
              />
              <NumField
                  name='ageOfSecondRefrigerator'
                  decimal={false}
                  label={false}
                  placeholder={'Age of washer'}
              />
              <BoolField
                  name='chestFreezer'
              />
              <NumField
                  name='ageOfChestFreezer'
                  decimal={false}
                  label={false}
                  placeholder={'Age of washer'}
              />
              <BoolField
                  name='solarHWHeater'
              />
              <NumField
                  name='ageOfSolarHWHeater'
                  decimal={false}
                  label={false}
                  placeholder={'Age of washer'}
              />
              <BoolField
                  name='PVSystem'
              />
              <NumField
                  name='ageOfPVSystem'
                  decimal={false}
                  label={false}
                  placeholder={'Age of washer'}
              />
              <BoolField
                  name='LEDCFLBulbs'
              />
              <BoolField
                  name='WIFI'
              />


            <Divider className="divider-props"/>
            <Form.Group>
              <SelectField
                  checkboxes
                  name='interestedInInstalling'
              />
              <TextField
                  name='otherInterestedInInstalling'
              />
              <SelectField
                  checkboxes
                  name='assistanceFrom'
              />
              <TextField
                  name='assistanceFromOther'
              />
            </Form.Group>

            <Divider className="divider-props"/>

            <Form.Group>
              <TextField
                  name='anyoneYouKnowName'
              />
              <TextField
                  name='anyoneYouKnowPhone'
              />
              <TextField
                  name='anyoneYouKnowEmail'
              />
            </Form.Group>


            {/* NEW SECTION */}


            <ErrorsField/>
            <div className="align-right add-margin-top-20px">
              <Button>
                <Link to="/form/1">&lt; Previous</Link>
              </Button>
              <SubmitField value='Submit'/>
              <Button>
                <Link to="/form/6">Save & Next &gt;</Link>
              </Button>
            </div>
          </AutoForm>
        </Container>
    );
  }
}

export default Form1;
