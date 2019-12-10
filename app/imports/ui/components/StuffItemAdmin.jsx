import React from 'react';
import { Icon, Button, Table } from 'semantic-ui-react';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { collectdata } from '../../api/stuff/CsvScript';
import { ApplicationStatusDB } from '../../api/stuff/ApplicationStatusDB';
import { ApplicationApprovalDB } from '../../api/stuff/ApplicationApprovalDB';

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
    } else if (updateType === 'Reviewed') {
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
          } else if (heco) {
              ApplicationStatusDB.update({ _id: currentUser._id }, { $set: { owner, heco } });
              this.setState({ hecoColor: changeStatusTo ? 'green' : 'red' });
            } else if (reviewed) {
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
        <Table.Cell>{this.props.section1 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section2 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section6 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section7 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section8 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section9 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.sectionAuthorization ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>
          <Button type='button' className={this.state.hecoColor} basic size='mini'
            onClick={() => this.updateStatus('HECO', this.props.owner, true)}>Received</Button>
        </Table.Cell>
        <Table.Cell>
          <Button type='button' className={this.state.reviewedColor} basic size='mini'
            onClick={() => this.updateStatus('Reviewed', this.props.owner, true)}>Reviewed</Button>
        </Table.Cell>
        <Table.Cell>
          <Button onClick={collectdata} className='exportButton' basic color='green' content='Green' size='mini'>
            Excel
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Button type='button' className={this.state.checkColor}
            onClick={() => this.updateApproval(this.props.owner, true)} icon='check'></Button>
          /&nbsp;
          <Button type='button' className={this.state.cancelColor}
            onClick={() => this.updateApproval(this.props.owner, false)} icon='cancel'></Button>
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
