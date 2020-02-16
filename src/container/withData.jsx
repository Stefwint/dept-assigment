import React from 'react';
import { get } from '../api/callers';

const isServer = !process.browser;
const clientStore = isServer ? null : {};

async function fetchGlobalData() {
  const menus = get('menus/').then(resp => resp?.menus);

  const result = Promise.all([menus]).then(values => ({
    menus: values[0],
  }));

  return result;
}

const withData = Page => {
  const withDataWrapper = props => <Page {...props} />;
  withDataWrapper.getInitialProps = async context => {
    const appData = clientStore ? clientStore.appData : await fetchGlobalData();

    if (clientStore && !clientStore.appData) {
      clientStore.appData = appData;
    }

    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
      appData,
    };
  };

  return withDataWrapper;
};

export default withData;
