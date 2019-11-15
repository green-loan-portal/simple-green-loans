import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { Section1DB } from '../../api/stuff/Section1DB';
import { Section2DB } from '../../api/stuff/Section2DB';
import { Section6DB } from '../../api/stuff/Section6DB';
import { Section7DB } from '../../api/stuff/Section7DB';
import { Section8DB } from '../../api/stuff/Section8DB';
import { Section9DB } from '../../api/stuff/Section9DB';
import { AuthorizationDB } from '../../api/stuff/AuthorizationDB';

import StuffItemAdmin from '../../ui/components/StuffItemAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStuffAdmin extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center">Records (Admin)</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Customer Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>How did you hear about GEMS?</Table.HeaderCell>
              <Table.HeaderCell>Section 1</Table.HeaderCell>
              <Table.HeaderCell>Section 2-5</Table.HeaderCell>
              <Table.HeaderCell>Section 6</Table.HeaderCell>
              <Table.HeaderCell>Section 7</Table.HeaderCell>
              <Table.HeaderCell>Section 8</Table.HeaderCell>
              <Table.HeaderCell>Section 9</Table.HeaderCell>
              <Table.HeaderCell>Authorization</Table.HeaderCell>
              <Table.HeaderCell>View</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.accounts.map((stuff, index) => <StuffItemAdmin key={index}
              stuff={stuff}
              section1={this.props.db1.find(mydb1 => (mydb1.owner == stuff.username))}
              section2={this.props.db2.find(mydb2 => (mydb2.owner == stuff.username))}
              section6={this.props.db6.find(mydb6 => (mydb6.owner == stuff.username))}
              section7={this.props.db7.find(mydb7 => (mydb7.owner == stuff.username))}
              section8={this.props.db8.find(mydb8 => (mydb8.owner == stuff.username))}
              section9={this.props.db9.find(mydb9 => (mydb9.owner == stuff.username))}
              sectionAuthorization={this.props.dbauthorization.find(mydbAuth => (mydbAuth.owner == stuff.username))}
            />)}
          </Table.Body>
        </Table>
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
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('StuffAdmin');
  return {
    accounts: Meteor.users.find({}).fetch(),
    db1: Section1DB.find({}).fetch(),
    db2: Section2DB.find({}).fetch(),
    db6: Section6DB.find({}).fetch(),
    db7: Section7DB.find({}).fetch(),
    db8: Section8DB.find({}).fetch(),
    db9: Section9DB.find({}).fetch(),
    dbauthorization: AuthorizationDB.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListStuffAdmin);
