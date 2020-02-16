import React from 'react';
import PropTypes from 'prop-types';

// Styling
import { Box, Text } from '../styles';
import STile from './styles';
import theme from '../../theme';

const Tile = ({ title, client, image, link, isSmall }) => (
  <STile mb={isSmall ? [25, 0] : 0} pt={isSmall ? [20, 0] : 0}>
    <a href={link} target="_blank">
      {image && !isSmall && (
        <Box mb={20}>
          <img src={`../../../static/images/${image}`} />
        </Box>
      )}
      {client && (
        <Text as="span" fontSize={15} fontWeight={700} color={theme.colors.gray}>
          {client}
        </Text>
      )}
      <Text
        as="h3"
        mt={10}
        fontSize={!isSmall ? 30 : 24}
        fontWeight={400}
        color={theme.colors.black}
      >
        {title}
      </Text>
    </a>
  </STile>
);

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  isSmall: PropTypes.bool,
};

Tile.defaultProps = {
  client: '',
  image: '',
  link: '',
  isSmall: false,
};

export default Tile;
