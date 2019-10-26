import React from 'react';
import { Menu, Grid, Button } from 'semantic-ui-react';

export default class MiddleHP extends React.Component {
  render() {
    const gridStyle = { height: '500px' };
    return (
        <Menu borderless className="middle">
          <Grid container verticalAlign={'middle'} style={gridStyle}>
            <Grid.Row columns='two'>
              <Grid.Column>
                New User:
                <Button>Sign Up</Button>
              </Grid.Column>
              <Grid.Column>
                Returning User:
                <Button>Log In</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Menu>
    );
  }
}
