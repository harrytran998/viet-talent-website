import React, { Component } from 'react';
import HeaderJd from '../components/Layout/Header/HeaderJd';
import FooterJd from '../components/Layout/Footer/FooterJd';
import JdTop from '../components/JD/JdTop';
import JdBottom from '../components/JD/JdBottom';

class Price extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderJd />
        <main>
          <JdTop />
          <JdBottom />
        </main>
        <FooterJd />
      </React.Fragment>
    );
  }
}

export default Price;
