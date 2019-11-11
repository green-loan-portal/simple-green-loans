import React from 'react';
import { List, Header, Grid, Container } from 'semantic-ui-react';

export default class Middle1HP extends React.Component {
  render() {
    const gridStyle = { height: '300px' };
    return (
        <div className={'introuction'}>
          <Container>
          <Grid verticalAlign="middle" style={gridStyle}>
            <Grid.Row columns="two">
              <Grid.Column>
                What is GEMS?
                <hr/>
                The Green Energy Market Securitization Program (GEMS) is an innovative, sustainable green financing
                initiative designed by the Hawaii State Energy Office to make clean energy improvements more
                affordable and accessible for Hawaii consumers. The program provides low-cost capital to finance solar
                photovoltaic systems and other clean energy improvements for those who may otherwise have difficulty
                obtaining financing for these projects.
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
          <Header centered as='h2'>
            New Application Process!
          </Header>
          <p>Aloha! We have recently overhauled our GEM$ loan application process!</p>
          <p>Changes and features include:</p>
          <List bulleted>
            <List.Item>
              Completely web-based application, no more frustrating PDF applications!
            </List.Item>
            <List.Item>
              Account creation for easier management of your application!
            </List.Item>
          </List>
          <p style={{ paddingBottom: '50px' }}>
            Login to your existing account, or create a new one to start a new application!
          </p>
          </Container>
        </div>
    );
  }
}
