import styled from 'styled-components';
import { px2rem } from '../../../utils';
import theme from '../../../theme';

const STextInput = styled.input`
  height: ${px2rem(40)};
  font-weight: 700;
  font-size: ${px2rem(18)};
  border: 0;
  border-bottom: 1px solid ${theme.colors.border};
  outline: none;
`;

export const STextArea = styled.textarea`
  height: ${px2rem(100)};
  font-weight: 700;
  font-size: ${px2rem(18)};
  border: 0;
  border-bottom: 1px solid ${theme.colors.border};
  outline: none;
`;

export const SError = styled.span`
  margin-top: ${px2rem(10)};
  font-size: ${px2rem(13)};
  color: ${theme.colors.red};
`;

export default STextInput;
