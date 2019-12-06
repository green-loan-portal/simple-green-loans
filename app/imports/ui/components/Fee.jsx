import React from 'react';
import { Image, Container, Header, Icon } from 'semantic-ui-react';

export default class Fee extends React.Component {

  render() {
    return (
        <Container className='feeImage'>
          <Header as='h1' textAlign='center'>
            <Icon name='money bill alternate outline' />
            <Header.Content>
              Fee Structure
            </Header.Content>
          </Header>
          <Image src="http://energy.hawaii.gov/wp-content/uploads/2014/11/GEMSfee_graphic_12.24.14.png" size='huge'/>
        </Container>
    );
  }
}
