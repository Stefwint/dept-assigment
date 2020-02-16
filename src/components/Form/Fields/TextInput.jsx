import React from 'react';
import PropTypes from 'prop-types';

// Styling
import { Flex, FormLabel } from '../../styles';
import STextInput, { SError } from './styles';

const TextInput = React.forwardRef(({ label, name, isRequired, width, errors, ...props }, ref) => (
  <Flex mb={[15, 30]} mt={[15, 0]} px={[0, 25]} flexDirection="column" width={width}>
    {label && <FormLabel htmlFor={name}>{isRequired ? label + '*' : label}</FormLabel>}
    <STextInput name={name} ref={ref} {...props} />
    {errors?.[name]?.message && <SError>{errors?.[name]?.message}</SError>}
  </Flex>
));

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

TextInput.defaultProps = {
  label: '',
  isRequired: false,
  width: [1, 1 / 2],
  errors: false,
};

export default TextInput;
