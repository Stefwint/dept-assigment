import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import uuid from 'uuid';

// Utils
import ICONS from '../../public/static/icons';

// Components
import Icon from '../Icon';

// Styling
import { Box, Button, Column, Flex, Text, Row } from '../styles';
import SFooter, { SFooterMenu } from './styles';
import theme from '../../theme';

const Footer = ({ menu, title }) => (
  <SFooter as="footer">
    <Box width={11 / 12} py={100} bg={theme.colors.black}>
      <Row px={0}>
        <Flex alignItems="flex-end">
          <Box width={3 / 12}>
            <Link href="/">
              <a>
                <img src="../../static/logoWhite.svg" alt={title} />
              </a>
            </Link>
          </Box>
          {menu && (
            <SFooterMenu as="ul" width={6 / 12}>
              {menu.map(item => (
                <Box key={uuid()} as="li">
                  <Text as="a" href={item.url} target={item.target} px={15}>
                    {item.title}
                  </Text>
                </Box>
              ))}
            </SFooterMenu>
          )}
          <Box ml="auto">
            <Text as="a" href="https://www.facebook.com/DeptAgency/" target="_blank">
              <Icon
                icon={ICONS.FACEBOOK}
                viewbox="0 0 23 50"
                size={15}
                color={theme.colors.white}
              />
            </Text>
            <Text as="a" ml={30} href="https://twitter.com/deptagency" target="_blank">
              <Icon icon={ICONS.TWITTER} viewbox="0 0 50 50" size={15} color={theme.colors.white} />
            </Text>
            <Text as="a" ml={30} href="https://www.instagram.com/deptagency/" target="_blank">
              <Icon
                icon={ICONS.INSTAGRAM}
                viewbox="0 0 14 14"
                size={15}
                color={theme.colors.white}
              />
            </Text>
          </Box>
        </Flex>
        <hr />
        <Flex mt={30} alignItems="center">
          <Column offset={3 / 12}>
            <Flex>
              <Text px={15} fontSize={13} color={theme.colors.warmGray}>
                Chamber of Commerce: 63464101
              </Text>
              <Text px={15} fontSize={13} color={theme.colors.warmGray}>
                VAT: NL 8552.47.502.B01
              </Text>
              <Text
                as="a"
                href="https://www.deptagency.com/nl-nl/terms-conditions/"
                target="_blank"
                px={15}
                fontSize={13}
                color={theme.colors.warmGray}
              >
                Terms and conditions
              </Text>
            </Flex>
          </Column>
          <Box ml="auto">
            <Text fontSize={13} color={theme.colors.warmGray}>
              © {new Date().getFullYear()} Dept Agency
            </Text>
          </Box>
        </Flex>
      </Row>
    </Box>
    <Flex width={1 / 12} alignItems="center" justifyContent="center">
      <Button
        noStyle
        onClick={() =>
          window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth',
          })
        }
      >
        <Flex flexDirection="column" alignItems="center">
          <Icon icon={ICONS.TOP} viewbox="0 0 14 31" size={40} color={theme.colors.blue} />
          <Text
            as="span"
            mt="5px"
            fontSize={22}
            fontFamily={theme.fonts.heading}
            color={theme.colors.blue}
          >
            TOP
          </Text>
        </Flex>
      </Button>
    </Flex>
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
