import React from 'react';
import { List, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ARPComponent extends React.Component {

  render() {
    return (
            <List.Item>
              <Checkbox
                  label={this.props.owner}
              />
            </List.Item>
  );
  }
}

/** Require a document to be passed to this component. */
ARPComponent.propTypes = {
  owner: PropTypes.string.isRequired,
};

export default (ARPComponent);
