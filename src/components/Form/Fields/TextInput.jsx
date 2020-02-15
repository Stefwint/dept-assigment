import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styling
import { Flex, FormLabel } from '../../styles';
import STextInput, { SError } from './styles';

const TextInput = ({ label, id, isRequired, errorMessage, width, ...props }) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  return (
    <Flex px={25} flexDirection="column" width={width}>
      {label && (
        <Flex alignItems="center">
          <FormLabel htmlFor={id}>{isRequired ? label + '*' : label}</FormLabel>
        </Flex>
      )}
      <STextInput
        id={id}
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={() => errorMessage && !touched && setTouched(true)}
        required={isRequired}
        {...props}
      />
      {errorMessage && touched && !value && <SError>{errorMessage.required}</SError>}
    </Flex>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  errorMessage: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

TextInput.defaultProps = {
  label: '',
  isRequired: false,
  errorMessage: {},
  width: [1, 1 / 2],
};

export default TextInput;
