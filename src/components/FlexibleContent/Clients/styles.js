import styled from 'styled-components';
import { rem } from 'polished';
import { Box } from '../../styles';

const SLogo = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${rem(125)};
  text-align: center;
  list-style: none;
`;

export default SLogo;
