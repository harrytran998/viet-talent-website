import React, { Component } from 'react';
import About from './AboutSection';
import Technology from './Technology';
import Team from './TeamSection';
import Culture from './CultureSection';
import CtaBottom from './CtaSectionBotton';
import CtaTop from './CtaSectionTop';

class HomeMain extends Component {
  render() {
    return (
      <main>
        <About />
        <CtaTop />
        <Technology />
        <Culture />
        <Team />
        <CtaBottom />
      </main>
    );
  }
}

export default HomeMain;
