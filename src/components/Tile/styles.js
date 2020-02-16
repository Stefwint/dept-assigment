import styled from 'styled-components';
import { rem } from 'polished';
import { ArrowButton, Box } from '../styles';
import theme from '../../theme';

const STile = styled(Box)`
  a {
    display: block;
    text-decoration: none;

    > div {
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${theme.colors.white};
        transform: ${props => (props.inView ? 'translateX(100%)' : 'translateX(0)')};
        transition: transform 0.4s ease;
      }

      img {
        display: block;
        width: 100%;
        max-height: ${rem(500)};
        object-fit: cover;
        transition: transform 0.3s ease;
      }
    }

    span {
      display: block;
      text-transform: uppercase;
    }

    span,
    h3 {
      opacity: ${props => (props.inView ? '1' : '0')};
      transition: opacity 0.3s ease;
    }

    &:hover,
    &:focus {
      > div {
        transform: scale(0.95);

        img {
          transform: scale(1.08);
        }
      }

      ${ArrowButton} {
        &:before {
          transform: translateX(5px);
        }
      }
    }
  }
`;

export default STile;
