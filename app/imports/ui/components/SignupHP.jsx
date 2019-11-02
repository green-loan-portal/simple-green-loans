import React from 'react';
import { Button, Divider, Form, Grid, Message, Segment } from 'semantic-ui-react';
import { NavLink, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

export default class SignupHP extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', redirectToReferer: false };
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  /** Handle Signin submission using Meteor's account mechanism. */
  submit = () => {
    const { email, password } = this.state;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  render() {
    const { from } = { from: { pathname: '/Profile' } };
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    return (
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
              <Form onSubmit={this.submit}>
                <Form.Input
                    icon='user'
                    iconPosition='left'
                    label='Username'
                    placeholder='Username'
                    name="email"
                    type="email"
                    onChange={this.handleChange}
                />
                <Form.Input
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                />
                <Form.Button content='Login' primary/>
              </Form>

              {this.state.error === '' ? (
                  ''
              ) : (
                  <Message
                      error
                      header="Login was not successful"
                      content={this.state.error}
                  />
              )}
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>
              <Button content='Sign up' icon='signup' size='big' as={NavLink} exact to="/signup"/>
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
    );
  }
}

SignupHP.propTypes = {
  location: PropTypes.object,
};
