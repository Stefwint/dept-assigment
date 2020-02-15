import styled from 'styled-components';
import { px2rem } from '../../../utils';
import { Box } from '../../styles';

const SLogo = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${px2rem(125)};
  text-align: center;
  list-style: none;
`;

export default SLogo;
