import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/Stuff';
// import StuffItem from '/imports/ui/components/StuffItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStuff extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List Stuff</Header>
          <Table celled>
            <Table.Header>

              { /**


               <Table.Row>
               <Table.HeaderCell>Column</Table.HeaderCell>
               <Table.HeaderCell>Name</Table.HeaderCell>
               <Table.HeaderCell>Quantity</Table.HeaderCell>
               <Table.HeaderCell>Condition</Table.HeaderCell>
               <Table.HeaderCell>How did you hear about GEMS?</Table.HeaderCell>
               <Table.HeaderCell>otherHDYHA</Table.HeaderCell>
               <Table.HeaderCell>Edit</Table.HeaderCell>
               </Table.Row>

               <Table celled structured>
               <Table.Header>
               <Table.Row>
               <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
               <Table.HeaderCell rowSpan='2'>Type</Table.HeaderCell>
               <Table.HeaderCell rowSpan='2'>Files</Table.HeaderCell>
               <Table.HeaderCell colSpan='3'>Languages</Table.HeaderCell>
               </Table.Row>
               <Table.Row>
               <Table.HeaderCell>Ruby</Table.HeaderCell>
               <Table.HeaderCell>JavaScript</Table.HeaderCell>
               <Table.HeaderCell>Python</Table.HeaderCell>
               </Table.Row>
               </Table.Header>

               <Table.Body>
               <Table.Row>
               <Table.Cell>Alpha Team</Table.Cell>
               <Table.Cell>Project 1</Table.Cell>
               <Table.Cell textAlign='right'>2</Table.Cell>
               <Table.Cell textAlign='center'>
               <Icon color='green' name='checkmark' size='large'/>
               </Table.Cell>
               <Table.Cell/>
               <Table.Cell/>
               </Table.Row>
               <Table.Row>
               <Table.Cell rowSpan='3'>Beta Team</Table.Cell>
               <Table.Cell>Project 1</Table.Cell>
               <Table.Cell textAlign='right'>52</Table.Cell>
               <Table.Cell textAlign='center'>
               <Icon color='green' name='checkmark' size='large'/>
               </Table.Cell>
               <Table.Cell/>
               <Table.Cell/>
               </Table.Row>
               <Table.Row>
               <Table.Cell>Project 2</Table.Cell>
               <Table.Cell textAlign='right'>12</Table.Cell>
               <Table.Cell/>
               <Table.Cell textAlign='center'>
               <Icon color='green' name='checkmark' size='large'/>
               </Table.Cell>
               <Table.Cell/>
               </Table.Row>
               <Table.Row>
               <Table.Cell>Project 3</Table.Cell>
               <Table.Cell textAlign='right'>21</Table.Cell>
               <Table.Cell textAlign='center'>
               <Icon color='green' name='checkmark' size='large'/>
               </Table.Cell>
               <Table.Cell/>
               <Table.Cell/>
               </Table.Row>
               </Table.Body>
               </Table>
               */}


              <Table definition>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell/>
                    <Table.HeaderCell>How did you hear about GEMS?</Table.HeaderCell>
                    <Table.HeaderCell>Which of these do you have in your home?</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell rowSpan='1'>Questions Go Here</Table.Cell>
                    <Table.Cell>Answer</Table.Cell>
                    <Table.Cell>Answer</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>None</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>None</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>None</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                  </Table.Row>

                </Table.Body>
              </Table>

              {
                /**
                 <Table.Column>
                 <Table.HeaderCell inverted >Side Column</Table.HeaderCell>
                 </Table.Column>
                 */}
            </Table.Header>
            <Table.Body>

              {
                /**
                 { this.props.stuffs.map((stuff) => <StuffItem key={stuff._id} stuff={stuff}/>) }
                 */}

            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListStuff.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListStuff);
