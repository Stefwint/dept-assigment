import React from 'react';

// Styling
import { Box, Flex, Text } from '../../styles';
import { SSocials } from './styles';
import theme from '../../../theme';

const Socials = () => (
  <SSocials px={20} className="show-for-small">
    <Box className="socials-wrapper">
      <Flex flexDirection="column" py={20} pr={10} bg={theme.colors.black}>
        <Text
          as="a"
          href="https://www.facebook.com/DeptAgency/"
          target="_blank"
          color={theme.colors.white}
          fontSize={12}
        >
          Facebook
        </Text>
        <Text
          as="a"
          href="https://twitter.com/deptagency"
          target="_blank"
          color={theme.colors.white}
          fontSize={12}
        >
          Twitter
        </Text>
        <Text
          as="a"
          href="https://www.instagram.com/deptagency/"
          target="_blank"
          color={theme.colors.white}
          fontSize={12}
        >
          Instagram
        </Text>
        <Text
          as="a"
          href="https://www.linkedin.com/DeptAgency/"
          target="_blank"
          color={theme.colors.white}
          fontSize={12}
        >
          LinkedIn
        </Text>
      </Flex>
    </Box>
  </SSocials>
);

export default Socials;
