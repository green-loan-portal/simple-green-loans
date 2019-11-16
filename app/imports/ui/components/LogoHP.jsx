import React from 'react';
import { Image, Container, Grid } from 'semantic-ui-react';

export default class LogoHP extends React.Component {
  render() {
    return (
        <div className="hawaii-background">
          <Container>
            <Grid centered rows={3}>
              <Grid.Row>
                <Image id={'LogoHome'}
                       src='https://gems.hawaii.gov/wp-content/uploads/2015/01/GEMS-Logo.png'
                       href='https://gems.hawaii.gov/'/>
              </Grid.Row>
              <Grid.Row className={'LogoTitle color-white'}>
                <p>Hawaii Green Infrastructure Authority</p>
              </Grid.Row>
              <Grid.Row className={'LogoTitle color-white'}>
                <p>GEM$ Financing Program Loan Application Portal</p>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}
