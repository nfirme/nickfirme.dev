import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const colors = {
  secondary: {
    50: '#FDF5E8',
    100: '#F8E4BE',
    200: '#F4D394',
    300: '#F0C26B',
    400: '#ECB141',
    500: '#E8A017',
    600: '#B98013',
    700: '#8B600E',
    800: '#5D4009',
    900: '#2E2005',
  },
  primary: {
    50: '#FAEBF2',
    100: '#F0C7DA',
    200: '#E6A3C3',
    300: '#DC7EAB',
    400: '#D35A94',
    500: '#C9367C',
    600: '#A12B63',
    700: '#79204B',
    800: '#501632',
    900: '#280B19',
  },
  navy: {
    50: '#EFF1F6',
    100: '#D1D8E5',
    200: '#B4BED5',
    300: '#97A5C4',
    400: '#798CB4',
    500: '#5C73A3',
    600: '#495C83',
    700: '#374562',
    800: '#252E41',
    900: '#121721',
  },
};

const fonts = {
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const theme = extendTheme({ config, colors, fonts });

export default theme;
