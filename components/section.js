import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

export default function Section({ headingTitle, sectionProps, headingProps, children }) {
  return (
    <Box as="section" mb={12} {...sectionProps}>
      <Heading {...headingProps}>{headingTitle}</Heading>
      {children}
    </Box>
  );
}
