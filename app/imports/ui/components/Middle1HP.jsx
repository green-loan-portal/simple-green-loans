import React from 'react';
import { List, Header, Grid } from 'semantic-ui-react';

export default class Middle1HP extends React.Component {
  render() {
    const gridStyle = { height: '500px' };
    return (
        <div className={'introuction'}>
          <Grid container verticalAlign="middle" style={gridStyle}>
            <Grid.Row columns="two">
              <Grid.Column>
                What is GEMS?
                <hr/>
                The Green Energy Market Securitization Program (GEMS) is an innovative, sustainable green financing
                initiative designed by the Hawaii State Energy Office to make clean energy improvements more
                affordable and accessible for Hawaii consumers. The program provides low-cost capital to finance solar
                photovoltaic systems and other clean energy improvements for those who may otherwise have difficulty
                obtaining financing for these projects. Low-credit homeowners and renters, as well as nonprofits and
                small businesses are among those who will qualify for project financing through GEMS.
              </Grid.Column>
              <Grid.Column>
                Elligibility
                <hr/>
                <List bulleted>
                  <List.Item>Must be a Hawaiian Electric, Maui Electric, or Hawaiian Electric Light Company customer on
                    Rate Scheduled R Project Elligibility</List.Item>
                  <List.Item>No disconnect notice issued by the Utility within the past 12 months</List.Item>
                  <List.Item>Minimum of 6 months of history with the Utility</List.Item>
                  <List.Item>Households must be Low and Moderate-Income (LMI) (Defined as 140% Area Median Income per
                    the U.S. Department of Housing & Urban Development and Hawaii Housing Finance & Development
                    Corporation’s guidelines)
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
