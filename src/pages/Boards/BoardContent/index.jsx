import AddCardIcon from '@mui/icons-material/AddCard'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import PeopleIcon from '@mui/icons-material/People'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

const COLUMN_HEADER_HEIHGT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const BoardContent = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{
        width: '100%',
        p: '8px 16px',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        height: (theme) => theme.custom.boardContentHeight
      }}
    >
      <Box
        sx={{
          height: '100%',
          overflowX: 'auto',
          overflowY: 'hidden',
          display: 'flex',
          gap: 2
        }}
      >
        <Box
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            height: 'fit-content',
            maxHeight: (theme) =>
              `calc(${theme.custom.boardContentHeight} - ${theme.spacing(5)})`,
            bgcolor: (theme) =>
              theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
            borderRadius: '6px'
          }}
        >
          <Box
            sx={{
              height: COLUMN_HEADER_HEIHGT,
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', cursor: 'pointer' }}
            >
              Column Title
            </Typography>
            <Box>
              <Tooltip title="More options">
                <IconButton
                  sx={{ color: 'text.primary', cursor: 'pointer' }}
                  id="basic-column-dropdown"
                  aria-controls={
                    open ? 'basic-menu-column-dropdown' : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
              <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-column-dropdown'
                }}
              >
                <MenuList>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add new card</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                      ⌘X
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                      ⌘C
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Paste</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                      ⌘V
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Save this column</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <DeleteForeverIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Remove this column</ListItemText>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
          <Box
            sx={{
              p: '1px 5px',
              m: '0 5px',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              overflowX: 'hidden',
              overflowY: 'auto',
              maxHeight: (theme) =>
                `calc(${theme.custom.boardContentHeight} - ${theme.spacing(
                  5
                )} - ${COLUMN_FOOTER_HEIGHT} - ${COLUMN_HEADER_HEIHGT})`,
              '& .MuiPaper-root': {
                overflow: 'unset'
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ced0da'
              },
              '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#bfc2cf'
              }
            }}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
                  alt="cat"
                />
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Cat</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" startIcon={<PeopleIcon />}>
                  20
                </Button>
                <Button
                  size="small"
                  color="primary"
                  startIcon={<ModeCommentIcon />}
                >
                  15
                </Button>
                <Button
                  size="small"
                  color="primary"
                  startIcon={<AttachmentIcon />}
                >
                  10
                </Button>
              </CardActions>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Button startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title="Drag to move">
              <IconButton>
                <DragHandleIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Box
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            height: 'fit-content',
            maxHeight: (theme) =>
              `calc(${theme.custom.boardContentHeight} - ${theme.spacing(5)})`,
            bgcolor: (theme) =>
              theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
            borderRadius: '6px'
          }}
        >
          <Box
            sx={{
              height: COLUMN_HEADER_HEIHGT,
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', cursor: 'pointer' }}
            >
              Column Title
            </Typography>
            <Box>
              <Tooltip title="More options">
                <IconButton
                  sx={{ color: 'text.primary', cursor: 'pointer' }}
                  id="basic-column-dropdown"
                  aria-controls={
                    open ? 'basic-menu-column-dropdown' : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
              <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-column-dropdown'
                }}
              >
                <MenuList>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add new card</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                      ⌘X
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                      ⌘C
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Paste</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                      ⌘V
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Save this column</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <DeleteForeverIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Remove this column</ListItemText>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
          <Box
            sx={{
              p: '1px 5px',
              m: '0 5px',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              overflowX: 'hidden',
              overflowY: 'auto',
              maxHeight: (theme) =>
                `calc(${theme.custom.boardContentHeight} - ${theme.spacing(
                  5
                )} - ${COLUMN_FOOTER_HEIGHT} - ${COLUMN_HEADER_HEIHGT})`,
              '& .MuiPaper-root': {
                overflow: 'unset'
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ced0da'
              },
              '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#bfc2cf'
              }
            }}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
                  alt="cat"
                />
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Cat</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" startIcon={<PeopleIcon />}>
                  20
                </Button>
                <Button
                  size="small"
                  color="primary"
                  startIcon={<ModeCommentIcon />}
                >
                  15
                </Button>
                <Button
                  size="small"
                  color="primary"
                  startIcon={<AttachmentIcon />}
                >
                  10
                </Button>
              </CardActions>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography>Lizard</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Button startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title="Drag to move">
              <IconButton>
                <DragHandleIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent
