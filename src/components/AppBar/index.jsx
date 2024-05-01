import { Box, SvgIcon } from '@mui/material'
import ModeSelect from '~/components/ModeSelect'

import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloLogo } from './../../assets/trello.svg'

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
        <AppsIcon sx={{ color: 'primary.main' }} />
        <SvgIcon component={TrelloLogo} inheritViewBox />
      </Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar
