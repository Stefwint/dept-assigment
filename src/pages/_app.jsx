/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import App from 'next/app';
import objectFitImages from 'object-fit-images';
import Page from '../components/Page';
import withData from '../container/withData';
import AppProvider from '../contexts/AppProvider';

class MyApp extends App {
  componentDidMount() {
    objectFitImages();
  }
  render() {
    const { Component, pageProps, appData } = this.props;

    return (
      <React.Fragment>
        <AppProvider {...appData}>
          <Page data={pageProps.data}>
            <Component {...pageProps} />
          </Page>
        </AppProvider>
      </React.Fragment>
    );
  }
}

export default withData(MyApp);
