import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

// Styling
import { Box, Flex, Text, Row } from '../../styles';
import SMenu, { MenuItem } from './styles';
import theme from '../../../theme';

const Menu = ({ menu, isOpen }) => (
  <SMenu isOpen={isOpen}>
    <Box bg={theme.colors.black}>
      <Row px={20} py={100} className="menu-wrapper">
        {menu && (
          <Flex as="ul" flexDirection="column" px={0}>
            {menu.map(item => (
              <MenuItem key={uuid()} as="li" pl={0} mb={[10, 15]} isActive={item.isActive}>
                <Text as="a" href={item.url} fontSize={[50, 110]} color={theme.colors.white}>
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
  isOpen: PropTypes.bool.isRequired,
};

export default Menu;
