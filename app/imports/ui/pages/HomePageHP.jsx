import React from 'react';
import SignupHP from '../components/SignupHP';
import LogoHP from '../components/LogoHP';
import Middle1HP from '../components/Middle1HP';
import MiddleMenu from '../components/MiddleMenu';
import Footer from '../components/Footer';
import Process from '../components/Process';

export default class HomePageHP extends React.Component {

  render() {
    return (
        <div>
          <MiddleMenu/>
          <LogoHP/>
          <Middle1HP/>
          <Process/>
          <SignupHP/>
          <Footer/>
        </div>
    );
  }
}
