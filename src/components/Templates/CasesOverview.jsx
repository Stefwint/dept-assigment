import React from 'react';
import { Container } from '../styles';
import FlexibleContent from '../FlexibleContent';

export default ({ layouts }) => (
  <Container noPadding>
    <FlexibleContent layouts={layouts} />
  </Container>
);
