import styled from 'styled-components';
import { Box } from './Flex';

const Row = styled(Box)`
  width: 100%;
  max-width: ${props => props.theme.gridSize};
`;
Row.defaultProps = {
  mx: 'auto',
  px: [20, 30],
};

export default Row;
