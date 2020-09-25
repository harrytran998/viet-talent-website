import './index.scss';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store';
import { loadIcons } from '../utils/IconLoader';

loadIcons();

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be accessed by the client
    return { pageProps: pageProps };
  }

  render() {
    //Page props that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="assets/img/logo/logo.png" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
