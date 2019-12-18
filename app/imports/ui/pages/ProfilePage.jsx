import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Header, Container, Grid, Segment, Divider, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Redirect } from 'react-router';
import StatusBar from '../components/StatusBar';
import { Section1DB } from '../../api/stuff/Section1DB';
import { Section2DB } from '../../api/stuff/Section2DB';
import { Section6DB } from '../../api/stuff/Section6DB';
import { Section7DB } from '../../api/stuff/Section7DB';
import { Section8DB } from '../../api/stuff/Section8DB';
import { Section9DB } from '../../api/stuff/Section9DB';
import { AuthorizationDB } from '../../api/stuff/AuthorizationDB';
import { ApplicationStatusDB } from '../../api/stuff/ApplicationStatusDB';
import { ApplicationApprovalDB } from '../../api/stuff/ApplicationApprovalDB';

class ProfilePage extends React.Component {
  render() {
    return ((Roles.userIsInRole(Meteor.userId(), 'admin')) ? <Redirect to="/processorHome" /> :
      <Container>
        <Header as="h1" textAlign="center">My Loan</Header>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header as="h1">Start/Edit Your Application</Header>
                <Button as={NavLink} exact to="/form/1">Click Here</Button>
              </Grid.Column>

              <Grid.Column>
                <Header as="h1">Your Application Status</Header>
                {this.props.accounts.map((stuff, index) => (
                  <StatusBar
                    key={index}
                    stuff={stuff}
                    section1={this.props.db1.find(
                      mydb1 => mydb1.owner === stuff.username,
                    )}
                    section2={this.props.db2.find(
                      mydb2 => mydb2.owner === stuff.username,
                    )}
                    section6={this.props.db6.find(
                      mydb6 => mydb6.owner === stuff.username,
                    )}
                    section7={this.props.db7.find(
                      mydb7 => mydb7.owner === stuff.username,
                    )}
                    section8={this.props.db8.find(
                      mydb8 => mydb8.owner === stuff.username,
                    )}
                    section9={this.props.db9.find(
                      mydb9 => mydb9.owner === stuff.username,
                    )}
                    sectionAuthorization={this.props.dbauthorization.find(
                      mydbAuth => mydbAuth.owner === stuff.username,
                    )}
                  />
                ))}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ProfilePage.propTypes = {
  accounts: PropTypes.array.isRequired,
  db1: PropTypes.array,
  db2: PropTypes.array,
  db6: PropTypes.array,
  db7: PropTypes.array,
  db8: PropTypes.array,
  db9: PropTypes.array,
  dbauthorization: PropTypes.array,
  applicationStatus: PropTypes.array,
  applicationApproval: PropTypes.array,
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
    applicationApproval: ApplicationApprovalDB.find({}).fetch(),
    ready: subscription.ready() && subscription1.ready() && subscription2.ready() && subscription6.ready() &&
      subscription7.ready() && subscription8.ready() && subscription9.ready() && subscription10.ready() &&
      subscription11.ready() && subscription12.ready(),
  };
})(ProfilePage);
