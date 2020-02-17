import React from 'react';

// Utils
import { useApp } from '../../../contexts/AppProvider';

// Styling
import { Box, Text } from '../../styles';
import { SCountries } from './styles';
import theme from '../../../theme';

const Countries = () => {
  const { countries } = useApp();

  return (
    <SCountries px={20} className="show-for-small">
      <Box py={20} pr={10} bg={theme.colors.black}>
        <Text as="span" color={theme.colors.gray} fontSize={12}>
          Landen
        </Text>
        {countries && (
          <Box as="ul">
            {countries.map(country => (
              <Text key={country.slug} as="li">
                <Text
                  as="a"
                  href="#"
                  color={theme.colors.white}
                  fontSize={12}
                  className={country.isActive && 'active'}
                >
                  {country.title}
                </Text>
              </Text>
            ))}
          </Box>
        )}
      </Box>
    </SCountries>
  );
};

export default Countries;
