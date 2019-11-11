import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

export default class MiddleHP extends React.Component {
  render() {
    const topPadding = { paddingTop: '20px' };
    return (
        <Container>
          <Header centered as='h2' style={topPadding}>
            Welcome to the GEMS Application!
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
          <p>Please use the options on the bottom to create an account for a new loan application,
            or to sign in to your existing account!</p>
        </Container>
    );
  }
}
