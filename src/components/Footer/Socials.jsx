import React from 'react';

// Utils
import ICONS from '../../public/static/icons';

// Components
import Icon from '../Icon';

// Styling
import { Flex, Text } from '../styles';
import theme from '../../theme';

const Socials = () => (
  <Flex flexDirection={['column', 'row']} ml="auto">
    <Text
      as="a"
      href="https://www.facebook.com/DeptAgency/"
      target="_blank"
      mb={[20, 0]}
      aria-label="Follow us on Facebook"
    >
      <Icon icon={ICONS.FACEBOOK} viewbox="0 0 23 50" size={15} color={theme.colors.white} />
    </Text>
    <Text
      as="a"
      ml={[0, 30]}
      mb={[20, 0]}
      href="https://twitter.com/deptagency"
      target="_blank"
      aria-label="Follow us on Twitter"
    >
      <Icon icon={ICONS.TWITTER} viewbox="0 0 50 50" size={15} color={theme.colors.white} />
    </Text>
    <Text
      as="a"
      ml={[0, 30]}
      href="https://www.instagram.com/deptagency/"
      target="_blank"
      aria-label="Follow us on Instagram"
    >
      <Icon icon={ICONS.INSTAGRAM} viewbox="0 0 14 14" size={15} color={theme.colors.white} />
    </Text>
  </Flex>
);

export default Socials;
