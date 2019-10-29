import React from 'react';
import SignupHP from '../components/SignupHP';
import LogoHP from '../components/LogoHP';
import Middle1HP from '../components/Middle1HP';

export default class HomePageHP extends React.Component {

  render() {
    return (
        <div>
          <LogoHP/>
          <Middle1HP/>
          <SignupHP/>
        </div>
    );
  }
}
