import styled from 'styled-components';
import { Box } from '../../styles/Flex';
import { px2rem } from '../../../utils';

const SHero = styled(Box)`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  min-height: ${px2rem(700)};

  .hero-wrapper {
    position: relative;

    > div {
      position: absolute;
      z-index: 1;

      h1 {
        text-transform: uppercase;
        font-weight: 400;
      }
    }
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default SHero;
