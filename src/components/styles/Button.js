import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import { px2rem } from '../../utils';
import theme from '../../theme';

const Button = styled.button`
  ${space};
  position: relative;
  display: inline-block;
  padding: ${px2rem(8, 40)};
  overflow: hidden;
  font-size: ${px2rem(15)};
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
    height: ${px2rem(155)};
    width: ${px2rem(50)};
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
    props.noStyle &&
    css`
      box-shadow: none;
      border: 0;
      background: none;
      padding: 0;
      ${space};
    `};
`;

export default Button;
