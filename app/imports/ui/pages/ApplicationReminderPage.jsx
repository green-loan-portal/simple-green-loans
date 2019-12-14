import React from 'react';
import { Meteor } from 'meteor/meteor';
import { List, Container, Header, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Section1DB } from '../../api/stuff/Section1DB';
import { Section2DB } from '../../api/stuff/Section2DB';
import { Section6DB } from '../../api/stuff/Section6DB';
import { Section7DB } from '../../api/stuff/Section7DB';
import { Section8DB } from '../../api/stuff/Section8DB';
import { Section9DB } from '../../api/stuff/Section9DB';
import { AuthorizationDB } from '../../api/stuff/AuthorizationDB';
import { ApplicationStatusDB } from '../../api/stuff/ApplicationStatusDB';
import { ApplicationApprovalDB } from '../../api/stuff/ApplicationApprovalDB';
import ARPComponent from '../components/ARPComponent';

class ApplicationReminderPage extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.ready) {
      this.state = { unfinished: [] };
    }
  }

  render() {
    return (this.props.ready) ? (
        this.renderPage()
    ) : (
        <Loader active>Getting data</Loader>
    );
  }

  renderPage() {

    return (
        <Container>

        <Header>Select Application To Send Reminder Email</Header>

        <div>
          <List>
            {this.state.unfinished.map((stuff) => <ARPComponent
                key = {stuff.owner}
                owner = {stuff.owner}
                />)}
          </List>
        </div>
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
