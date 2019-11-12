import React from 'react';
import { Grid, List, Menu, Image, Container } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <Container className='footer add-margin-top-20px'>
          <Grid columns={3}>
            <Grid.Column>
              <Menu.Item>CONTACT US</Menu.Item>
              <hr/>
              <List>
                <List.Item>(808) 587-3868</List.Item>
                <List.Item>dbedt.gems@hawaii.gov</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Menu.Item>POLICIES</Menu.Item>
              <hr/>
              <List>
                <List.Item><a href="https://portal.ehawaii.gov/page/terms-of-use/">Terms of Use</a></List.Item>
                <List.Item><a href="https://portal.ehawaii.gov/page/accessibility/">Accessibility</a></List.Item>
                <List.Item><a href="https://portal.ehawaii.gov/page/privacy-policy/">Privacy Policy</a></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Seal_of_the_State_of_Hawaii.svg/1200px-Seal_of_the_State_of_Hawaii.svg.png'
                  size='tiny'
                  className="StateLogo centered"
              />
              <p className='add-margin-top-10px'>Copyright © 2019, State of Hawaii. All rights reserved.</p>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default Footer;
