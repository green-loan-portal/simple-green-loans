import React from 'react';
import { Icon, Button, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { collectdata } from '../../api/stuff/CsvScript';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class StuffItemAdmin extends React.Component {

  render() {
    // const unfinishedSections = this.unfinishedSections();
    return (
      <Table.Row>
        <Table.Cell>{this.props.section2 ? `${this.props.section2.firstName ? this.props.section2.firstName : ''} ${this.props.section2.middleName ? this.props.section2.middleName : ''} ${this.props.section2.lastName ? this.props.section2.lastName : ''}` : ''}</Table.Cell>
        <Table.Cell><a href={'mailto:' + this.props.stuff.username}>{this.props.stuff.username}</a></Table.Cell>
        <Table.Cell>{this.props.section1 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section2 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section6 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section7 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section8 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section9 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.sectionAuthorization ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell><a href=''><Icon name='external alternate' /></a></Table.Cell>
        <Table.Cell> <Button onClick={collectdata} className='exportButton' basic color='green' content='Green' size='mini'>
          Excel
        </Button></Table.Cell>
      </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItemAdmin.propTypes = {
  stuff: PropTypes.object.isRequired,
  section1: PropTypes.object,
  section2: PropTypes.object,
  section6: PropTypes.object,
  section7: PropTypes.object,
  section8: PropTypes.object,
  section9: PropTypes.object,
  sectionAuthorization: PropTypes.object,
};

export default StuffItemAdmin;
