import React from 'react';
import MiddleHP from '../components/MiddleHP';
import LogoHP from '../components/LogoHP';

export default class HomePageHP extends React.Component {

  render() {
    return (
        <div>
          <LogoHP/>
          <MiddleHP/>
        </div>
    );
  }
}
