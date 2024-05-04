import AppsIcon from '@mui/icons-material/Apps'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import {
  Badge,
  Box,
  Button,
  SvgIcon,
  TextField,
  Tooltip,
  Typography
} from '@mui/material'

import Profile from './Menus/Profile'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Template from './Menus/Template'
import WorkSpace from './Menus/WorkSpace'
import TrelloLogo from '~/assets/trello.svg?react'
import ModeSelect from '~/components/ModeSelect'

const AppBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.custom.appBarHeight,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        overflowX: 'auto',
        overflowY: 'hidden'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          <SvgIcon
            component={TrelloLogo}
            inheritViewBox
            fontSize="small"
            sx={{ color: 'primary.main' }}
          />
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'primary.main'
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <WorkSpace />
          <Recent />
          <Starred />
          <Template />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <TextField
          id="outlined-search"
          label="Search..."
          type="search"
          size="small"
          sx={{ minWidth: '120px' }}
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge badgeContent={0} color="primary" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <Badge badgeContent={0} color="primary" sx={{ cursor: 'pointer' }}>
            <HelpOutlineIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar
