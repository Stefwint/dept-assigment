import React from 'react';
import Select, { components } from 'react-select';

// Styling
import { Flex, Text, Row } from '../styles';
import SSelect, { ArrowDown } from './styles';
import theme from '../../theme';

const Filters = () => {
  const options = [
    { value: 'all', label: 'all work' },
    { value: 'technology', label: 'technology' },
    { value: 'design', label: 'design' },
    { value: 'media', label: 'media' },
  ];

  const industryOptions = [
    { value: 'all', label: 'all industries' },
    { value: 'b2b', label: 'b2b' },
    { value: 'health', label: 'health' },
    { value: 'travel', label: 'travel' },
  ];

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <ArrowDown />
      </components.DropdownIndicator>
    );
  };

  return (
    <Row px={20} pt={30} pb={10}>
      <Flex flexDirection={['column', 'row']} justifyContent={['flex-start', 'flex-end']}>
        <Flex alignItems="center">
          <Text
            as="label"
            mr="5px"
            fontSize={[24, 30]}
            fontFamily={theme.fonts.heading}
            color={theme.colors.menuGray}
          >
            Show me
          </Text>
          <Select
            instanceId="work"
            options={options}
            defaultValue={{ value: 'all', label: 'all work' }}
            isSearchable={false}
            styles={SSelect}
            components={{ DropdownIndicator }}
          />
        </Flex>
        <Flex mt={[10, 0]} ml={[0, 20]} alignItems="center">
          <Text
            as="label"
            mr="5px"
            fontSize={[24, 30]}
            fontFamily={theme.fonts.heading}
            color={theme.colors.menuGray}
          >
            in
          </Text>
          <Select
            instanceId="industries"
            options={industryOptions}
            defaultValue={{ value: 'all', label: 'all industries' }}
            isSearchable={false}
            styles={SSelect}
            components={{ DropdownIndicator }}
          />
        </Flex>
      </Flex>
    </Row>
  );
};

export default Filters;
