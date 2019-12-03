import React from 'react';
import { Image, Container } from 'semantic-ui-react';

export default class Process extends React.Component {

  render() {
    return (
        <Container className='processImage'>
          <Image src="http://energy.hawaii.gov/wp-content/uploads/2014/11/GEMSinfographic_Nov2014.png" size='massive'/>
        </Container>
    );
  }
}
