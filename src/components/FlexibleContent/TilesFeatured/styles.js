import styled from 'styled-components';
import { Row } from '../../styles';
import { px2rem } from '../../../utils';
import theme from '../../../theme';

const STilesFeatured = styled(Row)`
  .small-tiles {
    max-height: ${px2rem(500)};

    > div {
      height: 100%;
      border-top: 1px solid ${theme.colors.border};

      &:last-of-type {
        border-bottom: 1px solid ${theme.colors.border};
      }
    }
  }
`;

export default STilesFeatured;
