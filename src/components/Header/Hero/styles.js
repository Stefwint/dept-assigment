import styled from 'styled-components';
import { Box } from '../../styles/Flex';
import { rem } from 'polished';
import { media } from '../../../utils';

const SHero = styled(Box)`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  min-height: ${rem(700)};

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

  ${media.smallOnly`
    width: 100%;
    height: inherit;
    min-height: ${rem(350)};

    img {
      height: ${rem(320)};
    }
  `}
`;

export default SHero;
