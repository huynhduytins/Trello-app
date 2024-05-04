import { Avatar, AvatarGroup, Box, Chip } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
  color: 'primary.main',
  backgroundColor: 'white',
  border: 'none',
  paddingX: '5px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}
const BoardBar = () => {
  return (
    <Box
      sx={{
        // backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.custom.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingY: 2,
        paddingX: 1,
        overflowX: 'auto',
        overflowY: 'hidden',
        borderTop: '1px solid #00bfa5'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="Dashboard"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={{ ...MENU_STYLE, border: '1px solid', borderRadius: '5px' }}
          icon={<PersonAddIcon />}
          label="Invite"
          clickable
        />
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
