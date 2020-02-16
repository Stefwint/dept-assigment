import styled from 'styled-components';
import { rem } from 'polished';
import theme from '../../../theme';

const STextInput = styled.input`
  height: ${rem(40)};
  font-weight: 700;
  font-size: ${rem(18)};
  border: 0;
  border-bottom: 1px solid ${theme.colors.border};
  outline: none;
`;

export const STextArea = styled.textarea`
  height: ${rem(100)};
  font-weight: 700;
  font-size: ${rem(18)};
  border: 0;
  border-bottom: 1px solid ${theme.colors.border};
  outline: none;
`;

export const SError = styled.span`
  margin-top: ${rem(10)};
  font-size: ${rem(13)};
  color: ${theme.colors.red};
`;

export default STextInput;
