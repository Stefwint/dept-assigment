import React from 'react';
import PropTypes from 'prop-types';

// Styling
import { Flex, FormLabel } from '../../styles';
import { STextArea, SError } from './styles';

const TextArea = React.forwardRef(({ label, name, isRequired, width, errors, ...props }, ref) => (
  <Flex my={[15, 30]} px={[0, 25]} flexDirection="column" width={width}>
    {label && <FormLabel htmlFor={name}>{isRequired ? label + '*' : label}</FormLabel>}
    <STextArea name={name} ref={ref} {...props} />
    {errors?.[name]?.message && <SError>{errors?.[name]?.message}</SError>}
  </Flex>
));

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

TextArea.defaultProps = {
  label: '',
  isRequired: false,
  width: [1, 1 / 2],
  errors: false,
};

export default TextArea;
