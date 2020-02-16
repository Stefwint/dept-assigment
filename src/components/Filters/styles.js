import styled from 'styled-components';
import { rem } from 'polished';
import theme from '../../theme';

const SSelect = {
  control: () => ({
    display: 'flex',
    width: '100%',
    background: 0,
    border: `1px solid ${theme.colors.mediumGrey}`,
    fontSize: rem(13),
    cursor: 'pointer',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: () => ({
    '> div': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: theme.colors.black,
    transition: 'transform 0.2s ease',
    transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0)',
  }),
  menu: provided => ({
    ...provided,
    top: 35,
    borderRadius: 0,
  }),
  menuList: provided => ({
    ...provided,
    padding: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    color: theme.colors.black,
    cursor: 'pointer',
    backgroundColor: state.getValue('label')[0]
      ? state.getValue('label')[0].label === state.children
        ? theme.colors.hoverGrey
        : theme.colors.white
      : theme.colors.white,
    ':active': {
      backgroundColor: theme.colors.inputGrey,
    },
    ':hover': {
      backgroundColor: theme.colors.inputGrey,
    },
  }),
  placeholder: () => ({
    position: 'relative',
  }),
  singleValue: () => ({
    position: 'relative',
    fontFamily: theme.fonts.heading,
    fontSize: 30,
    borderBottom: '2px solid',
  }),
};

export const ArrowDown = styled.div`
  margin-top: 6px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 7px solid ${theme.colors.black};
`;

export default SSelect;
