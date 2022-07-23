import React, { useState } from 'react';
import {
  Box,
  Stack,
  Flex,
  Text,
  Link,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const NavLink = ({ href, index, children }) => (
  <NextLink passHref href={href}>
    <Link
      fontFamily="mono"
      _before={{ content: `"0${index}."`, color: 'primary.400', mr: 1 }}
      _hover={{ color: 'primary.400' }}
    >
      {children}
    </Link>
  </NextLink>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery('(min-width: 768px)');

  const Logo = () => (
    <NextLink href="/" passHref>
      <Text
        cursor="pointer"
        bgGradient="linear(to-tr, primary.500, secondary.300)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="extrabold"
        letterSpacing={-2}
      >
        NF
      </Text>
    </NextLink>
  );

  const MenuToggle = () => (
    <IconButton
      variant="outline"
      onClick={onOpen}
      display={{ base: 'flex', md: 'none' }}
    >
      <HamburgerIcon />
    </IconButton>
  );

  const Links = () => (
    <Stack direction={{ base: 'column', md: 'row' }} spacing="24px">
      <NavLink index={1} href="/about">
        About
      </NavLink>
      <NavLink index={2} href="/projects">
        Projects
      </NavLink>
      <NavLink index={3} href="/contact">
        Contact
      </NavLink>
      <IconButton variant="ghost" icon={<SunIcon />} />
    </Stack>
  );

  const NavbarDrawer = () => (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent backgroundColor="secondary">
        <DrawerCloseButton />
        <DrawerBody>
          <Links />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <>
      <Flex
        width="full"
        px={16}
        py={4}
        position="fixed"
        justify="space-between"
        align="center"
      >
        <Logo />
        <Box>
          {isDesktop ? <Links /> : <MenuToggle />}
        </Box>
      </Flex>
      <NavbarDrawer />
    </>
  );
}
