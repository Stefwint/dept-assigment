import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

// Components
import Tile from '../../Tile';

// Styling
import { Box, Flex, Row } from '../../styles';

const Tiles = ({ items }) => (
  <Row px={0}>
    <Flex mx={-15} flexWrap="wrap">
      {items?.map(item => (
        <Box key={uuid()} my={40} px={15} width={[1, 1 / 2]}>
          <Tile {...item} />
        </Box>
      ))}
    </Flex>
  </Row>
);

Tiles.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tiles;
