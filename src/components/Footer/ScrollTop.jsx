import React from 'react';

// Utils
import ICONS from '../../public/static/icons';

// Components
import Icon from '../Icon';

// Styling
import { Button, Flex, Text } from '../styles';
import theme from '../../theme';

const ScrollTop = () => (
  <Flex width={1 / 12} alignItems="center" justifyContent="center" className="show-for-medium">
    <Button
      noStyle
      onClick={() =>
        window.scrollTo({
          top: 100,
          left: 100,
          behavior: 'smooth',
        })
      }
    >
      <Flex flexDirection="column" alignItems="center">
        <Icon icon={ICONS.TOP} viewbox="0 0 14 31" size={40} color={theme.colors.blue} />
        <Text
          as="span"
          mt="5px"
          fontSize={22}
          fontFamily={theme.fonts.heading}
          color={theme.colors.blue}
        >
          TOP
        </Text>
      </Flex>
    </Button>
  </Flex>
);

export default ScrollTop;
