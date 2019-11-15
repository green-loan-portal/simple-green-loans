import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { Section1DB } from '../../api/stuff/Section1DB'
import { Section2DB } from '../../api/stuff/Section2DB'
import StuffItemAdmin from '../../ui/components/StuffItemAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStuffAdmin extends React.Component {

  myFunction() {
    console.log("test");
    console.log(this.props.stuff2);
    console.log("k; " + this.props.stuffs);
    console.log("nice");
    let indexed = [];
    this.props.stuffs.forEach(item => {
      this.props.stuff2.forEach(item2 => {
        console.log(item);
        if (item.owner == item2.owner2) {
          indexed.concat(item, item2);
          console.log(item.owner + "; " + item.owner2 + "; " + indexed);
        }
      })
    })
    console.log("index: " + indexed);
    return indexed.map((stuff) => <StuffItemAdmin key={stuff._id} stuff={stuff} />)
    // return indexed;
  }
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
              <Table.HeaderCell>otherHDYHA</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.stuffs.map((stuff, index) => <StuffItemAdmin key={index}
              stuff={stuff}
              stuff2={this.props.stuff2.find(myStuff2 => (myStuff2.owner == stuff.owner))}
            />)}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListStuffAdmin.propTypes = {
  stuffs: PropTypes.array.isRequired,
  stuff2: PropTypes.array,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('StuffAdmin');
  const subscription1 = Meteor.subscribe('StuffAdmin1');
  return {
    stuffs: Section1DB.find({}).fetch(),
    stuff2: Section2DB.find({}).fetch(),
    ready: subscription.ready() && subscription1.ready(),
  };
})(ListStuffAdmin);
