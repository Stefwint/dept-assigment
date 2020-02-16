import styled from 'styled-components';
import { rem } from 'polished';
import { Row } from '../../styles';
import theme from '../../../theme';

const STilesFeatured = styled(Row)`
  .small-tiles {
    max-height: ${rem(500)};

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
