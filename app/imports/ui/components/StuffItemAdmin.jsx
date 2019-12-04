import React from 'react';
import { Icon, Button, Table, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { collectdata } from '../../api/stuff/CsvScript';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { withTracker } from 'meteor/react-meteor-data';
import { ApplicationStatusDB } from '../../api/stuff/ApplicationStatusDB';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class StuffItemAdmin extends React.Component {
  constructor(props) {
    super(props);
    const data = ApplicationStatusDB.findOne({ owner: this.props.stuff.username });
    if (!data) {
      this.state = { checkColor: '', cancelColor: 'red' };
    } else {
      this.state = { checkColor: data.approved ? 'green' : '', cancelColor: data.approved ? '' : 'red' };
    }
  }

  updateApprovalStatus(emailOwner, boolean) {
    swal({
      title: "Are you sure?",
      text: `Set application status, ${boolean ? 'APPROVED' : 'DENIED'}, for ${emailOwner}.`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willContinue) => {
        if (willContinue) {
          const currentUser = ApplicationStatusDB.findOne({ owner: emailOwner });
          const owner = emailOwner;
          const approved = boolean;
          if (!currentUser) {
            ApplicationStatusDB.insert({ owner, approved });
          } else {
            ApplicationStatusDB.update(
              { _id: currentUser._id },
              {
                $set: { owner, approved },
              },
            );
          }
          this.setState({ checkColor: boolean ? 'green' : '', cancelColor: boolean ? '' : 'red' })
        }
      });
  }

  render() {
    // const unfinishedSections = this.unfinishedSections();
    return (
      <Table.Row>
        <Table.Cell>
          {this.props.section2 ? `${this.props.section2.firstName ? this.props.section2.firstName : ''}
          ${this.props.section2.middleName ? this.props.section2.middleName : ''}
          ${this.props.section2.lastName ? this.props.section2.lastName : ''}` : ''}
        </Table.Cell>
        <Table.Cell><a href={'mailto:' + this.props.stuff.username}>{this.props.stuff.username}</a></Table.Cell>
        <Table.Cell>{this.props.section1 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section2 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section6 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section7 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section8 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.section9 ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        <Table.Cell>{this.props.sectionAuthorization ? <Icon name='check' className='green' /> : ''}</Table.Cell>
        {/* <Table.Cell><Link to='/allforms'><Icon name='external alternate' /></Link></Table.Cell> */}
        <Table.Cell>
          <Button className='Received' basic color='green' content='Green' size='mini'>
            Received
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Button className='Reviewed' basic color='green' content='Green' size='mini'>
            Reviewed
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Link to={`/adminforms/${this.props.stuff.username}`}>
            <Button className='exportButton' basic color='green' content='Green' size='mini'>
              PDF
            </Button>
          </Link>
        </Table.Cell>
        <Table.Cell>
          <Button onClick={collectdata} className='exportButton' basic color='green' content='Green' size='mini'>
            Excel
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Button type='button' className={this.state.checkColor} onClick={() =>
            this.updateApprovalStatus(this.props.stuff.username, true)} icon='check'></Button>
          /&nbsp;
          <Button type='button' className={this.state.cancelColor} onClick={() =>
            this.updateApprovalStatus(this.props.stuff.username, false)} icon='cancel'></Button>
        </Table.Cell>
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

export default (StuffItemAdmin);

