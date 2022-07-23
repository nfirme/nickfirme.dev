import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

export default function Hero() {
  const { colorMode } = useColorMode();
  const buttonColor = useColorModeValue('primary', 'secondary');

  return (
    <Flex
      width="100%"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      spacing={10}
    >
      {/* <Heading
        as="h1"
        fontSize="2xl"
        fontWeight="light"
        fontFamily="mono"
        textAlign="center"
        letterSpacing={-1}
      >
        Hi 👋 my name is
      </Heading> */}
      <Heading
        as="h2"
        bgGradient={`linear(${
          colorMode === 'light' ? 'to-l' : 'to-r'
        }, primary.400, secondary.300)`}
        bgClip="text"
        fontSize="6xl"
        textAlign="center"
        letterSpacing={-2}
      >
        Hi, I&apos;m Nick.
      </Heading>
      <Heading as="h3" fontSize="5xl" letterSpacing={-2}>
        I&apos;m a software engineer.
      </Heading>

      <Text maxWidth="400px" textAlign="center" my={6}>
        I&apos;m a full-stack developer with a passion for modern web
        development and creative coding.
      </Text>
      <Button variant="outline" colorScheme={buttonColor}>
        Check out my resume!
      </Button>
    </Flex>
  );
}
