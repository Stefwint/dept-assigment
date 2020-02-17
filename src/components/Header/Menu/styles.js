import styled, { css } from 'styled-components';
import { Box, Text, Row } from '../../styles';
import { rem } from 'polished';
import { media } from '../../../utils';
import theme from '../../../theme';

const SMenu = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  padding: ${rem(20)};
  width: 100vw;
  height: 100vh;
  z-index: 98;
  opacity: 0;
  transform: scale(1.05);
  pointer-events: none;
  background: ${theme.colors.white};
  transition: opacity 0.3s ease, transform 0.3s ease;

  > div {
    height: 100%;
  }

  .menu-wrapper {
    position: relative;
    top: ${rem(150)};
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0;
      height: ${rem(20)};
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      height: ${rem(20)};
      background-clip: padding-box;
      border-radius: 10px;
      background-color: transparent;
    }

    &:after {
      content: '';
      position: fixed;
      bottom: 20px;
      right: 20px;
      height: ${rem(125)};
      width: calc(100% - 40px);
      background: linear-gradient(to top, rgba(14, 14, 14, 0.99) 65%, rgba(14, 14, 14, 0));
    }
  }

  ${props =>
    props.isOpen &&
    css`
      opacity: 1;
      transform: scale(1);
      pointer-events: initial;
    `}

  ${media.smallOnly`
    padding: 0;

    .menu-wrapper {
      &:after {
        display: none;
      }
    }
  `}
`;

export const SMenuButton = styled(Text)`
  position: relative;
  z-index: 99;
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
        background: ${theme.colors.white};
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
        background: ${theme.colors.white};
        transition: transform 0.3s ease;
      `}
  }

  span {
    opacity: ${props => (props.openMenu ? 0 : 1)};
  }
`;

export const MenuItem = styled(Text)`
  border-bottom: 1px solid ${theme.colors.menuGray};
  font-family: ${theme.fonts.heading};
  text-transform: uppercase;
  text-align: right;
  list-style: none;
  line-height: 0.9;

  &:last-of-type {
    border-bottom: 0;
  }

  a {
    text-decoration: none;
  }

  ${props =>
    props.isActive &&
    css`
      a {
        &:before {
          content: '';
          display: inline-block;
          margin-right: ${rem(40)};
          margin-bottom: ${rem(12)};
          width: 0;
          height: 0;
          border-top: 18px solid transparent;
          border-bottom: 18px solid transparent;
          border-left: 28px solid ${theme.colors.white};
        }
      }

      ${media.smallOnly`
        a {
          &:before {
            margin-right: ${rem(10)};
            margin-bottom: ${rem(6)};
            border-top: 9px solid transparent;
            border-bottom: 9px solid transparent;
            border-left: 14px solid ${theme.colors.white};
          }
        }
      `}
    `}
`;

export const SCountries = styled(Row)`
  position: relative;

  > div {
    position: absolute;
    top: ${rem(100)};
    left: ${rem(20)};
    z-index: 1;

    span {
      text-transform: uppercase;
      font-weight: 700;
    }

    ul {
      padding: 0;

      li {
        padding-left: 0;
        list-style: none;
        text-transform: uppercase;
        font-weight: 700;

        a {
          text-decoration: none;

          &.active {
            &:before {
              content: '';
              display: inline-block;
              margin-right: ${rem(5)};
              width: 0;
              height: 0;
              border-top: 4px solid transparent;
              border-bottom: 4px solid transparent;
              border-left: 8px solid ${theme.colors.white};
            }
          }
        }
      }
    }
  }
`;

export const SSocials = styled(Row)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;

  .socials-wrapper {
    position: absolute;
    left: 0;
    height: 100%;

    > div {
      position: absolute;
      bottom: ${rem(50)};
      left: ${rem(20)};
      z-index: 1;

      a {
        padding: ${rem(3)} 0;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
      }
    }
  }
`;

export default SMenu;
