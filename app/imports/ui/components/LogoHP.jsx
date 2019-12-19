import React from 'react';
import { Image, Container, Grid, Header, Button, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class LogoHP extends React.Component {
  render() {
    return (
        <div className="hawaii-background">
          <Container>
            <Grid centered rows={4}>
              <Grid.Row>
                <Image id={'LogoHome'}
                       src='https://gems.hawaii.gov/wp-content/uploads/2015/01/GEMS-Logo.png'
                       href='https://gems.hawaii.gov/'/>
              </Grid.Row>
              <Grid.Row className={'LogoTitle color-black'}>
                <Header as='h1'>Hawaii Green Infrastructure Authority</Header>
              </Grid.Row>
              <Grid.Row className={'LogoTitle color-black'}>
                <Header as='h1'>GEM$ Financing Program Loan Application Portal</Header>
              </Grid.Row>
              <Grid.Row>
                <Button as={NavLink} activeClassName="" exact to="/signup" size='huge' color='green'>
                  <Icon name='edit' />
                  Sign Up Today!
                </Button>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}
