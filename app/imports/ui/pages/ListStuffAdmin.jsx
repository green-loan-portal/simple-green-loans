import React from 'react';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Button, Input, Icon } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Section1DB } from '../../api/stuff/Section1DB';
import { Section2DB } from '../../api/stuff/Section2DB';
import { Section6DB } from '../../api/stuff/Section6DB';
import { Section7DB } from '../../api/stuff/Section7DB';
import { Section8DB } from '../../api/stuff/Section8DB';
import { Section9DB } from '../../api/stuff/Section9DB';
import { AuthorizationDB } from '../../api/stuff/AuthorizationDB';
import { ApplicationStatusDB } from '../../api/stuff/ApplicationStatusDB';
import { ApplicationApprovalDB } from '../../api/stuff/ApplicationApprovalDB';
import StuffItemAdmin from '../../ui/components/StuffItemAdmin';
import { UnfinishedApplications } from '../../api/stuff/UnfinishedApplications';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStuffAdmin extends React.Component {
  /* Table originally shows all records unless user puts in an input (onChange). Uses `this.state.search` */
  constructor(props) {
    super(props);
    if (this.props.ready) {
      this.state = { search: [], userTextLength: 0 };
    }
  }

  sending() {
    const accounts = this.props.accounts;
    const db1 = this.props.db1;
    const db2 = this.props.db2;
    const db6 = this.props.db6;
    const db7 = this.props.db7;
    const db8 = this.props.db8;
    const db9 = this.props.db9;
    const db10 = this.props.dbauthorization;
    setTimeout(function () {
      const div = document.getElementById('sendEmailButton');
      div.addEventListener('click', function () {
        const users = [];
        accounts.forEach(function (stuff) {
          const missing = [];
          if (!db1.find(mydb1 => (mydb1.owner === stuff.username))) {
            missing.push(['Section 1', 'Survey', 'form/1']);
          }
          if (!db2.find(mydb2 => (mydb2.owner === stuff.username))) {
            missing.push(['Section 2-5', 'Installation', 'form/2']);
          }
          if (!db6.find(mydb6 => (mydb6.owner === stuff.username))) {
            missing.push(['Section 6', 'Data For Program Reporting Purposes', 'form/6']);
          }
          if (!db7.find(mydb7 => (mydb7.owner === stuff.username))) {
            missing.push(['Section 7', 'Application', 'form/7']);
          }
          if (!db8.find(mydb8 => (mydb8.owner === stuff.username))) {
            missing.push(['Section 8', 'System Owner', 'form/8']);
          }
          if (!db9.find(mydb9 => (mydb9.owner === stuff.username))) {
            missing.push(['Section 9', 'Disclosure', 'form/9']);
          }
          if (!db10.find(mydb10 => (mydb10.owner === stuff.username))) {
            missing.push(['Authorization Section', 'Authorization', 'authorization']);
          }
          if (missing.length > 0) {
            users.push(stuff.username);
            Meteor.call('sendUnfinishedApplications', stuff.username, missing, function (error) {
              console.log(error ? `Email: ${error}` : `Successfully sent email to ${stuff.username}`);
            });
          }
        });
        swal('Success', `Successfully sent emails to ${users.join(', ')}`, 'success');
      });
    }, 200);
  }

  userSearch = (e) => {
    /* This method uses the user's input to match with the database fields (partial search by Regex).
    Section2DB and Meteor.users must be combined and must be unique because in some cases, an applicant
    signs up with an email but hasn't filled out form 2. Form 2 therefore misses an email of the applicant.
    */
    const mongoFields = [];
    ['owner', 'firstName', 'lastName', 'fullName'].forEach(function (element) {
      let tmp = {};
      if ((element === 'fullName') && e.target.value.indexOf(' ') > 0) {
        const [first, last] = e.target.value.split(' ');
        tmp = { firstName: { $regex: new RegExp(first, 'i') }, lastName: { $regex: new RegExp(last, 'i') } };
      } else {
        tmp[element] = new RegExp(e.target.value, 'i');
      }
      mongoFields.push(tmp);
    });

    // Adding owner field in Object
    const ownerObj = [];
    Meteor.users.find({ username: new RegExp(e.target.value, 'i') }).fetch().forEach(
      (ele) => ownerObj.push(Object.assign({ owner: ele.username }, ele)),
    );

    const emails = [];
    const matchedPeople = [];
    const objectsList = Object.assign({}, Section2DB.find({ $or: mongoFields }).fetch(), ownerObj);
    // eslint-disable-next-line no-restricted-syntax
    for (const key in objectsList) {
      if (!emails.includes(objectsList[key].owner)) {
        emails.push(objectsList[key].owner);
        matchedPeople.push(objectsList[key]);
      }
    }
    this.setState({ search: matchedPeople, userTextLength: e.target.value.length });
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
 /*
  render() {
    return (this.props.ready) ? (
      this.renderPage()
    ) : (
        <Loader active>Getting data</Loader>
      );
  }
*/
  /** Render the page once subscriptions have been received. */
  render() {
    return (
      <Container>
        <Header as='h2' textAlign='center'>
          Records (Admin)
        </Header>

        <Input
          icon={{ name: 'search', circular: false, link: true }}
          iconPosition='left'
          placeholder='Search...'
          onChange={this.userSearch}
        />

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Customer Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>#1</Table.HeaderCell>
              <Table.HeaderCell>#2-5</Table.HeaderCell>
              <Table.HeaderCell>#6</Table.HeaderCell>
              <Table.HeaderCell>#7</Table.HeaderCell>
              <Table.HeaderCell>#8</Table.HeaderCell>
              <Table.HeaderCell>#9</Table.HeaderCell>
              <Table.HeaderCell>Auth</Table.HeaderCell>
              <Table.HeaderCell>HECO</Table.HeaderCell>
              <Table.HeaderCell>Reviewed</Table.HeaderCell>
              <Table.HeaderCell>Excel</Table.HeaderCell>
              <Table.HeaderCell>Application Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {(this.state && this.state.userTextLength > 0) ?
              (this.state.search.map((stuff) => <StuffItemAdmin
                key={stuff.owner}
                owner={stuff.owner}
                section1={this.props.db1.find(mydb1 => mydb1.owner === stuff.owner)}
                section2={this.props.db2.find(mydb2 => mydb2.owner === stuff.owner)}
                section6={this.props.db6.find(mydb6 => mydb6.owner === stuff.owner)}
                section7={this.props.db7.find(mydb7 => mydb7.owner === stuff.owner)}
                section8={this.props.db8.find(mydb8 => mydb8.owner === stuff.owner)}
                section9={this.props.db9.find(mydb9 => mydb9.owner === stuff.owner)}
                sectionAuthorization={this.props.dbauthorization.find(mydbAuth => mydbAuth.owner === stuff.owner)}
              />)) :
              (this.props.accounts.map((stuff) => (
                <StuffItemAdmin
                  key={stuff.username}
                  owner={stuff.username}
                  section1={this.props.db1.find(mydb1 => mydb1.owner === stuff.username)}
                  section2={this.props.db2.find(mydb2 => mydb2.owner === stuff.username)}
                  section6={this.props.db6.find(mydb6 => mydb6.owner === stuff.username)}
                  section7={this.props.db7.find(mydb7 => mydb7.owner === stuff.username)}
                  section8={this.props.db8.find(mydb8 => mydb8.owner === stuff.username)}
                  section9={this.props.db9.find(mydb9 => mydb9.owner === stuff.username)}
                  sectionAuthorization={this.props.dbauthorization.find(mydbAuth => mydbAuth.owner === stuff.username)}
                />))
              )}
          </Table.Body>
        </Table>
        <Button as={NavLink} activeClassName="" exact to="/ApplicationReminders">
          Send application reminders
          <Icon name='arrow alternate circle right' />
        </Button>
      </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListStuffAdmin.propTypes = {
  accounts: PropTypes.array.isRequired,
  db1: PropTypes.array,
  db2: PropTypes.array,
  db6: PropTypes.array,
  db7: PropTypes.array,
  db8: PropTypes.array,
  db9: PropTypes.array,
  dbauthorization: PropTypes.array,
  applicationStatus: PropTypes.array,
  applicationStatus2: PropTypes.array,
  unfinishedApplications: PropTypes.array,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('StuffAdmin');
  const subscription1 = Meteor.subscribe('Form1');
  const subscription2 = Meteor.subscribe('Form2');
  const subscription6 = Meteor.subscribe('Form6');
  const subscription7 = Meteor.subscribe('Form7');
  const subscription8 = Meteor.subscribe('Form8');
  const subscription9 = Meteor.subscribe('Form9');
  const subscription10 = Meteor.subscribe('AuthorizationDB');
  const subscription11 = Meteor.subscribe('ApplicationStatusDB');
  const subscription12 = Meteor.subscribe('ApplicationApprovalDB');
  const subscription13 = Meteor.subscribe('UnfinishedApplications');

  return {
    accounts: Meteor.users.find({}).fetch(),
    db1: Section1DB.find({}).fetch(),
    db2: Section2DB.find({}).fetch(),
    db6: Section6DB.find({}).fetch(),
    db7: Section7DB.find({}).fetch(),
    db8: Section8DB.find({}).fetch(),
    db9: Section9DB.find({}).fetch(),
    dbauthorization: AuthorizationDB.find({}).fetch(),
    applicationStatus: ApplicationStatusDB.find({}).fetch(),
    applicationStatus2: ApplicationApprovalDB.find({}).fetch(),
    unfinishedApplications: UnfinishedApplications.find({}).fetch(),
    ready: subscription.ready() && subscription1.ready() && subscription2.ready() && subscription6.ready() &&
      subscription7.ready() && subscription8.ready() && subscription9.ready() && subscription10.ready() &&
      subscription11.ready() && subscription12.ready() && subscription13.ready(),
  };
})(ListStuffAdmin);
