import React from 'react';
import PropTypes from 'prop-types';

// Styling
import { Button, Flex, Text, Row } from '../../styles';
import SHero from './styles';

const Hero = ({ title }) => (
  <SHero p={[0, 20]} pt={[50, 20]} mb={[70, 0]}>
    <Row px={[0, 20]} className="hero-wrapper">
      <Flex
        pt={[70, 120]}
        pb={[0, 80]}
        pl={[20, 20, 0]}
        pr={[20, 20, 40]}
        width={1}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Text as="h1" fontSize={[170, 300, 400]}>
          {title}
        </Text>
        <Flex justifyContent={['center', 'flex-end']} mt={[75, 0]}>
          <Button smallFullWidth>View case</Button>
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
