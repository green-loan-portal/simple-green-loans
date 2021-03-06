import React from 'react';
import { Menu, Grid, Container, Header } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {

  render() {
    return (
      <Container className='topmen'>
        <Header as='h2'>
          Additional Information:
        </Header>
        <Menu fluid widths={5} className='borderless top menu'>
          <Grid position='left' container>
            <Menu.Item href='https://gems.hawaii.gov/participate-now/for-homeowners/'>
              Residential
            </Menu.Item>
            <Menu.Item href='https://gems.hawaii.gov/participate-now/gems-inquiry-form-nonprofit/'>
              Commercial
            </Menu.Item>
            <Menu.Item href='https://gems.hawaii.gov/state-agency/'>State Agency</Menu.Item>
            <Menu.Item href='https://gems.hawaii.gov/participate-now/installers/'>Contractors</Menu.Item>
            <Menu.Item href='http://gems.hawaii.gov/learn-more/'>
              Learn more
            </Menu.Item>
          </Grid>
        </Menu>
      </Container>
    );
  }
}
