import React from 'react';
import { Icon, Button, Table } from 'semantic-ui-react';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { ApplicationStatusDB } from '../../api/stuff/ApplicationStatusDB';
import { ApplicationApprovalDB } from '../../api/stuff/ApplicationApprovalDB';
import { Section1DB } from '../../api/stuff/Section1DB';
import { Section2DB } from '../../api/stuff/Section2DB';
import { Section6DB } from '../../api/stuff/Section6DB';
import { Section7DB } from '../../api/stuff/Section7DB';
import { Section8DB } from '../../api/stuff/Section8DB';
import { Section9DB } from '../../api/stuff/Section9DB';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class StuffItemAdmin extends React.Component {
  constructor(props) {
    super(props);
    const data = ApplicationStatusDB.findOne({ owner: this.props.owner });
    const data2 = ApplicationApprovalDB.findOne({ owner: this.props.owner });
    if (!data) {
      this.state = { hecoColor: 'red', reviewedColor: 'red' };
    } else {
      this.state = {
        hecoColor: data.heco ? 'green' : 'red', reviewedColor: data.reviewed ? 'green' : 'red',
      };
    }
    if (!data2) {
      this.state = { checkColor: '', cancelColor: 'red' };
    } else {
      this.state = {
        checkColor: data2.approved ? 'green' : '', cancelColor: data2.approved ? '' : 'red',
      };
    }
  }

  updateApproval(ownerEmail, changeStatusTo) {
    /* params:
        ownerEmail    : used for DB purposes
        changeStatusTo: true/false based on updateType
    */
    let swalText;
    const owner = ownerEmail;
    let approved = true;
    swalText = `Set the application status, ${changeStatusTo ? 'APPROVED' : 'DENIED'}, for ${ownerEmail}. `;
    swalText += 'An email will also be sent to the applicant.';

    if (!swalText) {
      swal('Error', 'Mismatched update type', 'error');
      return;
    }

    swal({
      title: 'Are you sure?',
      text: swalText,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willContinue) => {
          if (willContinue) {
            const currentUser = ApplicationApprovalDB.findOne({ owner: ownerEmail });
            if (!currentUser) {
              ApplicationApprovalDB.insert({
                owner, approved: approved,
              });
            } else {
              approved = changeStatusTo;
              ApplicationApprovalDB.update({ _id: currentUser._id }, { $set: { owner, approved } });
              this.setState({
                checkColor: changeStatusTo ? 'green' : '',
                cancelColor: changeStatusTo ? '' : 'red',
              });

              const recipientName = this.props.section2 ? this.props.section2.firstName : '';
              const email = this.props.owner;
              Meteor.call('sendApplicationStatus', email, recipientName, changeStatusTo, function (error) {
                console.log(error ? `Email: ${error}` : `Successfully sent email to ${email}`);
              });
            }
          }
        });
  }

  collectdata(ownerEmail) {

    const profile = ownerEmail;
    // const profile2 = Meteor.user.findOne({ owner: ownerEmail });
    // const ownerstuff = ownerEmail;
    console.log(profile);
    // console.log(ownerstuff);
    const howDidYouHearAboutCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'howDidYouHearAboutUs');
    const otherTestCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'otherHDYHA');
    // let otherTestCSV = this.props.doc1.otherHDYHA;
    const washerCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'washer');
    if (washerCSV[0] === true) {
      washerCSV[0] = 'Washer';
    } else {
      washerCSV[0] = '';
    }
    const ageOfWasherCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'ageOfWasher');
    const dryerCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'dryer');
    if (dryerCSV[0] === true) {
      dryerCSV[0] = 'Dryer';
    } else {
      dryerCSV[0] = '';
    }

    const ageOfDryerCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'ageOfDryer');
    const kitchenRefrigeratorCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'kitchenRefrigerator');
    if (kitchenRefrigeratorCSV[0] === true) {
      kitchenRefrigeratorCSV[0] = 'Kitchen Refrigerator';
    } else {
      kitchenRefrigeratorCSV[0] = '';
    }
    const ageOfKitchenRefrigeratorCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(),
        'ageOfKitchenRefrigerator');
    const secondRefrigeratorCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'secondRefrigerator');
    if (secondRefrigeratorCSV[0] === true) {
      secondRefrigeratorCSV[0] = 'Second Refrigerator';
    } else {
      secondRefrigeratorCSV[0] = '';
    }
    const ageOfSecondRefrigeratorCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'ageOfSecondRefrigerator');
    const chestFreezerCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'chestFreezer');
    if (chestFreezerCSV[0] === true) {
      chestFreezerCSV[0] = 'Chest Freezer';
    } else {
      chestFreezerCSV[0] = '';
    }
    const ageOfChestFreezerCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'ageOfChestFreezer');
    const solarHWHeaterCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'solarHWHeater');
    if (solarHWHeaterCSV[0] === true) {
      solarHWHeaterCSV[0] = 'Solar H.W. Heater';
    } else {
      solarHWHeaterCSV[0] = '';
    }
    const ageOfSolarHWHeaterCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'ageOfSolarHWHeater');
    const PVSystemCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'PVSystem');
    if (PVSystemCSV[0] === true) {
      PVSystemCSV[0] = 'PV System';
    } else {
      PVSystemCSV[0] = '';
    }
    const ageOfPVSystemCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'ageOfPVSystem');
    const LEDCFLBulbsCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'LEDCFLBulbs');
    if (LEDCFLBulbsCSV[0] === true) {
      LEDCFLBulbsCSV[0] = 'LED/CLF Bulbs';
    } else {
      LEDCFLBulbsCSV[0] = '';
    }
    const WIFICSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'WIFI');
    if (WIFICSV[0] === true) {
      WIFICSV[0] = 'WiFi';
    } else {
      WIFICSV[0] = '';
    }
    const interestedInInstallingCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'interestedInInstalling');

    const otherInterestedInInstallingCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(),
        'otherInterestedInInstalling');
    const assistanceFromCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'assistanceFrom');
    const assistanceFromOtherCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'assistanceFromOther');
    const anyoneYouKnowNameCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'anyoneYouKnowName');
    const anyoneYouKnowPhoneCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'anyoneYouKnowPhone');
    const anyoneYouKnowEmailCSV = _.pluck(Section1DB.find({ owner: profile }).fetch(), 'anyoneYouKnowEmail');

// Section2DB
    const firstNameCSV = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'firstName');
    const middleName = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'middleName');
    const lastName = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'lastName');
    const utilityAccountNumber = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'utilityAccountNumber');
    const energyImprovementOptions = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'energyImprovementOptions');
    const metWithApprovedContractor = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'metWithApprovedContractor');
    const contractorName = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'contractorName');
    const contactName = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'contactName');
    const streetAddress = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'streetAddress');
    const islandLocation = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'islandLocation');
    const residenceType = _.pluck(Section2DB.find({ owner: profile }).fetch(), 'residenceType');

// Section6DB
    const income = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'income');
    const totalOccupants = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'totalOccupants');
    const numAdults = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'numAdults');
    const numRetired = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'numRetired');
    const numChildrenBelow5 = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'numChildrenBelow5');
    const numChildren6to12 = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'numChildren6to12');
    const numChildren13to17 = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'numChildren13to17');
    const membersNotHomeDay = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'membersNotHomeDay');
    const membersNotHomeNight = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'membersNotHomeNight');
    const membersHomeDay = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'membersHomeDay');
    const membersHomeWork = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'membersHomeWork');
    const employerName = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'employerName');
    const occupation = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'occupation');
    const workPhone = _.pluck(Section6DB.find({ owner: profile }).fetch(), 'workPhone');

// Section7DB
    const emailCsv = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'email');
    const phoneHome = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'phoneHome');
    const phoneMobile = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'phoneMobile');
    const mailingAddress = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'mailingAddress');
    const partiesNames = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'partiesNames');
    const otherOwner1 = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'otherOwner1');
    const otherOwnerRelationship1 = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'otherOwnerRelationship1');
    const otherOwner2 = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'otherOwner2');
    const otherOwnerRelationship2 = _.pluck(Section7DB.find({ owner: profile }).fetch(), 'otherOwnerRelationship2');

// Section8DB
    const taxCreditClaimer = _.pluck(Section8DB.find({ owner: profile }).fetch(), 'taxCreditClaimer');
    const taxCreditClaimerRelationship = _.pluck(Section8DB.find({ owner: profile }).fetch(),
        'taxCreditClaimerRelationship');

// Section9DB
    const owner = _.pluck(Section9DB.find({ owner: profile }).fetch(), 'owner');
    const timestamp = _.pluck(Section9DB.find({ owner: profile }).fetch(), 'timestamp');
    const signature = _.pluck(Section9DB.find({ owner: profile }).fetch(), 'signature');

    const Results = [

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
      ['Name', anyoneYouKnowNameCSV],
      ['Phone Number', anyoneYouKnowPhoneCSV],
      ['Email', anyoneYouKnowEmailCSV],

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
      ['Contractor Name', contractorName],
      ['Contact Name', contactName],
      [],
      ['INSTALLATION ADDRESS'],

      ['Street Address', streetAddress],
      ['Island', islandLocation],
      ['Type of Residence', residenceType],

      [],
      ['Annual Household Income', income],
      ['Occupants in the home', totalOccupants],
      ['Of this number how many are adults?', numAdults],
      ['How many of the adults are retired', numRetired],
      ['Amount of children age 5 or younger', numChildrenBelow5],
      ['Amount of children ages 6 to 12', numChildren6to12],
      ['Amount of children ages 13 to 17', numChildren13to17],
      ['Number of HH members at work/school during the day', membersNotHomeDay],
      ['Number of HH members at work/school during the night', membersNotHomeNight],
      ['Number of HH members home during the day', membersHomeDay],
      ['Number of HH members working from home', membersHomeWork],
      ['Employer name', employerName],
      ['Occupation/Position', occupation],
      ['Work Phone Number', workPhone],
      [],

      ['Email', emailCsv],
      ['Home Phone', phoneHome],
      ['Mobile Phone', phoneMobile],
      ['Mailing Address', mailingAddress],
      ['All Parties Names', partiesNames],
      ['Other Owner(s)', otherOwner1],
      ['Relationship to Applicant', otherOwnerRelationship1],
      ['Other Owner(s)', otherOwner2],
      ['Relationship to Applicant', otherOwnerRelationship2],
      [],

      ['Name of Entity(ies) or Person(s) who will claim Tax Credit:', taxCreditClaimer],
      ['Relationship to entities', taxCreditClaimerRelationship],
      ['Name', owner],
      ['Timestamp', timestamp],
      ['Signature', signature, ''],

    ];

    const exportToCsv2 = function () {
      let CsvString = '';
      const emptyString = '';
      // eslint-disable-next-line no-unused-vars
      Results.forEach(function (RowItem, RowIndex) {
        // eslint-disable-next-line no-unused-vars
        RowItem.forEach(function (ColItem, ColIndex) {
          if (ColItem === undefined) {
            // eslint-disable-next-line no-param-reassign
            ColItem = emptyString;
          }
          CsvString += `${ColItem},`;
        });
        CsvString += '\r\n';
      });

      CsvString = `data:application/csv,${encodeURIComponent(CsvString)}`;
      const x = document.createElement('A');
      x.setAttribute('href', CsvString);
      x.setAttribute('download', `${ownerEmail}.csv`);
      document.body.appendChild(x);
      x.click();
    };

    return exportToCsv2();

  }

  updateStatus(updateType, ownerEmail, changeStatusTo) {
    /* params:
        updateType    : only HECO, Reviewed, Approval
        ownerEmail    : used for DB purposes
        changeStatusTo: true/false based on updateType
    */
    let swalText;
    const owner = ownerEmail;
    let heco = false;
    let reviewed = false;

    if (updateType === 'HECO') {
      heco = true;
      swalText = 'Notify the applicant that the information has been received by HECO.';
    } else
      if (updateType === 'Reviewed') {
        reviewed = true;
        swalText = 'Notify the applicant that the information has been reviewed.';
      }

    if (!swalText) {
      swal('Error', 'Mismatched update type', 'error');
      return;
    }

    swal({
      title: 'Are you sure?',
      text: swalText,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willContinue) => {
          if (willContinue) {
            const currentUser = ApplicationStatusDB.findOne({ owner: ownerEmail });
            if (!currentUser) {
              ApplicationStatusDB.insert({
                owner, heco: heco, reviewed: reviewed,
              });
            } else
              if (heco) {
                ApplicationStatusDB.update({ _id: currentUser._id }, { $set: { owner, heco } });
                this.setState({ hecoColor: changeStatusTo ? 'green' : 'red' });
              } else
                if (reviewed) {
                  ApplicationStatusDB.update({ _id: currentUser._id }, { $set: { owner, reviewed } });
                  this.setState({ reviewedColor: changeStatusTo ? 'green' : 'red' });
                }
          }
        });
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>
            {this.props.section2 ? `${this.props.section2.firstName ? this.props.section2.firstName : ''}
          ${this.props.section2.lastName ? this.props.section2.lastName : ''}` : ''}
          </Table.Cell>
          <Table.Cell><a href={`mailto: ${this.props.owner}`}>{this.props.owner}</a></Table.Cell>
          <Table.Cell>{this.props.section1 ? <Icon name='check' className='green'/> : ''}</Table.Cell>
          <Table.Cell>{this.props.section2 ? <Icon name='check' className='green'/> : ''}</Table.Cell>
          <Table.Cell>{this.props.section6 ? <Icon name='check' className='green'/> : ''}</Table.Cell>
          <Table.Cell>{this.props.section7 ? <Icon name='check' className='green'/> : ''}</Table.Cell>
          <Table.Cell>{this.props.section8 ? <Icon name='check' className='green'/> : ''}</Table.Cell>
          <Table.Cell>{this.props.section9 ? <Icon name='check' className='green'/> : ''}</Table.Cell>
          <Table.Cell>{this.props.sectionAuthorization ? <Icon name='check' className='green'/> : ''}</Table.Cell>
          <Table.Cell>
            <Button type='button' className={this.state.hecoColor} basic size='mini'
                    onClick={() => this.updateStatus('HECO', this.props.owner, true)}>Received</Button>
          </Table.Cell>
          <Table.Cell>
            <Button type='button' className={this.state.reviewedColor} basic size='mini'
                    onClick={() => this.updateStatus('Reviewed', this.props.owner, true)}>Reviewed</Button>
          </Table.Cell>
          <Table.Cell>
            <Button onClick={() => this.collectdata(this.props.owner)} className='exportButton' basic color='green'
                    content='Green' size='mini'>
              Excel
            </Button>
          </Table.Cell>
          <Table.Cell>
            <Button type='button' className={this.state.checkColor}
                    onClick={() => this.updateApproval(this.props.owner, true)} icon='check'/>
            /&nbsp;
            <Button type='button' className={this.state.cancelColor}
                    onClick={() => this.updateApproval(this.props.owner, false)} icon='cancel'/>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItemAdmin.propTypes = {
  owner: PropTypes.string.isRequired,
  section1: PropTypes.object,
  section2: PropTypes.object,
  section6: PropTypes.object,
  section7: PropTypes.object,
  section8: PropTypes.object,
  section9: PropTypes.object,
  stuff: PropTypes.object,
  sectionAuthorization: PropTypes.object,
};

export default (StuffItemAdmin);
