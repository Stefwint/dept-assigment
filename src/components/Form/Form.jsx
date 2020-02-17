import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

// Inputs
import { TextInput, TextArea, Email } from './Fields';

// Styling
import { Box, Button, Flex } from '../styles';
import theme from '../../theme';

const Form = ({ fields, button, onSubmit }) => {
  const { handleSubmit, register, errors } = useForm();

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      {fields && (
        <Flex flexWrap="wrap">
          {fields.map(field => {
            switch (field.type) {
              case 'text':
                return (
                  <TextInput
                    key={field.name}
                    ref={register({ required: field.isRequired && field.errorMessage?.required })}
                    errors={errors}
                    {...field}
                  />
                );

              case 'textarea':
                return (
                  <TextArea
                    key={field.name}
                    ref={register({ required: field.isRequired && field.errorMessage?.required })}
                    errors={errors}
                    {...field}
                  />
                );

              case 'email':
                return (
                  <Email
                    key={field.name}
                    ref={register({
                      required: field.isRequired && field.errorMessage?.required,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: field.errorMessage?.email,
                      },
                    })}
                    errors={errors}
                    {...field}
                  />
                );

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
};

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  button: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
