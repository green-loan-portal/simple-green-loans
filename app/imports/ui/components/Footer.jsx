import React from 'react';
import { Grid, List, Menu, Container, Icon, Header } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <Container className='footer add-margin-top-20px'>
          <Grid columns={4}>
            <Grid.Column>
              <Menu.Item>
                <Header as='h3'>
                  ADDITIONAL INFORMATION:
                </Header>
              </Menu.Item>
              <hr/>
              <List>
                <List.Item>
                  <a href='https://gems.hawaii.gov/participate-now/for-homeowners/'>Residential</a>
                </List.Item>
                <List.Item>
                  <a href='https://gems.hawaii.gov/participate-now/gems-inquiry-form-nonprofit/'>Commercial</a>
                </List.Item>
                <List.Item>
                  <a href='https://gems.hawaii.gov/state-agency/'>State Agency</a>
                </List.Item>
                <List.Item>
                  <a href='https://gems.hawaii.gov/participate-now/installers/'>Contractors</a>
                </List.Item>
                <List.Item>
                  <a href='http://gems.hawaii.gov/learn-more/'>Learn More</a>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Menu.Item>
                <Header as='h3'>
                  GOT QUESTIONS?
                </Header>
              </Menu.Item>
              <hr/>
              <List>
                <List.Item>
                  <Icon name='phone'/>
                  (808) 587-3868
                </List.Item>
                <List.Item>
                  <Icon name='envelope'/>
                  dbedt.gems@hawaii.gov
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Menu.Item>
                <Header as='h3'>
                  POLICIES
                </Header>
              </Menu.Item>
              <hr/>
              <List>
                <List.Item><a href="https://portal.ehawaii.gov/page/terms-of-use/">Terms of Use</a></List.Item>
                <List.Item><a href="https://portal.ehawaii.gov/page/accessibility/">Accessibility</a></List.Item>
                <List.Item><a href="https://portal.ehawaii.gov/page/privacy-policy/">Privacy Policy</a></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Menu.Item>
                <Header as='h3'>
                  APPLY TODAY!
                </Header>
              </Menu.Item>
              <hr/>
              Simple Green Loans, 2019 <br/>
              Built for the <a href='https://gems.hawaii.gov/'>Hawaii Green Infrastructure Authority</a> <br/>
              Check us out on <a href='https://github.com/green-loan-portal/simple-green-loans'>Github</a>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default Footer;
