import React from 'react';
import { List, Grid, Container, Header, Icon } from 'semantic-ui-react';

export default class Middle1HP extends React.Component {
  render() {
    const gridStyle = { margin: '35px 0' };
    return (
        <div className={'introduction'}>
          <Container>
            <Grid style={gridStyle}>
              <Grid.Row columns="two">
                <Grid.Column>
                  <Header as='h1'>
                    What is GEMS?
                  </Header>
                  <hr/>
                  The GEM$ provides flexible, alternative financing options to make green energy solutions possible.
                  <List bulleted>
                    <List.Item>GEM$ democratizes clean energy by enabling low-income households and renters to
                      participate</List.Item>
                    <List.Item>Provides immediate bill savings</List.Item>
                    <List.Item>Eliminates credit barriers</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h1'>
                    <Icon name='tasks'/>
                    Eligibility
                  </Header>
                  <hr/>
                  <List bulleted>
                    <List.Item>Must be a Hawaiian Electric, Maui Electric, or Hawaiian Electric Light Company customer
                      on
                      Rate Scheduled R Project Eligibility</List.Item>
                    <List.Item>No disconnect notice issued by the Utility within the past 12 months</List.Item>
                    <List.Item>Minimum of 6 months of history with the Utility</List.Item>
                    <List.Item>Households must be Low and Moderate-Income (LMI) (Defined as 140% Area Median Income per
                      the U.S. Department of Housing & Urban Development and Hawaii Housing Finance & Development
                      Corporation’s guidelines)
                    </List.Item>
                    <List.Item href='http://gems.hawaii.gov/'>
                      Additional information can be found here
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}
