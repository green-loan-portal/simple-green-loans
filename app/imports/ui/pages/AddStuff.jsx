import React from 'react';
import { Stuffs } from '/imports/api/stuff/Stuff';
import { Grid, Segment, Header, Form } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import BoolField from 'uniforms-unstyled/BoolField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { AppFormValues } from '../../api/stuff/Stuff';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: { type: String, optional: true },
  quantity: { type: Number, optional: true },
  condition: {
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    defaultValue: 'good',
    optional: true,
  },

  otherHDYHA: { type: String, optional: true },
  howDidYouHearAboutUs: { type: Array },
  'howDidYouHearAboutUs.$': { type: String, optional: true, allowedValues: AppFormValues.howDidYouHearAbout },
  washer: { type: Boolean, optional: true },
  ageOfWasher: { type: Number, optional: true },
  dryer: { type: Boolean, optional: true },
  ageOfDryer: { type: Number, optional: true },
  kitchenRefrigerator: { type: Boolean, optional: true },
  ageOfKitchenRefrigerator: { type: Number, optional: true },
  secondRefrigerator: { type: Boolean, optional: true },
  ageOfSecondRefrigerator: { type: Number, optional: true },
  chestFreezer: { type: Boolean, optional: true },
  ageOfChestFreezer: { type: Number, optional: true },
  solarHWHeater: { type: Boolean, optional: true },
  ageOfSolarHWHeater: { type: Number, optional: true },
  PVSystem: { type: Boolean, optional: true },
  ageOfPVSystem: { type: Number, optional: true },
  LEDCFLBulbs: { type: Boolean, optional: true },
  WIFI: { type: Boolean, optional: true },
  interestedInInstalling: { type: Array },
  'interestedInInstalling.$': { type: String, optional: true, allowedValues: AppFormValues.interestedInInstalling },
  otherInterestedInInstalling: { type: String, optional: true },
  assistanceFrom: { type: Array },
  'assistanceFrom.$': { type: String, optional: true, allowedValues: AppFormValues.assistanceFrom },
  assistanceFromOther: { type: String, optional: true },
  anyoneYouKnowName: { type: String, optional: true },
  anyoneYouKnowPhone: { type: Number, optional: true },
  anyoneYouKnowEmail: { type: String, optional: true },
  nameOnUtilAcc: { type: String, optional: true },
  utilAccNum: { type: Number, optional: true },
  energyImpWouldLikeToInstall: { type: Array },
  'energyImpWouldLikeToInstall.$': {
    type: String,
    optional: true,
    allowedValues: AppFormValues.energyImpWouldLikeToInstall,
  },
  approvedContractorName: { type: String, optional: true },
  approvedContractorContact: { type: String, optional: true },
  installAddress: { type: String, optional: true },
  whichIsland: { type: String, allowedValues: AppFormValues.whichIsland },
  typeOfResidence: { type: String, optional: true, allowedValues: AppFormValues.typeOfResidence },
  typeOfResidenceOther: { type: String, optional: true },

});

/** Renders the Page for adding a document. */
class AddStuff extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, quantity, condition, otherHDYHA } = data; // EDIT THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
    const owner = Meteor.user().username;
    Stuffs.insert({ name, quantity, condition, otherHDYHA, owner }, // EDIT THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
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
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Stuff</Header>
            <AutoForm ref={ref => {
              fRef = ref;
            }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
              <Segment>
                <Form.Group width='equal'>
                  <TextField name='name'/>
                  <NumField name='quantity' decimal={false}/>
                  <SelectField name='condition'/>
                </Form.Group>
                <section>
                  <SelectField checkboxes name='howDidYouHearAboutUs'/>
                </section>
                <TextField name='otherHDYHA'/>
                <BoolField name='washer' fluid label='Washer'/>
                <NumField name='ageOfWasher' decimal={false} label={false} placeholder={'Age of washer'}/>
                <BoolField name='dryer'/>
                <NumField name='ageOfDryer' decimal={false} label={false} placeholder={'Age of washer'}/>
                <BoolField name='kitchenRefrigerator'/>
                <NumField name='ageOfKitchenRefrigerator' decimal={false} label={false} placeholder={'Age of washer'}/>
                <BoolField name='secondRefrigerator'/>
                <NumField name='ageOfSecondRefrigerator' decimal={false} label={false} placeholder={'Age of washer'}/>
                <BoolField name='chestFreezer'/>
                <NumField name='ageOfChestFreezer' decimal={false} label={false} placeholder={'Age of washer'}/>
                <BoolField name='solarHWHeater'/>
                <NumField name='ageOfSolarHWHeater' decimal={false} label={false} placeholder={'Age of washer'}/>
                <BoolField name='PVSystem'/>
                <NumField name='ageOfPVSystem' decimal={false} label={false} placeholder={'Age of washer'}/>
                <BoolField name='LEDCFLBulbs'/>
                <BoolField name='WIFI'/>
                <SelectField checkboxes name='interestedInInstalling'/>
                <TextField name='otherInterestedInInstalling'/>
                <SelectField checkboxes name='assistanceFrom'/>
                <TextField name='assistanceFromOther'/>


                <TextField name='anyoneYouKnowName'/>
                <TextField name='anyoneYouKnowPhone'/>
                <TextField name='anyoneYouKnowEmail'/>
                <TextField name='nameOnUtilAcc'/>
                <NumField name='utilAccNum' decimal={false} label={'util account num'}/>

                <SelectField checkboxes name='energyImpWouldLikeToInstall'/>
                <TextField name='approvedContractorName'/>
                <TextField name='approvedContractorContact'/>
                <TextField name='installAddress'/>

                <SelectField checkboxes name='whichIsland'/>

                <SelectField checkboxes name='typeOfResidence'/>
                <TextField name='typeOfResidenceOther'/>

                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddStuff;
