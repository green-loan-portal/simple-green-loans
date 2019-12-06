import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Step, Icon, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { _ } from 'meteor/underscore';
import { ApplicationStatusDB } from '../../api/stuff/ApplicationStatusDB';


class StatusBar extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() :
        <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    // const approvedReviewed = (this.props.applicationApproval.reviewed ? 'completed' : 'disabled');
    const profile = Meteor.user() ? Meteor.user().username : null;
    const approvedReviewed = _.pluck(ApplicationStatusDB.find({ owner: profile }).fetch(),
        'reviewed') ? 'completed' : 'disabled';
    // const approvedApproved1 = this.props.applicationApproval.approved ? 'completed' : 'disabled';
    const approvedApproved1 = _.pluck(ApplicationStatusDB.find({ owner: profile }).fetch(),
        'approved') ? 'completed' : 'disabled';
    // const approvedHeco = this.props.applicationApproval.heco ? 'completed' : '';
    const approvedHeco = _.pluck(ApplicationStatusDB.find({ owner: profile }).fetch(),
        'heco') ? 'completed' : '';
    // const approvedApproved2 = this.props.applicationApproval.approved ? 'Approved' : 'Denied';
    const approvedApproved2 = _.pluck(ApplicationStatusDB.find({ owner: profile }).fetch(),
        'approved') ? 'Approved' : 'Denied';
    // const approvedApproved3 = this.props.applicationApproval.approved ? 'has been Approved!' : 'has been Denied.';
    const approvedApproved3 = _.pluck(ApplicationStatusDB.find({ owner: profile }).fetch(),
        'approved') ? 'has been Approved!' : 'has been Denied.';

    return (
        <div>
          <Step.Group vertical>
            <Step className={(this.props.section1 && this.props.section2 && this.props.section6 && this.props.section7
                && this.props.section8 && this.props.section9 && this.props.sectionAuthorization) ? 'completed' : ''}>
              <Icon name='wpforms'/>
              <Step.Content>
                <Step.Title>Finish Application</Step.Title>
                <Step.Description>Complete your application and submit</Step.Description>
              </Step.Content>
            </Step>
            <Step className={this.props.applicationApproval ? approvedHeco : 'disabled'}>
              <Icon name='info'/>
              <Step.Content>
                <Step.Title>HECO</Step.Title>
                <Step.Description>
                  We are currently gathering information from HECO
                </Step.Description>
              </Step.Content>
            </Step>
            <Step className={this.props.applicationApproval ? approvedReviewed : 'disabled'}>
              <Icon name='folder open'/>
              <Step.Content>
                <Step.Title>Reviewing Information</Step.Title>
                <Step.Description>
                  We are currently reviewing your application
                </Step.Description>
              </Step.Content>
            </Step>
            <Step className={this.props.applicationApproval ? approvedApproved1 : 'disabled'}>
              <Icon name='checkmark'/>
              <Step.Content>
                <Step.Title>{`${this.props.applicationApproval ? approvedApproved2 : 'Approved/Denied'}`}</Step.Title>
                <Step.Description>
                  Your application {`${this.props.applicationApproval ? approvedApproved3 : ' is being reviewed.'}`}
                </Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>
        </div>
    );
  }
}

StatusBar.propTypes = {
  stuff: PropTypes.object.isRequired,
  section1: PropTypes.object,
  section2: PropTypes.object,
  section6: PropTypes.object,
  section7: PropTypes.object,
  section8: PropTypes.object,
  section9: PropTypes.object,
  sectionAuthorization: PropTypes.object,
  applicationApproval: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('ApplicationStatusDBUser');
  const profile = Meteor.user() ? Meteor.user().username : null;
  return {
    applicationApproval: ApplicationStatusDB.findOne({ owner: profile }),
    ready: subscription.ready(),
  };
})(StatusBar);
