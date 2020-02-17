import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import uuid from 'uuid';

// Components
import Socials from './Socials';
import ScrollTop from './ScrollTop';

// Styling
import { Box, Column, Flex, Text, Row } from '../styles';
import SFooter, { SFooterMenu } from './styles';
import theme from '../../theme';

const Footer = ({ menu, title }) => (
  <SFooter as="footer" noPadding>
    <Box width={[1, 1, 11 / 12]} px={20} pt={[60, 100]} pb={[50, 100]} bg={theme.colors.black}>
      <Row px={[20, 0]} pl={[0, 0, 80]} pr={[0, 0, 40]}>
        <Flex alignItems={['flex-start', 'flex-end']}>
          <Box width={3 / 12} className="show-for-small">
            <Link href="/">
              <a>
                <img src="../../static/logoWhite.svg" alt={title} />
              </a>
            </Link>
          </Box>
          {menu && (
            <SFooterMenu as="ul" flexDirection={['column', 'row']} width={6 / 12}>
              {menu.map(item => (
                <Box key={uuid()} as="li">
                  <Text
                    as="a"
                    href={item.url}
                    target={item.target}
                    px={[0, 15]}
                    fontSize={[32, 18]}
                  >
                    {item.title}
                  </Text>
                </Box>
              ))}
            </SFooterMenu>
          )}
          <Socials />
        </Flex>
        <hr />
        <Flex mt={[0, 30]} flexDirection={['column', 'row']}>
          <Column offset={[0, 3 / 12]}>
            <Flex flexDirection={['column', 'row']} flexWrap="wrap">
              <Text
                pr={[0, 15]}
                pl={[0, 0, 15]}
                py={['3px', 0]}
                width={[1, 'auto']}
                fontSize={13}
                color={theme.colors.warmGray}
              >
                Chamber of Commerce: 63464101
              </Text>
              <Text px={[0, 15]} py={['3px', 0]} fontSize={13} color={theme.colors.warmGray}>
                VAT: NL 8552.47.502.B01
              </Text>
              <Text
                as="a"
                href="https://www.deptagency.com/nl-nl/terms-conditions/"
                target="_blank"
                px={[0, 15]}
                py={['3px', 0]}
                fontSize={13}
                color={theme.colors.warmGray}
              >
                Terms and conditions
              </Text>
            </Flex>
          </Column>
          <Box ml={[0, 'auto']} mt={[25, 0]}>
            <Text fontSize={13} color={theme.colors.warmGray}>
              © {new Date().getFullYear()} Dept Agency
            </Text>
          </Box>
        </Flex>
      </Row>
    </Box>
    <ScrollTop />
  </SFooter>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(PropTypes.object),
};

Footer.defaultProps = {
  menu: [],
};

export default Footer;
