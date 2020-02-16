import styled from 'styled-components';
import { rem } from 'polished';
import theme from '../../theme';

const FormLabel = styled.label`
  text-transform: uppercase;
  font-size: ${rem(15)};
  font-weight: 700;
  line-height: 2;
  color: ${theme.colors.black};
`;

export default FormLabel;
