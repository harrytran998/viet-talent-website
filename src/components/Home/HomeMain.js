import React, { Component } from 'react';
import SliderDefault from '../Elements/Slider/SliderDefault';
import About from './AboutSection';
import Service from './ServiceSection';
import Team from './TeamSection';
import Cta from './CtaSection';
import Brand from '../Common/Brand';
import Newsletter from '../Common/Newsletter';
import CounterDefault from '../Elements/Counter/CounterDefault';

class HomeMain extends Component {
  render() {
    return (
      <main>
        {/* about-area-start */}
        <About />
        {/* about-area-end */}

        {/* services-area-start */}
        <Service />
        {/* services-area-end */}

        {/* team-area-start */}
        <Team />
        {/* team-area-end */}

        {/* cta-area-start */}
        <Cta />
        {/* cta-area-end */}
      </main>
    );
  }
}

export default HomeMain;
