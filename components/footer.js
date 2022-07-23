import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as="footer" display="flex" flexDir="column" justify="center" align="center" padding={4}>
      <Text>Designed & developed by Nick Firme.</Text>
      <Text>Built with Next.js and Chakra UI. Deployed with Vercel.</Text>
    </Box>
  );
}
