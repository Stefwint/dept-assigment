import React from 'react';
import { Box } from '../components/styles';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return <Box py={[30, 60]}>Error</Box>;
  }
}

export default Error;
