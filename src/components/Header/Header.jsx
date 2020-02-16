import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// Components
import Hero from './Hero';
import Menu, { MenuButton } from './Menu';

// Styling
import { Box, Flex, Text } from '../styles';
import SHeader from './styles';

const Header = ({ menu, title, openMenu, setOpenMenu }) => (
  <Box>
    <SHeader pb={[15, 20]} pt={[15, 50]} px={[20, 40]}>
      <Flex justifyContent="space-between" alignItems="center">
        <Box className="logo-wrapper">
          <Link href="/">
            <a>
              <img src={`../../static/${openMenu ? 'logoWhite' : 'logo'}.svg`} alt={title} />
            </a>
          </Link>
        </Box>
        <Box>
          <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu}>
            <Text as="span">MENU</Text>
          </MenuButton>
          <Menu isOpen={openMenu} menu={menu} />
        </Box>
      </Flex>
    </SHeader>
    <Hero title="Work" />
  </Box>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(PropTypes.object),
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
};

Header.defaultProps = {
  menu: [],
};

export default Header;
