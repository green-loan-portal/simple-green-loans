import React from 'react';
import { Grid, List, Container } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const footerPadding = { paddingTop: '50px' };
    return (
        <footer>
          <Container>
          <Grid verticalAlign="top">
            <Grid.Row columns="two" style={footerPadding} inverted>
              <Grid.Column>
                <h1>Contact us</h1>
                <List bulleted>
                  <List.Item>
                    asdfads;fklja;sdfjkasd
                  </List.Item>
                  <List.Item>
                    asdfl;akjdf;aldsjf;asjdf
                  </List.Item>
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
