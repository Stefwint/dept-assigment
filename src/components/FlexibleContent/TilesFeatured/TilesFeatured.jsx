import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

// Components
import Tile from '../../Tile';

// Styling
import { Box, Flex } from '../../styles';
import STilesFeatured from './styles';

const TilesFeatured = ({ items }) => {
  const featuredItem = items?.findIndex(item => item.image);
  const smallTiles = items.filter(item => !item.image);

  return (
    <STilesFeatured px={[20, 0]}>
      <Flex mx={-15} my={[25, 40]} flexWrap="wrap">
        <Box px={15} width={[1, 8 / 12]} order={featuredItem === 0 ? 0 : 1}>
          <Tile {...items[featuredItem]} />
        </Box>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          px={15}
          mb={[50, 0]}
          width={[1, 4 / 12]}
          order={featuredItem === 0 ? 1 : 0}
          className="small-tiles"
        >
          {smallTiles?.map((item, index) => (
            <Box key={uuid()} pt="5px">
              <Tile isSmall isLast={index === 1} {...item} />
            </Box>
          ))}
        </Flex>
      </Flex>
    </STilesFeatured>
  );
};

TilesFeatured.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TilesFeatured;
