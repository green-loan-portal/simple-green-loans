import React from 'react';
import MiddleHP from '../components/MiddleHP';
import LogoHP from '../components/LogoHP';
import MiddleMenu from '../components/MiddleMenu';

export default class HomePageHP extends React.Component {

  render() {
    return (
        <div>
          <LogoHP/>
          <MiddleMenu/>
          <MiddleHP/>
        </div>
    );
  }
}
