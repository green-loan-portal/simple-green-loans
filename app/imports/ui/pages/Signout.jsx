import React from 'react';
import { Meteor } from 'meteor/meteor';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    swal('You have logged out successfully!', 'Bye, see you soon!', 'success');
    return (
      <Redirect to='/'/>
    );
  }
}
