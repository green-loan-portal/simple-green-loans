import React from 'react';
import { Grid, List, Container } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const footerPadding = { paddingTop: '50px' };
    return (
        <footer>
          <Container>
          <Grid verticalAlign="middle">
            <Grid.Row columns="two" style={footerPadding} inverted>
              <Grid.Column>
                Test Footer
                <hr/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum
              </Grid.Column>
              <Grid.Column>
                Testing footer
                <hr/>
                <List bulleted>
                  <List.Item>AHHHHHHHHH 1</List.Item>
                  <List.Item>AHHHHHHHHHH 2</List.Item>
                  <List.Item>AHHHHHHHHHH 3</List.Item>
                  <List.Item>AHHHHHHHHHHHH 4</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Container>
        </footer>
    );
  }
}

export default Footer;
