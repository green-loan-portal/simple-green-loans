import React from 'react';
import { Message } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <div style={{ textAlign: 'center' }}>
          <Message warning className='four wide field'>
            <Message.Header>You must verify your account before doing anything!</Message.Header>
            <p>Please check your email to confirm it's really you.</p>
          </Message>
        </div>
        <h5 className="ui right aligned header">Built by: Team Free Labor</h5>
      </div>
    );
  }
}

export default Footer;
