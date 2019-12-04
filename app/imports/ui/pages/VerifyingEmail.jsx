import React from 'react';
import { Loader, Button, Message } from 'semantic-ui-react';
import { Stuffs, StuffSchema } from '/imports/api/stuff/Stuff';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { VerifyEmail } from '/imports/api/UnverifiedEmailsDB';

/** Renders the Page for editing a single document. */
class VerifyingEmail extends React.Component {
  userVerified(id) {
    VerifyEmail.remove({ _id: id });
  }
  /** On successful submit, insert the data. */
  submit(data) {
    const { name, quantity, condition, _id } = data;
    Stuffs.update(_id, { $set: { name, quantity, condition } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
      <div style={{ textAlign: 'center' }}>
        {this.props.doc ?
          this.userVerified(this.props.doc._id)
            (
              <Message positive className='four wide field'>
                <Message.Header>Thank you for verifying your email!</Message.Header>
                <p>You have successfully verified your email, {this.props.doc.email}.</p>
                <Link to={'/profile'}>
                  <Button basic color='green'>My Profile</Button>
                </Link>
              </Message>
            ) :
          (<Message negative className='four wide field'>
            <Message.Header>Email Verification Failed!</Message.Header>
            <p>
              You have either already verified your account or your verifying token is broken.<br />
              Please check the link from your email again, or if you are unsure,
              please <a href='mailto:dbedt.gems@hawaii.gov'>email</a> us or call at (808) 587-3868.
            </p>
          </Message>)
        }
      </div>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
VerifyingEmail.propTypes = {
  doc: PropTypes.object,
  string: PropTypes.string,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the verifiedCode from the URL field. See imports/ui/layouts/App.jsx for the route containing :verifiedCode.
  // Get access to VerifyEmails documents.
  const subscription = Meteor.subscribe('VerifyEmails');
  return {
    doc: VerifyEmail.findOne({ verifiedCode: match.params.verifiedCode }),
    string: match.params.verifiedCode,
    ready: subscription.ready(),
  };
})(VerifyingEmail);
