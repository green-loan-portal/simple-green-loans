import React from 'react';
import { Header, Container, Grid, Segment, Divider, Button, Step, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class ProfilePage extends React.Component {
  render() {
    return (
        <Container>
        <Header as="h1" textAlign="center">My Loan</Header>
          <Segment placeholder>
            <Grid columns={2} stackable textAlign='center'>
              <Divider vertical>Or</Divider>

              <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                  <Header as="h1">View/Finish Your Application</Header>
                  <Button as={NavLink} exact to="/form/1">Click Here</Button>
                </Grid.Column>

                <Grid.Column>
                  <Header as="h1">Your Application Status</Header>
                  <Step.Group vertical>
                    <Step>
                      <Icon name='wpforms' />
                      <Step.Content>
                        <Step.Title>Finish Application</Step.Title>
                        <Step.Description>Complete your application and submit</Step.Description>
                      </Step.Content>
                    </Step>
                    <Step disabled>
                      <Icon name='info' />
                      <Step.Content>
                        <Step.Title>HECO</Step.Title>
                        <Step.Description>Gathering information from HECO</Step.Description>
                      </Step.Content>
                    </Step>
                    <Step disabled>
                      <Icon name='folder open' />
                      <Step.Content>
                        <Step.Title>Reviewing information</Step.Title>
                        <Step.Description>We are currently reviewing your application</Step.Description>
                      </Step.Content>
                    </Step>
                    <Step disabled>
                      <Icon name='checkmark' />
                      <Step.Content>
                        <Step.Title>Approved/Denied</Step.Title>
                        <Step.Description>Your application has been approved!</Step.Description>
                      </Step.Content>
                    </Step>
                  </Step.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
    );
}
}
