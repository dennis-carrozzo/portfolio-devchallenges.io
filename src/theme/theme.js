import { Montserrat } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif']
// })

export const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
})

// Create a theme instance.
const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#4F4F4F'
    // },
    primary: {
      main: '#0d47a1'
    },
    secondary: {
      main: '#828282'
    },
    blue: {
      main: '#2F80ED'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: montserrat.style.fontFamily
  }
})

export default theme
