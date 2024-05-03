import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Experimental_CssVarsProvider as CssVarProvider } from '@mui/material/styles'
import theme from './theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarProvider theme={theme}>
      <CssBaseline />
      <App />
    </CssVarProvider>
  </React.StrictMode>
)
