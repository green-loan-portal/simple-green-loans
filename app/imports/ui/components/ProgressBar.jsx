import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';


/** The ProgressBar appears at the top of every page. Rendered by the App Layout component. */
class ProgressBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '40px' };
    return (
        <Container>
        <Menu style={menuStyle} attached="top" borderless tabular fluid width={7}>
          {this.props.currentUser ? (
              [
                <Menu.Item as={NavLink} activeClassName="active" exact to="/form/1" key='form1'>Survey</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/form/2" key='form2'>Installation</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/form/6" key='form6'>Data</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/form/7" key='form7'>Applicant</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/form/8" key='form8'>System Owner</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/form/9" key='form9'>Disclosure</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/authorization" key='AuthorizationPage'>Authorization</Menu.Item>,
              ]
              // <Menu.Item as={NavLink} activeClassName="active" exact to="/list" key='list'>List Stuff</Menu.Item>,
              //  <Menu.Item as={NavLink} activeClassName='active' exact to='/authorization'
              //  key='authorization'>Authorization</Menu.Item>]
          ) : ''}

        </Menu>
        </Container>
    );
  }
}

/** Declare the types of all properties. */
ProgressBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const ProgressBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(ProgressBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(ProgressBarContainer);
