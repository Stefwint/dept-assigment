import styled from 'styled-components';
import { px2rem } from '../../utils';
import theme from '../../theme';

const FormLabel = styled.label`
  text-transform: uppercase;
  font-size: ${px2rem(15)};
  font-weight: 700;
  line-height: 2;
  color: ${theme.colors.black};
`;

export default FormLabel;
