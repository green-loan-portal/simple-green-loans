import { _ } from 'meteor/underscore';
import { Loader } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Section1DB } from './Section1DB';
import { Section2DB } from './Section2DB';
import { Section6DB } from './Section6DB';
import { Section7DB } from './Section7DB';
import { Section8DB } from './Section8DB';
import { Section9DB } from './Section9DB';
import { AuthorizationDB } from './AuthorizationDB';

export const collectdata = function (props) {

  // Section!db
  const profile = Meteor.user() ? Meteor.user().username : null;

  let howDidYouHearAboutCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'howDidYouHearAboutUs');
  let otherTestCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'otherHDYHA');
  // let otherTestCSV = this.props.doc1.otherHDYHA;
  let washerCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'washer');
  if (washerCSV[0] === true) {
    washerCSV[0] = 'Washer';
  } else {
    washerCSV[0] = '';
  }
  let ageOfWasherCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'ageOfWasher');
  let dryerCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'dryer');
  if (dryerCSV[0] === true) {
    dryerCSV[0] = 'Dryer';
  } else {
    dryerCSV[0] = '';
  }

  let ageOfDryerCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'ageOfDryer');
  let kitchenRefrigeratorCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'kitchenRefrigerator');
  if (kitchenRefrigeratorCSV[0] === true) {
    kitchenRefrigeratorCSV[0] = 'Kitchen Refrigerator';
  } else {
    kitchenRefrigeratorCSV[0] = '';
  }
  let ageOfKitchenRefrigeratorCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'ageOfKitchenRefrigerator');
  let secondRefrigeratorCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'secondRefrigerator');
  if (secondRefrigeratorCSV[0] === true) {
    secondRefrigeratorCSV[0] = 'Second Refrigerator';
  } else {
    secondRefrigeratorCSV[0] = '';
  }
  let ageOfSecondRefrigeratorCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'ageOfSecondRefrigerator');
  let chestFreezerCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'chestFreezer');
  if (chestFreezerCSV[0] === true) {
    chestFreezerCSV[0] = 'Chest Freezer';
  } else {
    chestFreezerCSV[0] = '';
  }
  let ageOfChestFreezerCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'ageOfChestFreezer');
  let solarHWHeaterCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'solarHWHeater');
  if (solarHWHeaterCSV[0] === true) {
    solarHWHeaterCSV[0] = 'Solar H.W. Heater';
  } else {
    solarHWHeaterCSV[0] = '';
  }
  let ageOfSolarHWHeaterCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'ageOfSolarHWHeater');
  let PVSystemCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'PVSystem');
  if (PVSystemCSV[0] === true) {
    PVSystemCSV[0] = 'PV System';
  } else {
    PVSystemCSV[0] = '';
  }
  let ageOfPVSystemCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'ageOfPVSystem');
  let LEDCFLBulbsCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'LEDCFLBulbs');
  if (LEDCFLBulbsCSV[0] === true) {
    LEDCFLBulbsCSV[0] = 'LED/CLF Bulbs';
  } else {
    LEDCFLBulbsCSV[0] = '';
  }
  let WIFICSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'WIFI');
  if (WIFICSV[0] === true) {
    WIFICSV[0] = 'WiFi';
  } else {
    WIFICSV[0] = '';
  }
  let interestedInInstallingCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'interestedInInstalling');

  let otherInterestedInInstallingCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'otherInterestedInInstalling');
  let assistanceFromCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'assistanceFrom');
  let assistanceFromOtherCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'assistanceFromOther');
  let anyoneYouKnowNameCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'anyoneYouKnowName');
  let anyoneYouKnowPhoneCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'anyoneYouKnowPhone');
  let anyoneYouKnowEmailCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'anyoneYouKnowEmail');

  // Section2DB
  let firstNameCSV = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'firstName');
  let middleName = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'middleName');
  let lastName = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'lastName');
  let utilityAccountNumber = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'utilityAccountNumber');
  let energyImprovementOptions = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'energyImprovementOptions');
  let metWithApprovedContractor = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'metWithApprovedContractor');
  let contractorName = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'contractorName');
  let contactName = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'contactName');
  let streetAddress = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'streetAddress');
  let islandLocation = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'islandLocation');
  let residenceType = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'residenceType');

  //Section6DB
  let income = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'income');
  let totalOccupants = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'totalOccupants');
  let numAdults = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'numAdults');
  let numRetired = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'numRetired');
  let numChildrenBelow5 = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'numChildrenBelow5');
  let numChildren6to12 = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'numChildren6to12');
  let numChildren13to17 = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'numChildren13to17');
  let membersNotHomeDay = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'membersNotHomeDay');
  let membersNotHomeNight = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'membersNotHomeNight');
  let membersHomeDay = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'membersHomeDay');
  let membersHomeWork = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'membersHomeWork');
  let employerName = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'employerName');
  let occupation = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'occupation');
  let workPhone = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'workPhone');

  //Section7DB
  let emailCsv = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'email');
  let phoneHome = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'phoneHome');
  let phoneMobile = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'phoneMobile');
  let mailingAddress = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'mailingAddress');
  let partiesNames = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'partiesNames');
  let otherOwner1 = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'otherOwner1');
  let otherOwnerRelationship1 = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'otherOwnerRelationship1');
  let otherOwner2 = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'otherOwner2');
  let otherOwnerRelationship2 = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'otherOwnerRelationship2');

  // Section8DB
  let taxCreditClaimer = _.pluck(Section8DB.find({ owner: profile }).fetch(), 'taxCreditClaimer');
  let taxCreditClaimerRelationship = _.pluck(Section8DB.find({ owner: profile }).fetch(), 'taxCreditClaimerRelationship');

  //Section9DB
  let owner = _.pluck(Section9DB.find({ owner: profile }).fetch(), 'owner');
  let timestamp = _.pluck(Section9DB.find({ owner: profile }).fetch(), 'timestamp');
  let signature = _.pluck(Section9DB.find({ owner: profile }).fetch(), 'signature');

  let Results = [

    ['How did you hear about us?'],
    howDidYouHearAboutCSV,
    otherTestCSV,
    [],
    ['Which of these do you have in your home?'],
    ['ITEM', 'AGE (years)'],
    [washerCSV, ageOfWasherCSV],
    [dryerCSV, ageOfDryerCSV],
    [kitchenRefrigeratorCSV, ageOfKitchenRefrigeratorCSV],
    [secondRefrigeratorCSV, ageOfSecondRefrigeratorCSV],
    [chestFreezerCSV, ageOfChestFreezerCSV],
    [solarHWHeaterCSV, ageOfSolarHWHeaterCSV],
    [PVSystemCSV, ageOfPVSystemCSV],
    LEDCFLBulbsCSV,
    WIFICSV,
    [],
    ['Which energy savings product(s) would you most likely be ' +
    'interested in installing within the next three (3) years?'],
    interestedInInstallingCSV,
    otherInterestedInInstallingCSV,
    [],
    ['Where are you most likely to go to get assistance or training regarding managing energy costs and finances?'],
    assistanceFromCSV,
    assistanceFromOtherCSV,
    [],
    ['Is there anyone you know that could benefit from lowering their energy costs?'],
    ['Name', '', '', anyoneYouKnowNameCSV],
    ['Phone Number', '', '', anyoneYouKnowPhoneCSV],
    ['Email', '', '', anyoneYouKnowEmailCSV],

    [],
    ['NAME ON THE UTILITY BILL AND ACCOUNT NUMBER'],
    firstNameCSV,
    middleName,
    lastName,
    utilityAccountNumber,
    [],
    ['What GEM$ Approved Energy Improvement would you like to install? (Check all that apply)'],
    energyImprovementOptions,
    [],
    ['Have you met with a GEM$ Approved Contractor regarding installation?'],
    metWithApprovedContractor,
    ['Contractor Name', '', '', '', contractorName],
    ['Contact Name', '', '', '', contractorName],
    [],
    ['INSTALLATION ADDRESS'],

    ['Street Address', '', '', '', streetAddress],
    ['Island', '', '', '', islandLocation],
    ['Type of Residence', '', '', '', residenceType],

    [],
    ['Annual Household Income', '', '', '', income],
    ['Occupants in the home', '', '', '', totalOccupants],
    ['Of this number how many are adults?', '', '', '', numAdults],
    ['How many of the adults are retired', '', '', '', numRetired],
    ['Amount of children age 5 or younger', '', '', '', numChildrenBelow5],
    ['Amount of children ages 6 to 12', '', '', '', numChildren6to12],
    ['Amount of children ages 13 to 17', '', '', '', numChildren13to17],
    ['Number of HH members at work/school during the day', '', '', '', membersNotHomeDay],
    ['Number of HH members at work/school during the night', '', '', '', membersNotHomeNight],
    ['Number of HH members home during the day', '', '', '', membersHomeDay],
    ['Number of HH members working from home', '', '', '', membersHomeWork],
    ['Employer name', '', '', '', employerName],
    ['Occupation/Position', '', '', '', occupation],
    ['Work Phone Number', '', '', '', workPhone],
    [],

    ['Email', '', '', '', emailCsv],
    ['Home Phone', '', '', '', phoneHome],
    ['Mobile Phone', '', '', '', phoneMobile],
    ['Mailing Address', '', '', '', mailingAddress],
    ['All Parties Names', '', '', '', partiesNames],
    ['Other Owner(s)', '', '', '', otherOwner1],
    ['Relationship to Applicant', '', '', '', otherOwnerRelationship1],
    ['Other Owner(s)', '', '', '', otherOwner2],
    ['Relationship to Applicant', '', '', '', otherOwnerRelationship2],
    [],

    ['Name of Entity(ies) or Person(s) who will claim Tax Credit:', '', '', '', taxCreditClaimer],
    ['Relationship to entities', '', '', '', taxCreditClaimerRelationship],
    ['Name', '', '', '', owner],
    ['Timestamp', '', '', '', timestamp],
    ['Signature', '', '', signature, ''],

  ];

  const exportToCsv2 = function () {
    let CsvString = '';
    Results.forEach(function (RowItem, RowIndex) {
      RowItem.forEach(function (ColItem, ColIndex) {
        if (ColItem == undefined) {
          ColItem = '';
        }
        CsvString += ColItem + ',';
      });
      CsvString += '\r\n';
    });

    CsvString = 'data:application/csv,' + encodeURIComponent(CsvString);
    let x = document.createElement('A');
    x.setAttribute('href', CsvString);
    x.setAttribute('download', 'somedata.csv');
    document.body.appendChild(x);
    x.click();
  };

  return exportToCsv2();

};

/** Require an array of Stuff documents in the props.
 collectdata.propTypes = {
  accounts: PropTypes.array.isRequired,
  db1: PropTypes.array,
  db2: PropTypes.array,
  db6: PropTypes.array,
  db7: PropTypes.array,
  db8: PropTypes.array,
  db9: PropTypes.array,
  dbauthorization: PropTypes.array,
};

 /** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
 export default withTracker(() => {
  // Get access to Stuff documents.
  const db1 = Meteor.subscribe('Section1DB');
  const db2 = Meteor.subscribe('Section2DB');
  const db6 = Meteor.subscribe('Section6DB');
  const db7 = Meteor.subscribe('Section7DB');
  const db8 = Meteor.subscribe('Section8DB');
  const db9 = Meteor.subscribe('Section9DB');
  const dbauthorization = Meteor.subscribe('AuthorizationDB');
  return {
    accounts: Meteor.users.find({}).fetch(),
    db1: Section1DB.find({}).fetch(),
    db2: Section2DB.find({}).fetch(),
    db6: Section6DB.find({}).fetch(),
    db7: Section7DB.find({}).fetch(),
    db8: Section8DB.find({}).fetch(),
    db9: Section9DB.find({}).fetch(),
    dbauthorization: AuthorizationDB.find({}).fetch(),
    ready: db1.ready() && db2.ready() && db6.ready()
        && db7.ready() && db8.ready() && db9.ready() && dbauthorization.ready(),
  };
})(collectdata);
 */


// Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use.
collectdata.PropTypes = {
  doc1: PropTypes.object,
  doc2: PropTypes.object,
  doc6: PropTypes.object,
  doc7: PropTypes.object,
  doc8: PropTypes.object,
  doc9: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // const documentId = Meteor.user().username;
  // Get access to Stuff documents.
  const subscription1 = Meteor.subscribe('Form1');
  const subscription2 = Meteor.subscribe('Form2');
  const subscription3 = Meteor.subscribe('Form6');
  const subscription4 = Meteor.subscribe('Form7');
  const subscription5 = Meteor.subscribe('Form8');
  const subscription6 = Meteor.subscribe('Form9');

  const profile = Meteor.user() ? Meteor.user().owner : null;
  return {
    doc1: Section1DB.findOne({ owner: profile }),
    doc2: Section2DB.findOne({ owner: profile }),
    doc6: Section6DB.findOne({ owner: profile }),
    doc7: Section7DB.findOne({ owner: profile }),
    doc8: Section8DB.findOne({ owner: profile }),
    doc9: Section9DB.findOne({ owner: profile }),
    ready: subscription1.ready() && subscription2.ready() && subscription3.ready() &&
        subscription4.ready() && subscription5.ready() && subscription6.ready(),
  };

})(collectdata);


