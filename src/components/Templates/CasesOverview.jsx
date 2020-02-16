import React from 'react';
import { Container } from '../styles';
import FlexibleContent from '../FlexibleContent';
import Filters from '../Filters';

export default ({ layouts }) => (
  <Container noPadding>
    <Filters />
    <FlexibleContent layouts={layouts} />
  </Container>
);
