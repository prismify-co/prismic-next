import { extendTheme } from '@chakra-ui/core'

const theme = extendTheme({
  colors: {
    blue: {
      50: '#d8fbff',
      100: '#abeaff',
      200: '#7bdbff',
      300: '#48cbff',
      400: '#1abcff',
      500: '#0093D0',
      600: '#007eb4',
      700: '#005a82',
      800: '#003751',
      900: '#001421',
    },
  },
  fonts: {
    body: `'Source Sans Pro', system-ui, sans-serif`,
    heading: `'Source Sans Pro', system-ui, sans-serif`,
  },
  styles: {
    global: {
      body: {
        lineHeight: '140%',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
        letterSpacing: '-0.02em',
        pb: '1rem',
      },
      variants: {
        h1: {
          fontSize: ['40px', null, null, '64px'],
        },
        h2: {
          fontSize: ['24px', null, null, '40px'],
        },
        h3: {
          fontSize: ['18px', null, null, '24px'],
        },
        subtitle: {
          fontWeight: '400',
          fontSize: ['18px', null, null, '24px'],
          letterSpacing: 'normal',
        },
      },
    },
    Text: {
      variants: {
        small: {
          fontSize: ['12px', null, null, '14px'],
        },
        'pre-title': {
          fontWeight: 'bold',
          textTransform: 'uppercase',
          fontSize: ['8px', null, null, '10px'],
          letterSpacing: '0.03em',
        },
      },
      button: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: ['14px', null, null, '16px'],
        letterSpacing: '0.03em',
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: ['14px', null, null, '16px'],
        letterSpacing: '0.03em',
        borderRadius: '0',
      },
    },
  },
})

export default theme
