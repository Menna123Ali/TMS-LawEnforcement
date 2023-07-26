import { createTheme } from '@mui/material'
import palette from './colors.scss'

export const theme = createTheme({
  palette: {
    primary: {
      main: palette.primary,
    },
    secondary: {
      main: palette.orange,
    },
    pageBackground: {
      main: palette.pageBackground,
    },
    textMuted: {
      main: palette.textMuted,
    },
  },
})
