import React from 'react';
import { Grid, List, Menu, Button, Container, Icon, Header } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <Container className='footer add-margin-top-20px'>
          <Grid columns={3}>
            <Grid.Column>
              <Menu.Item>
                <Header as='h3'>
                  GOT QUESTIONS?
                </Header>
              </Menu.Item>
              <hr/>
              <List>
                <List.Item>
                  <Icon name='phone' />
                  (808) 587-3868
                </List.Item>
                <List.Item>
                  <Icon name='envelope' />
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
              <Button>
                <Button.Content>Sign Up</Button.Content>
              </Button>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default Footer;
