import React from 'react';
import PropTypes from 'prop-types';

// Components
import Form from '../../Form';

// Styling
import { Box, Column, Flex, Row, Text } from '../../styles';

const Contact = ({ title, form }) => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Row px={[0, 20, 0]} pr={[40, 0]}>
      <Flex py={[40, 80]} flexWrap="wrap">
        <Box width={[1, 3 / 12]} pl={[30, 0]} mb={[20, 0]}>
          <Text as="h2" fontSize={[30, 60]} fontWeight={400}>
            {title}
          </Text>
        </Box>
        {form && (
          <Column width={[1, 7 / 12]} offset={1 / 12}>
            <Form {...form} onSubmit={onSubmit} />
          </Column>
        )}
      </Flex>
    </Row>
  );
};

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  form: PropTypes.object,
};

Contact.defaultProps = {
  form: {},
};

export default Contact;
