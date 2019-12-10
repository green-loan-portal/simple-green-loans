import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Step, Icon, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { ApplicationStatusDB } from '../../api/stuff/ApplicationStatusDB';
import { ApplicationApprovalDB } from '../../api/stuff/ApplicationApprovalDB';


class StatusBar extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() :
        <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {

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
            {/* eslint-disable-next-line no-nested-ternary */}
            <Step className={this.props.applicationApproval ?
                (this.props.applicationApproval.heco ? 'completed' : '') : 'disabled'}>
              <Icon name='info' />
              <Step.Content>
                <Step.Title>HECO</Step.Title>
                <Step.Description>
                  We are currently gathering information from HECO
                </Step.Description>
              </Step.Content>
            </Step>
            {/* eslint-disable-next-line no-nested-ternary */}
            <Step className={this.props.applicationApproval ?
                (this.props.applicationApproval.reviewed ? 'completed' : 'disabled') : 'disabled'}>
              <Icon name='folder open' />
              <Step.Content>
                <Step.Title>Reviewing Information</Step.Title>
                <Step.Description>
                  We are currently reviewing your application
                </Step.Description>
              </Step.Content>
            </Step>
            {/* eslint-disable-next-line no-nested-ternary */}
            <Step className={this.props.applicationApproval2 ?
                (this.props.applicationApproval2.approved ? 'completed' : 'disabled') : 'disabled'}>
              <Icon name='checkmark' />
              <Step.Content>
                {/* eslint-disable-next-line no-nested-ternary */}
                <Step.Title>{`${this.props.applicationApproval2 ? (this.props.applicationApproval2.approved ?
                    'Approved' : 'Denied') : 'Approved/Denied'}`}</Step.Title>
                <Step.Description>
                  {/* eslint-disable-next-line no-nested-ternary */}
                  Your application {`${this.props.applicationApproval2 ?
                    (this.props.applicationApproval2.approved ? 'has been Approved!' : 'has been Denied.') :
                    ' is being reviewed.'}`}
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
  applicationApproval2: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('ApplicationStatusDBUser');
  const subscription2 = Meteor.subscribe('ApplicationApprovalDBUser');
  const profile = Meteor.user() ? Meteor.user().username : null;
  return {
    applicationApproval: ApplicationStatusDB.findOne({ owner: profile }),
    applicationApproval2: ApplicationApprovalDB.findOne({ owner: profile }),
    ready: subscription.ready() && subscription2.ready(),
  };
})(StatusBar);
