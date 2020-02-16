import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Utils
import { isEmail } from '../../../utils';

// Styling
import { Flex, FormLabel } from '../../styles';
import STextInput, { SError } from './styles';

const Email = ({ label, id, isRequired, errorMessage, width, ...props }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState(false);

  return (
    <Flex mb={[15, 30]} mt={[15, 0]} px={[0, 25]} flexDirection="column" width={width}>
      {label && (
        <Flex alignItems="center">
          <FormLabel htmlFor={id}>{isRequired ? label + '*' : label}</FormLabel>
        </Flex>
      )}
      <STextInput
        id={id}
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={() => {
          errorMessage && !touched && setTouched(true);
          setIsValid(isEmail(value));
        }}
        required={isRequired}
        {...props}
      />
      {errorMessage && touched && !value && <SError>{errorMessage.required}</SError>}
      {errorMessage && touched && value && !isValid && <SError>{errorMessage.email}</SError>}
    </Flex>
  );
};

Email.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  errorMessage: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

Email.defaultProps = {
  label: '',
  isRequired: false,
  errorMessage: {},
  width: [1, 1 / 2],
};

export default Email;
