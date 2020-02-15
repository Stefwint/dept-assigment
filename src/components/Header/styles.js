import styled, { css } from 'styled-components';
import { Row, Text } from '../styles';
import { px2rem } from '../../utils';
import theme from '../../theme';

const SHeader = styled(Row)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  border-bottom: 1px solid ${theme.colors.black};

  img {
    display: block;
  }
`;

export const SMenuButton = styled(Text)`
  position: relative;
  padding-right: ${px2rem(40)};
  background: 0;
  border: 0;
  box-shadow: none;
  font-family: ${theme.fonts.heading};
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: ${px2rem(20)};
    height: ${px2rem(2)};
    background: ${theme.colors.black};
    transition: transform 0.3s ease;
  }

  &:before {
    top: ${px2rem(5)};

    ${props =>
      props.openMenu &&
      css`
        top: ${px2rem(8)};
        transform: rotate(-45deg);
        transition: transform 0.3s ease;
      `}
  }

  &:after {
    top: ${px2rem(12)};

    ${props =>
      props.openMenu &&
      css`
        top: ${px2rem(8)};
        transform: rotate(45deg);
        transition: transform 0.3s ease;
      `}
  }
`;

export default SHeader;
