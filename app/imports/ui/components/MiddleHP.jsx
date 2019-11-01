import React from 'react';
import { Button, Container, Divider, Form, Grid, Segment, Header } from 'semantic-ui-react';

export default class MiddleHP extends React.Component {
  render() {
    const topPadding = { paddingTop: '20px' };
    return (
        <Container>
          <Header centered as='h2' style={topPadding}>
            Welcome to the GEMS Application!
          </Header>
          <p>Aloha! We have recently overhauled our GEM$ loan application process!</p>
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
              <Form>
                <Form.Input
                    icon='user'
                    iconPosition='left'
                    label='Username'
                    placeholder='Username'
                />
                <Form.Input
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    type='password'
                />

                <Button content='Login' primary />
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>
              <Button content='Sign up' icon='signup' size='big' />
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
        </Container>
    );
  }
}
