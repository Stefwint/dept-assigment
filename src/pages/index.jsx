import React from 'react';
import PropTypes from 'prop-types';

// Utils
import { get } from '../api/callers';

// Components
import CasesOverview from '../components/Templates/CasesOverview';

const Home = ({ layouts }) => <CasesOverview layouts={layouts} />;

Home.getInitialProps = async () => {
  const cases = await get('cases/').then(resp => resp?.layouts);
  const clients = await get('clients/');
  const contact = await get('contact/');

  const layouts = [...cases, clients, contact];

  return { layouts };
};

Home.propTypes = {
  layouts: PropTypes.arrayOf(PropTypes.object),
};

Home.defaultProps = {
  layouts: [],
};

export default Home;
