import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Utils
import { post } from '../../../api/callers';

// Components
import Form from '../../Form';

// Styling
import { Box, Flex, Row, Text } from '../../styles';

const Contact = ({ title, form }) => {
  const [success, setSuccess] = useState(false);

  const onSubmit = values => {
    post('form/', { values }).then(resp => setSuccess(resp?.message));
  };

  return (
    <Row px={[20, 20, 20]} pr={[40, 0]}>
      <Flex py={[40, 80]} flexWrap="wrap">
        <Box width={[1, 1, 3 / 12]} mb={[20, 40, 0]}>
          <Text as="h2" fontSize={[30, 60]} fontWeight={400}>
            {title}
          </Text>
        </Box>
        {form && (
          <Box width={[1, 1, 7 / 12]} ml="10%">
            {!success ? <Form {...form} onSubmit={onSubmit} /> : <Text as="p">{success}</Text>}
          </Box>
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
