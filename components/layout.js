import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <Container maxW="1024px" centerContent px="1em">
      <Navbar />
      <main>{children}</main>
    </Container>
  );
}
