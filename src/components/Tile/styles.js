import styled from 'styled-components';
import { rem } from 'polished';
import { ArrowButton, Box } from '../styles';

const STile = styled(Box)`
  a {
    display: block;
    text-decoration: none;

    > div {
      overflow: hidden;
      transition: transform 0.3s ease;

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
