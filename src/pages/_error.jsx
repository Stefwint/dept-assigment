import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Flex, Box, Text } from '../components/styles';
import { AppConsumer } from '../contexts/AppProvider';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <Box py={[30, 60]}>
        <AppConsumer>
          {({ options }) => (
            <Box>
              <h1 mt={16}>404</h1>
              {options.acf && options.acf.error_text && (
                <Text
                  fontSize={[18, 24]}
                  lineHeight="30px"
                  mt="8px"
                  dangerouslySetInnerHTML={{ __html: options.acf.error_text }}
                />
              )}
              <Flex mt={41} flexWrap="wrap" alignItems="center">
                {typeof window !== 'undefined' && window.history && window.history.length > 1 && (
                  <button
                    type="button"
                    buttonType="white"
                    onClick={(e) => {
                      e.preventDefault();
                      Router.back();
                    }}
                  >
                    Naar vorige pagina
                  </button>
                )}
                {options && options.acf && options.acf.site_contact_page && (
                  <Link
                    href={`/${options.acf.site_contact_page.type}?slug=${options.acf.site_contact_page.slug}`}
                    passHref
                  >
                    <a>Neem contact met ons op</a>
                  </Link>
                )}
              </Flex>
            </Box>
          )}
        </AppConsumer>
      </Box>
    );
  }
}

export default Error;
