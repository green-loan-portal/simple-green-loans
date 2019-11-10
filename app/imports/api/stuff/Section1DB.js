import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
// import { Form1AppFormValues } from './Stuff';

/** Define a Mongo collection to hold the data. */
const Section1DB = new Mongo.Collection('Section1DB');

const Form1AppFormValues = {

  howDidYouHearAbout: ['Contractor', 'Community Organization', 'News/Radio/TV', 'Online (Internet)', 'Utility',
    'Public Event', 'Hawaii Energy', 'Friends & Family'],
  // whichDoYouHaveInHome: ['Washer', 'Dryer', ' Kitchen Refrigerator', '2nd Refrigerator',
  //  'Chest Freezer', 'Solar Hot Water heater', 'Solar PV System', 'LED or CFL Light Bulbs', 'WIFI'],
  interestedInInstalling: ['Washer', 'Dryer', 'Kitchen Refrigerator', 'Solar Hot Water Heater',
    'Solar PV System', 'LED or CFL Light Bulbs'],
  assistanceFrom: ['Church', 'Community Event', 'School/Class', 'Online', 'Accountant/Tax Preparer',
    'Financial Advisor'],
  energyImpWouldLikeToInstall: ['Solar Thermal Hot Water Heater',
    'Solar PV Water Heater', 'Heat Pump Water Heater', 'Solar PV System'],
  whichIsland: ['Oahu', 'Maui', 'Lanai', 'Molokai', 'Hawaii'],
  typeOfResidence: ['Single Family Dwelling', 'Duplex', 'Townhouse', 'Apartment'],

};

/** Define a schema without owner */
const Section1DBSchemaWithoutOwner = new SimpleSchema({
  otherHDYHA: { type: String, optional: true },
  howDidYouHearAboutUs: { type: Array },
  'howDidYouHearAboutUs.$': { type: String, optional: true, allowedValues: Form1AppFormValues.howDidYouHearAbout },
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
  'interestedInInstalling.$': {
    type: String,
    optional: true,
    allowedValues: Form1AppFormValues.interestedInInstalling,
  },
  otherInterestedInInstalling: { type: String, optional: true },
  assistanceFrom: { type: Array },
  'assistanceFrom.$': { type: String, optional: true, allowedValues: Form1AppFormValues.assistanceFrom },
  assistanceFromOther: { type: String, optional: true },
  anyoneYouKnowName: { type: String, optional: true },
  anyoneYouKnowPhone: { type: Number, optional: true },
  anyoneYouKnowEmail: { type: String, optional: true },
  nameOnUtilAcc: { type: String, optional: true },

}, { tracker: Tracker });

/** Define a schema to specify the structure of each document in the collection. */
const Section1DBSchema = new SimpleSchema({

  owner: String,
  otherHDYHA: { type: String, optional: true },
  howDidYouHearAboutUs: { type: Array },
  'howDidYouHearAboutUs.$': { type: String, optional: true, allowedValues: Form1AppFormValues.howDidYouHearAbout },
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
  'interestedInInstalling.$': {
    type: String,
    optional: true,
    allowedValues: Form1AppFormValues.interestedInInstalling,
  },
  otherInterestedInInstalling: { type: String, optional: true },
  assistanceFrom: { type: Array },
  'assistanceFrom.$': { type: String, optional: true, allowedValues: Form1AppFormValues.assistanceFrom },
  assistanceFromOther: { type: String, optional: true },
  anyoneYouKnowName: { type: String, optional: true },
  anyoneYouKnowPhone: { type: Number, optional: true },
  anyoneYouKnowEmail: { type: String, optional: true },
  nameOnUtilAcc: { type: String, optional: true },

}, { tracker: Tracker });

/** Attach this schema to the collection. */
Section1DB.attachSchema(Section1DBSchema);

/** Make the collection and schema available to other code. */
export { Form1AppFormValues, Section1DB, Section1DBSchemaWithoutOwner };
