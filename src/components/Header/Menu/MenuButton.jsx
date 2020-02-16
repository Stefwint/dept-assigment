import React from 'react';
import PropTypes from 'prop-types';

// Styling
import { Text } from '../../styles';
import { SMenuButton } from './styles';

const MenuButton = ({ setOpenMenu, openMenu }) => (
  <SMenuButton as="button" fontSize={18} openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
    <Text as="span">MENU</Text>
  </SMenuButton>
);

MenuButton.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
};

export default MenuButton;
