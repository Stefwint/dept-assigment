import React from 'react';
import PropTypes from 'prop-types';

// Styling
import { Flex, FormLabel } from '../../styles';
import STextInput, { SError } from './styles';

const Email = React.forwardRef(({ label, name, isRequired, width, errors, ...props }, ref) => (
  <Flex mb={[15, 30]} mt={[15, 0]} px={[0, 25]} flexDirection="column" width={width}>
    {label && <FormLabel htmlFor={name}>{isRequired ? label + '*' : label}</FormLabel>}
    <STextInput name={name} ref={ref} {...props} />
    {errors?.[name]?.message && <SError>{errors?.[name]?.message}</SError>}
  </Flex>
));

Email.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

Email.defaultProps = {
  label: '',
  isRequired: false,
  width: [1, 1 / 2],
  errors: false,
};

export default Email;
