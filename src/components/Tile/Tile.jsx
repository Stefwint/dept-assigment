import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

// Styling
import { ArrowButton, Box, Text } from '../styles';
import STile from './styles';
import theme from '../../theme';

const Tile = ({ title, client, image, link, isSmall }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <STile mb={isSmall ? [25, 0] : 0} pt={isSmall ? 20 : 0} ref={ref} inView={inView}>
      <a href={link} target="_blank">
        {image && !isSmall && (
          <Box mb={20}>
            <img src={`../../../static/images/${image}`} alt={title} />
          </Box>
        )}
        {client && (
          <Text as="span" fontSize={[14, 15]} fontWeight={700} color={theme.colors.gray}>
            {client}
          </Text>
        )}
        <Text
          as="h3"
          mt={15}
          mb={20}
          fontSize={!isSmall ? 30 : 24}
          fontWeight={400}
          color={theme.colors.black}
        >
          {title}
        </Text>
        <ArrowButton>View case</ArrowButton>
      </a>
    </STile>
  );
};

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
