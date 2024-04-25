import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'
import { useState } from 'react'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import DesktopMacIcon from '@mui/icons-material/DesktopMac'

function ModeSelect() {
  const [mode, setMode] = useState('light')
  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <LightModeIcon />
          Light
        </MenuItem>
        <MenuItem value="dark">
          <DarkModeIcon />
          Dark
        </MenuItem>
        <MenuItem value="system">
          <DesktopMacIcon />
          System
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <Container
      sx={{
        height: '100vh'
      }}
      disableGutters
      maxWidth
    >
      <Box
        sx={{
          backgroundColor: 'primary.light',
          width: '100%',
          height: (theme) => theme.custom.appBarHeight,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ModeSelect />
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          width: '100%',
          height: (theme) => theme.custom.boardBarHeight,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Board Bar
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          height: (theme) =>
            `calc(100vh - ${theme.custom.appBarHeight} + ${theme.custom.boardBarHeight})`
        }}
      >
        Board Content
      </Box>
    </Container>
  )
}

export default App
