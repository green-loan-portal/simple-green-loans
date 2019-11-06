import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
/** RENAME FILE TO SOMETHING ELSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */
/** Define a Mongo collection to hold the data.
 * ['', '', '', '', '', '', '', '', '', '', ], */
const Stuffs = new Mongo.Collection('Stuffs');

/** How to implement "other". IF other is checked, make a form available" */
export const AppFormValues = {
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

/** Define a schema to specify the structure of each document in the collection. */
const StuffSchema = new SimpleSchema({

  // name: String,
  // quantity: { type: Number, optional: true },
  owner: String,
  // condition: {
  //   type: String,
  //   allowedValues: ['excellent', 'good', 'fair', 'poor'],
  //   defaultValue: 'good',
  // },
  otherHDYHA: String,
  howDidYouHearAboutUs: { type: Array },
  'howDidYouHearAboutUs.$': { type: String, optional: true, allowedValues: AppFormValues.howDidYouHearAbout },
  washer: Boolean,
  ageOfWasher: Number,
  dryer: Boolean,
  ageOfDryer: Number,
  kitchenRefrigerator: Boolean,
  ageOfKitchenRefrigerator: Number,
  secondRefrigerator: Boolean,
  ageOfSecondRefrigerator: Number,
  chestFreezer: Boolean,
  ageOfChestFreezer: Number,
  solarHWHeater: Boolean,
  ageOfSolarHWHeater: Number,
  PVSystem: Boolean,
  ageOfPVSystem: Number,
  LEDCFLBulbs: Boolean,
  WIFI: Boolean,
  interestedInInstalling: { type: Array },
  'interestedInInstalling.$': { type: String, optional: true, allowedValues: AppFormValues.interestedInInstalling },
  otherInterestedInInstalling: String,
  assistanceFrom: { type: Array },
  'assistanceFrom.$': { type: String, optional: true, allowedValues: AppFormValues.assistanceFrom },
  assistanceFromOther: String,
  anyoneYouKnowName: String,
  anyoneYouKnowPhone: Number,
  anyoneYouKnowEmail: String,
  nameOnUtilAcc: String,
  utilAccNum: Number,
  energyImpWouldLikeToInstall: { type: Array },
  'energyImpWouldLikeToInstall.$': {
    type: String,
    optional: true,
    allowedValues: AppFormValues.energyImpWouldLikeToInstall,
  },
  approvedContractorName: String,
  approvedContractorContact: String,
  installAddress: String,
  whichIsland: { type: String, allowedValues: AppFormValues.whichIsland },
  typeOfResidence: { type: String, optional: true, allowedValues: AppFormValues.typeOfResidence },
  typeOfResidenceOther: String,
  email: { type: String, optional: true },
  homephone: { type: Number, optional: true },
  mobilephone: { type: Number, optional: true },

}, { tracker: Tracker });

/** Attach this schema to the collection. */
Stuffs.attachSchema(StuffSchema);

/** Make the collection and schema available to other code. */
export { Stuffs, StuffSchema };
