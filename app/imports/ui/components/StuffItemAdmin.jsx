import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class StuffItemAdmin extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.stuff2? `${this.props.stuff2.firstName} ${this.props.stuff2.middleName} ${this.props.stuff2.lastName}` : '[In progress...]'}</Table.Cell>
          <Table.Cell>{this.props.stuff.owner}</Table.Cell>
          <Table.Cell>{this.props.stuff.howDidYouHearAboutUs.join(", ")}</Table.Cell>
          <Table.Cell>{this.props.stuff.otherHDYHA}</Table.Cell>
          <Table.Cell><a href=''>Click to Edit</a></Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItemAdmin.propTypes = {
  stuff: PropTypes.object.isRequired,
  stuff2: PropTypes.object,
};

export default StuffItemAdmin;
