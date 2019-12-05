import React from 'react';
import { Header, Container, Grid, Segment, Divider, Button, Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class ProcessorProfilePage extends React.Component {
  render() {
    return (
        <Container>
        <Header as="h1" textAlign="center">Welcome!</Header>
          <Segment placeholder>
            <Grid columns={2} stackable textAlign='center'>
              <Divider vertical>Or</Divider>

              <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                  <Header as="h1">View status of unfinished applicants</Header>
                  <Button as={NavLink} exact to="/admin">Click Here</Button>
                </Grid.Column>

                <Grid.Column>
                  <Header as="h1">Query an Applicant</Header>
                  <Input focus placeholder='Search...' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
    );
}
}
