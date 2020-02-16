import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

// Inputs
import { TextInput, TextArea, Email } from './Fields';

// Styling
import { Box, Button, Flex } from '../styles';
import theme from '../../theme';

const Form = ({ fields, button, onSubmit }) => (
  <Box as="form" onSubmit={e => onSubmit(e)}>
    {fields && (
      <Flex flexWrap="wrap">
        {fields.map(field => {
          switch (field.type) {
            case 'text':
              return <TextInput key={uuid()} {...field} />;

            case 'textarea':
              return <TextArea key={uuid()} {...field} />;

            case 'email':
              return <Email key={uuid()} {...field} />;

            default:
              console.warn('missing layout for', field.type);
              return null;
          }
        })}
      </Flex>
    )}
    {button && (
      <Box ml={[0, 25]} mt={[15, 30]}>
        <Button type={button.type} bg={theme.colors.blue}>
          {button.text}
        </Button>
      </Box>
    )}
  </Box>
);

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  button: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
