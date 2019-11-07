import React from 'react';
import { Image, Container, Menu } from 'semantic-ui-react';

export default class LogoHP extends React.Component {
  render() {
    return (
      <Container>
        <Menu style={{ paddingTop: '10px' }}>
          <Image
            src='https://gems.hawaii.gov/wp-content/uploads/2015/01/GEMS-Logo.png'
            position='left'
            size='medium' style={{ padding: '20px' }} />
          <div>
            <Menu.Item as='h3' position='left' style={{ paddingTop: '20px' }}>
              Hawaii Green Infrastructure Authority
              </Menu.Item>
            <Menu.Item as='p' position='left'
              style={{ paddingTop: '-20px' }}>
              GEMS Financing Program
              </Menu.Item>
          </div>
        </Menu>
      </Container>
    );
  }
}
