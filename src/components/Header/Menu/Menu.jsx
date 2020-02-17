import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

// Components
import Countries from './Countries';
import Socials from './Socials';

// Styling
import { Box, Flex, Text, Row } from '../../styles';
import SMenu, { MenuItem } from './styles';
import theme from '../../../theme';

const Menu = ({ menu, isOpen }) => (
  <SMenu isOpen={isOpen}>
    <Box bg={theme.colors.black}>
      {isOpen && <Countries />}
      {isOpen && <Socials />}
      <Row px={20} pb={250} className="menu-wrapper">
        {menu && isOpen && (
          <Flex as="ul" flexDirection="column" px={0}>
            {menu.map(item => (
              <MenuItem key={uuid()} as="li" pl={0} mb={[10, 15]} isActive={item.isActive}>
                <Text as="a" href={item.url} fontSize={[50, 80, 110]} color={theme.colors.white}>
                  {item.title}
                </Text>
              </MenuItem>
            ))}
          </Flex>
        )}
      </Row>
    </Box>
  </SMenu>
);

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
  isOpen: PropTypes.bool.isRequired,
};

Menu.defaultProps = {
  menu: [],
};

export default Menu;
