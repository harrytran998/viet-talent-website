import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <React.Fragment>
      <Head>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      </Head>
      <header id="header-wrap">
        <div id="sticky-header" className="main-menu-area" style={{ backgroundColor: '#f8f8f8' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 d-flex align-items-center">
                <div className="logo">
                  <Link href="/" as="/">
                    <img src="assets/img/logo/logo.png" alt="" height="130px" />
                  </Link>
                </div>
              </div>
              <div id="right-header" className="col-xl-9 col-lg-9">
                <div className="header-button f-right d-none d-lg-block">
                  <a className="btn" href="https://viettalent.typeform.com/to/lL6WBXxF" target="_blank">
                    <span className="btn-text">
                      Nộp hồ sơ
                      <i>
                        <FontAwesomeIcon icon={['fas', 'long-arrow-right']} />
                      </i>
                    </span>{' '}
                  </a>
                </div>
                <div className="main-menu text-right d-none d-lg-block">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link href="#jd-bottom" as="#jd-bottom">
                          <a>Quyền lợi</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#contact" as="#contact">
                          <a>Liên hệ</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-12">
                <div id="burger-menu-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
