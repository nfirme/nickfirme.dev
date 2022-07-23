import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Section from './section'

export default function About() {
  return (
    <Section headingTitle="About me">
      <Flex
        flexDirection="row-reverse"
        justify="space-between"
        align="center"
        gap={8}
      >
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <Box>
          <Image src="/me.jpg" alt="" borderRadius="full" width="400px" />
          <Image src="/dots.svg" alt="" width="300px" zIndex={3} position="relative" top={0} left={0} />
        </Box>
      </Flex>
    </Section>
  );
}
