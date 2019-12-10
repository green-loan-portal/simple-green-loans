import React from 'react';
import { Image, Container, Header, Icon } from 'semantic-ui-react';

export default class Process extends React.Component {

  render() {
    return (
        <Container className='processImage'>
          <Header as='h1' textAlign='center'>
            <Icon name='settings'/>
            <Header.Content>
              How it works
            </Header.Content>
          </Header>
          <Image size='massive'
                 src="http://energy.hawaii.gov/wp-content/uploads/2014/11/GEMSinfographic_Nov2014.png"/>
        </Container>
    );
  }
}
