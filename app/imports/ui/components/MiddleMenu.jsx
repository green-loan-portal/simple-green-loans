import React from 'react';
import { Menu, Grid, Dropdown, Container } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Container>
        <Menu fluid widths={5} className='borderless top menu'>
          <Grid position='left' container fitted>
            <Dropdown item text='Residential' icon='dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item text='Homeowner'/>
                <Dropdown.Item text='Renter'/>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='Commercial' icon='dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item text='Nonprofit'/>
                <Dropdown.Item text='Small Business'/>
                <Dropdown.Item text='Commercial Tenant'/>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item link>State Agency</Menu.Item>
            <Menu.Item link>Contractors</Menu.Item>
            <Dropdown item text='Learn More' icon='dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item text='Learn more here'/>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Menu>
        </Container>
    );
  }
}
