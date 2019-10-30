import React from 'react';
import { Menu, Grid, Dropdown, Container } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Container>
        <Menu borderless className='middlemenu'>
          <Grid position='left' container fitted>
            <Dropdown item text='Residential' icon='dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item text='TSHIRTS'/>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='Commercial' icon='dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item text='TSHIRTS'/>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item link>State Agency</Menu.Item>
            <Menu.Item link>Contractors</Menu.Item>
            <Dropdown item text='Learn More' icon='dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item text='Your cart is currently empty'/>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Menu>
        </Container>
    );
  }
}
