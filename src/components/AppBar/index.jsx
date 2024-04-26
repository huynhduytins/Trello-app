import { Box } from '@mui/material'
import ModeSelect from '~/components/ModeSelect'

import AppsIcon from '@mui/icons-material/Apps'

const AppBar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.custom.appBarHeight,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <AppsIcon />
        Trello
      </Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar
