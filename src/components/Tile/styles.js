import styled from 'styled-components';
import { Box } from '../styles';
import { px2rem } from '../../utils';

const STile = styled(Box)`
  a {
    display: block;
    text-decoration: none;

    > div {
      overflow: hidden;
      transition: transform 0.3s ease;

      span {
        display: block;
        text-transform: uppercase;
      }

      img {
        display: block;
        width: 100%;
        max-height: ${px2rem(500)};
        object-fit: cover;
        transition: transform 0.3s ease;
      }
    }

    &:hover,
    &:focus {
      > div {
        transform: scale(0.95);

        img {
          transform: scale(1.08);
        }
      }
    }
  }
`;

export default STile;
