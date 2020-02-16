import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { Box } from './Flex';
import { media } from '../../utils';

const Container = styled(Box)`
  width: 100%;
  max-width: ${props => props.theme.containerSize};
  ${media.smallOnly`
    ${props =>
      !props.noPadding &&
      css`
        padding-left: ${rem(30)};
        padding-right: ${rem(30)};
      `}
  `}
`;
Container.defaultProps = {
  mx: 'auto',
  px: '0',
};

export default Container;
