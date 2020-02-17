import React from 'react';
import { get } from '../api/callers';

const isServer = !process.browser;
const clientStore = isServer ? null : {};

async function fetchGlobalData() {
  const menus = get('menus/').then(resp => resp?.menus);
  const countries = get('countries/').then(resp => resp?.countries);

  const result = Promise.all([menus, countries]).then(values => ({
    menus: values[0],
    countries: values[1],
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
