import styled, { css } from 'styled-components';
import { Box } from './Flex';
import { media, px2rem } from '../../utils';

const Container = styled(Box)`
  width: 100%;
  max-width: ${props => props.theme.containerSize};
  ${media.smallOnly`
    ${props =>
      !props.noPadding &&
      css`
        padding-left: ${px2rem(30)};
        padding-right: ${px2rem(30)};
      `}
  `}
`;
Container.defaultProps = {
  mx: 'auto',
  px: '0',
};

export default Container;
