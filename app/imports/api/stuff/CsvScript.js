import { _ } from 'meteor/underscore';
import { Section1DB } from './Section1DB';

export const collectdata = function () {

  let howDidYouHearAboutCSV = _.pluck(Section1DB.find().fetch(), 'howDidYouHearAboutUs');
  let otherTestCSV = _.pluck(Section1DB.find().fetch(), 'otherHDYHA');
  let washerCSV = _.pluck(Section1DB.find().fetch(), 'washer');
  if (washerCSV[0] === true) {
    washerCSV[0] = 'Washer';
  }
  let ageOfWasherCSV = _.pluck(Section1DB.find().fetch(), 'ageOfWasher');
  let dryerCSV = _.pluck(Section1DB.find().fetch(), 'dryer');
  if (dryerCSV[0] === true) {
    dryerCSV[0] = 'Dryer';
  }
  let ageOfDryerCSV = _.pluck(Section1DB.find().fetch(), 'ageOfDryer');
  let kitchenRefrigeratorCSV = _.pluck(Section1DB.find().fetch(), 'kitchenRefrigerator');
  if (kitchenRefrigeratorCSV[0] === true) {
    kitchenRefrigeratorCSV[0] = 'Kitchen Refrigerator';
  }
  let ageOfKitchenRefrigeratorCSV = _.pluck(Section1DB.find().fetch(), 'ageOfKitchenRefrigerator');
  let secondRefrigeratorCSV = _.pluck(Section1DB.find().fetch(), 'secondRefrigerator');
  if (secondRefrigeratorCSV[0] === true) {
    secondRefrigeratorCSV[0] = 'Second Refrigerator';
  }
  let ageOfSecondRefrigeratorCSV = _.pluck(Section1DB.find().fetch(), 'ageOfSecondRefrigerator');
  let chestFreezerCSV = _.pluck(Section1DB.find().fetch(), 'chestFreezer');
  if (chestFreezerCSV[0] === true) {
    chestFreezerCSV[0] = 'Chest Freezer';
  }
  let ageOfChestFreezerCSV = _.pluck(Section1DB.find().fetch(), 'ageOfChestFreezer');
  let solarHWHeaterCSV = _.pluck(Section1DB.find().fetch(), 'solarHWHeater');
  if (solarHWHeaterCSV[0] === true) {
    solarHWHeaterCSV[0] = 'Solar H.W. Heater';
  }
  let ageOfSolarHWHeaterCSV = _.pluck(Section1DB.find().fetch(), 'ageOfSolarHWHeater');
  let PVSystemCSV = _.pluck(Section1DB.find().fetch(), 'PVSystem');
  if (PVSystemCSV[0] === true) {
    PVSystemCSV[0] = 'PV System';
  }
  let ageOfPVSystemCSV = _.pluck(Section1DB.find().fetch(), 'ageOfPVSystem');
  let LEDCFLBulbsCSV = _.pluck(Section1DB.find().fetch(), 'LEDCFLBulbs');
  if (LEDCFLBulbsCSV[0] === true) {
    LEDCFLBulbsCSV[0] = 'LED/CLF Bulbs';
  }
  let WIFICSV = _.pluck(Section1DB.find().fetch(), 'WIFI');
  if (WIFICSV[0] === true) {
    WIFICSV[0] = 'WiFi';
  }
  let interestedInInstallingCSV = _.pluck(Section1DB.find().fetch(), 'interestedInInstalling');
  let otherInterestedInInstallingCSV = _.pluck(Section1DB.find().fetch(), 'otherInterestedInInstalling');
  let assistanceFromCSV = _.pluck(Section1DB.find().fetch(), 'assistanceFrom');
  let assistanceFromOtherCSV = _.pluck(Section1DB.find().fetch(), 'assistanceFromOther');
  let anyoneYouKnowNameCSV = _.pluck(Section1DB.find().fetch(), 'anyoneYouKnowName');
  let anyoneYouKnowPhoneCSV = _.pluck(Section1DB.find().fetch(), 'anyoneYouKnowPhone');
  let anyoneYouKnowEmailCSV = _.pluck(Section1DB.find().fetch(), 'anyoneYouKnowEmail');

  let Results = [
    ['PRE-APPLICATION SURVEY'],
    [],
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
    anyoneYouKnowNameCSV,
    anyoneYouKnowPhoneCSV,
    anyoneYouKnowEmailCSV,
    // nameOnUtilAccCSV,

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
