import React from 'react';
import { Meteor } from 'meteor/meteor';
import { List, Container, Header, Loader, Checkbox, Button, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { Section1DB } from '../../api/stuff/Section1DB';
import { Section2DB } from '../../api/stuff/Section2DB';
import { Section6DB } from '../../api/stuff/Section6DB';
import { Section7DB } from '../../api/stuff/Section7DB';
import { Section8DB } from '../../api/stuff/Section8DB';
import { Section9DB } from '../../api/stuff/Section9DB';
import { AuthorizationDB } from '../../api/stuff/AuthorizationDB';
import { ApplicationStatusDB } from '../../api/stuff/ApplicationStatusDB';
import { ApplicationApprovalDB } from '../../api/stuff/ApplicationApprovalDB';

class ApplicationReminderPage extends React.Component {

  state = { checked: false }

  toggle = () => this.setState((prevState) => ({ checked: !prevState.checked }))

  constructor(props) {
    super(props);
    this.state = { unfinishedUsers: {} };
  }

  sending() {
    const accounts = this.listOfUnfinishedApplicants();
  const db1 = this.props.db1;
  const db2 = this.props.db2;
  const db6 = this.props.db6;
  const db7 = this.props.db7;
  const db8 = this.props.db8;
  const db9 = this.props.db9;
  const db10 = this.props.dbauthorization;

  for (let i = 1; i < accounts.length; i++) {
    if (accounts[i].checked === false) {
      accounts[i].pop();
    }
  }
  setTimeout(function () {
    const div = document.getElementById('SendReminderButton');
    div.addEventListener('click', function () {
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
          Meteor.call('sendUnfinishedApplications', stuff.username, missing, function (error) {
            console.log(error ? `Email: ${error}` : `Successfully sent email to ${stuff.username}`);
          });
        }
      });
      swal('Success', `Successfully sent emails to ${accounts.join(', ')}`, 'success');
    });
  }, 200);
}

  render() {
    return (this.props.ready) ? (
        this.renderPage()
    ) : (
        <Loader active>Getting data</Loader>
    );
  }

  handleChange(e) {
    console.log(e.target.name, e.target.checked)
    e.checked = !e.checked;
    return;
    // const { name } = e.target;
    // this.setState(prevState => ({
    //   unfinishedUsers: {
    //     ...prevState.unfinishedUsers,
    //     [name]: !prevState.unfinishedUsers[name]
    //   }
    // }));
    // console.log(this.state)
  }

  /* Go through all databases to check if the each user is in each database. If the user is in all databases,
   * do nothing, otherwise, push it into `returnValues` array since their application is unfished. */
  listOfUnfinishedApplicants() {
    let i = 0;
    const returnValues = [];
    for (i; i < this.props.accounts.length; i++) {
      const db1 = this.props.db1.find(mydb => mydb.owner === this.props.accounts[i].username);
      const db2 = this.props.db2.find(mydb => mydb.owner === this.props.accounts[i].username);
      const db6 = this.props.db6.find(mydb => mydb.owner === this.props.accounts[i].username);
      const db7 = this.props.db7.find(mydb => mydb.owner === this.props.accounts[i].username);
      const db8 = this.props.db8.find(mydb => mydb.owner === this.props.accounts[i].username);
      const db9 = this.props.db9.find(mydb => mydb.owner === this.props.accounts[i].username);
      const db0 = this.props.dbauthorization.find(mydb => mydb.owner === this.props.accounts[i].username);

      if (!(db1 && db2 && db6 && db7 && db8 && db9 && db0)) {
        const ownerEmail = this.props.accounts[i].username;
        returnValues.push(
            <List.Item key={ownerEmail}>
              <Checkbox
                  label={ownerEmail}
                  onChange={this.handleChange}
                  checked={this.state.checked}
              />
            </List.Item>,
        );
      }
    }
    return returnValues;
  }

  renderPage() {
    return (
        <Container>
          <Header size='huge' dividing textAlign='center'>Select Applicants To Send Reminder Email</Header>
          <Grid textAlign='center'>
          <div>
            <List relaxed size='massive'>
              <List.Item>
              <Checkbox label='Select All'
                        onClick={this.toggle}/>
              </List.Item>
              {this.listOfUnfinishedApplicants()}
              <List.Item>
              <Button id='SendReminderButton' className="ui button">Send Reminder(s)</Button>
              {this.sending()}
              </List.Item>
            </List>
          </div>
          </Grid>
        </Container>
    );
  }
}

ApplicationReminderPage.propTypes = {
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
    ready: subscription.ready() && subscription1.ready() && subscription2.ready() && subscription6.ready() &&
        subscription7.ready() && subscription8.ready() && subscription9.ready() && subscription10.ready() &&
        subscription11.ready() && subscription12.ready(),
  };
})(ApplicationReminderPage);
