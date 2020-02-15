import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// Components
import Hero from './Hero';

// Styling
import { Box, Container, Flex, Text } from '../styles';
import SHeader, { SMenuButton } from './styles';

const Header = ({ title }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container>
      <SHeader pb={20} pt={50} px={0}>
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/">
            <a>
              <img src="../../static/logo.svg" alt={title} />
            </a>
          </Link>
          <Box>
            <SMenuButton
              as="button"
              fontSize={18}
              openMenu={openMenu}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <Text as="span">MENU</Text>
            </SMenuButton>
          </Box>
        </Flex>
      </SHeader>
      <Hero title="Work" />
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
