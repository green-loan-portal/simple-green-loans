import React from 'react';
import { Header, Container, Grid, Segment, Divider, Button } from 'semantic-ui-react';
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
                  <Header as="h1">View Your Application Status</Header>
                  <Button>Click Here</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
    );
}
}
