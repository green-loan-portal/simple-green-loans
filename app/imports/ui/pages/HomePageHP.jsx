import React from 'react';
import SignupHP from '../components/SignupHP';
import LogoHP from '../components/LogoHP';
import Middle1HP from '../components/Middle1HP';
import Footer from '../components/Footer';
import Process from '../components/Process';
import Fee from '../components/Fee';

export default class HomePageHP extends React.Component {

  render() {
    return (
        <div>
          <LogoHP/>
          <Middle1HP/>
          <Process/>
          <Fee/>
          <SignupHP/>
          <Footer/>
        </div>
    );
  }
}
