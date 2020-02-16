import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

// Styling
import { Box, Container, Flex, Row, Text } from '../../styles';
import SLogo from './styles';
import theme from '../../../theme';

const Clients = ({ title, description, logos }) => (
  <Container bg={theme.colors.lightGray}>
    <Row mt={40} pt={80} pb={100}>
      <Flex justifyContent="center">
        <Box width={[1, 6 / 12]}>
          <Text as="h2" fontSize={60} fontWeight={400} textAlign="center">
            {title}
          </Text>
          {description && (
            <Text as="p" fontSize={17} lineHeight="27px" textAlign="center">
              {description}
            </Text>
          )}
        </Box>
      </Flex>
      {logos && (
        <Flex as="ul" p={0} mt={50} flexWrap="wrap">
          {logos.map(item => (
            <SLogo key={uuid()} as="li" width={[1 / 2, 1 / 4]} px={[20, 0]}>
              <a href={item.link} target="_blank">
                <img src={`../../../static/logos/${item.logo}`} alt="image" />
              </a>
            </SLogo>
          ))}
        </Flex>
      )}
    </Row>
  </Container>
);

Clients.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  logos: PropTypes.arrayOf(PropTypes.object),
};

Clients.defaultProps = {
  description: '',
  logos: [],
};

export default Clients;
