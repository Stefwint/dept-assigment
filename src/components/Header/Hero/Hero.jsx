import React from 'react';
import PropTypes from 'prop-types';

// Styling
import { Button, Flex, Text, Row } from '../../styles';
import SHero from './styles';

const Hero = ({ title }) => (
  <SHero p={[0, 20]}>
    <Row px={0} className="hero-wrapper">
      <Flex pt={120} pb={80} width={1} flexDirection="column" justifyContent="space-between">
        <Text as="h1" fontSize={400}>
          {title}
        </Text>
        <Flex justifyContent="flex-end">
          <Button>View case</Button>
        </Flex>
      </Flex>
    </Row>
    <img src="../../../static/images/work-header.png" />
  </SHero>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Hero;
