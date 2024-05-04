import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  custom: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {},
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#bdc3d7'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '0.875rem'
        })
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 34,
          height: 34
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {},
          '& fieldset': {
            borderWidth: '1px !important'
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {}
          }
        })
      }
    }
  }
})

export default theme
