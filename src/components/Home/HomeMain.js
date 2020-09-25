import React, { Component } from 'react';
import SliderDefault from '../Elements/Slider/SliderDefault';
import About from './AboutSection';
import Technology from './Technology';
import Team from './TeamSection';
import Culture from './CultureSection';
import CtaBottom from './CtaSectionBotton';
import CtaTop from './CtaSectionTop';
import Brand from '../Common/Brand';
import Newsletter from '../Common/Newsletter';
import CounterDefault from '../Elements/Counter/CounterDefault';

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
