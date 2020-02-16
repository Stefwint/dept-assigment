import styled, { css } from 'styled-components';
import { Row, Text } from '../styles';
import { rem } from 'polished';
import { media } from '../../utils';
import theme from '../../theme';

const SHeader = styled(Row)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  border-bottom: 1px solid ${theme.colors.black};

  .logo-wrapper {
    position: relative;
    z-index: 99;

    img {
      display: block;
    }
  }

  ${media.smallOnly`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    border-bottom: 0;
    background: ${theme.colors.white};

    .logo-wrapper {
      img {
        max-height: ${rem(14)};
      }
    }
  `}
`;

export const SMenuButton = styled(Text)`
  position: relative;
  padding-right: ${rem(40)};
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
    width: ${rem(20)};
    height: ${rem(2)};
    background: ${theme.colors.black};
    transition: transform 0.3s ease;
  }

  &:before {
    top: ${rem(5)};

    ${props =>
      props.openMenu &&
      css`
        top: ${rem(8)};
        transform: rotate(-45deg);
        transition: transform 0.3s ease;
      `}
  }

  &:after {
    top: ${rem(12)};

    ${props =>
      props.openMenu &&
      css`
        top: ${rem(8)};
        transform: rotate(45deg);
        transition: transform 0.3s ease;
      `}
  }
`;

export default SHeader;
