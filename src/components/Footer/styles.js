import styled from 'styled-components';
import { rem } from 'polished';
import { Container, Flex } from '../styles';
import theme from '../../theme';

const SFooter = styled(Container)`
  display: flex;
  align-items: center;

  hr {
    display: inline-block;
    width: 100%;
    margin: ${rem(30)} 0;
    border: 0;
    border-bottom: 2px solid ${theme.colors.mediumGray};
  }
`;

export const SFooterMenu = styled(Flex)`
  padding: 0;

  li {
    list-style: none;

    a {
      text-transform: uppercase;
      color: ${theme.colors.white};
      font-family: ${theme.fonts.heading};
      text-decoration: none;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

export default SFooter;
