import React from 'react';
import { Menu, Grid, Container } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {

  render() {
    return (
      <Container className='borderless top menu'>
        <Menu fluid widths={5}>
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
