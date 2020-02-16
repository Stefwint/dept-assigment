import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import { rem } from 'polished';
import { media } from '../../utils';
import theme from '../../theme';

const Button = styled.button`
  ${space};
  position: relative;
  display: inline-block;
  padding: ${`${rem(8)} ${rem(40)}`};
  overflow: hidden;
  font-size: ${rem(15)};
  font-weight: 700;
  line-height: 2;
  text-transform: uppercase;
  background: ${props => (props.bg ? props.bg : props.theme.colors.black)};
  color: ${props => (props.color ? props.color : props.theme.colors.white)};
  border: 0;
  transition: all 0.2s;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: -50px;
    left: -75px;
    height: ${rem(155)};
    width: ${rem(50)};
    opacity: 0.2;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    filter: blur(5px);
    z-index: 10;
    background: ${theme.colors.white};
  }

  &:hover {
    transform: scale(1.05);

    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  ${props =>
    props.smallFullWidth &&
    css`
      ${media.smallOnly`
      width: 100%;
    `}
    `}

  ${props =>
    props.noStyle &&
    css`
      box-shadow: none;
      border: 0;
      background: none;
      padding: 0;
      ${space};
    `};
`;

export const ArrowButton = styled.span`
  color: ${theme.colors.blue};
  text-transform: uppercase;
  font-size: ${rem(14)};
  font-weight: 700;

  &:before {
    content: '';
    display: inline-block;
    margin-right: ${rem(10)};
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 7px solid ${theme.colors.blue};
    transition: transform 0.3s ease;
  }
`;

export default Button;
