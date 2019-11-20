import React from 'react';
import { Step, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class StatusBar extends React.Component {
  render() {
    return (
        <div>
        { this.props.section1 && this.props.section2
          && this.props.section6 && this.props.section7 && this.props.section8
          && this.props.section9 && this.props.sectionAuthorization ?
              <Step.Group vertical>
                <Step completed>
                  <Icon name='wpforms'/>
                  <Step.Content>
                    <Step.Title>Finish Application</Step.Title>
                    <Step.Description>Complete your application and submit</Step.Description>
                  </Step.Content>
                </Step>
                <Step>
                  <Icon name='info'/>
                  <Step.Content>
                    <Step.Title>HECO</Step.Title>
                    <Step.Description>Gathering information from HECO</Step.Description>
                  </Step.Content>
                </Step>
                <Step disabled>
                  <Icon name='folder open'/>
                  <Step.Content>
                    <Step.Title>Reviewing information</Step.Title>
                    <Step.Description>We are currently reviewing your application</Step.Description>
                  </Step.Content>
                </Step>
                <Step disabled>
                  <Icon name='checkmark'/>
                  <Step.Content>
                    <Step.Title>Approved/Denied</Step.Title>
                    <Step.Description>Your application has been approved!</Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group> :
              <Step.Group vertical>
                <Step>
                  <Icon name='wpforms'/>
                  <Step.Content>
                    <Step.Title>Finish Application</Step.Title>
                    <Step.Description>Complete your application and submit</Step.Description>
                  </Step.Content>
                </Step>
                <Step disabled>
                  <Icon name='info'/>
                  <Step.Content>
                    <Step.Title>HECO</Step.Title>
                    <Step.Description>Gathering information from HECO</Step.Description>
                  </Step.Content>
                </Step>
                <Step disabled>
                  <Icon name='folder open'/>
                  <Step.Content>
                    <Step.Title>Reviewing information</Step.Title>
                    <Step.Description>We are currently reviewing your application</Step.Description>
                  </Step.Content>
                </Step>
                <Step disabled>
                  <Icon name='checkmark'/>
                  <Step.Content>
                    <Step.Title>Approved/Denied</Step.Title>
                    <Step.Description>Your application has been approved!</Step.Description>
                  </Step.Content>
                </Step>
              </Step.Group>
        }
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
};

export default StatusBar;
