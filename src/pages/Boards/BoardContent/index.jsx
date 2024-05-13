import { Box } from '@mui/material'

const BoardContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        height: (theme) =>
          `calc(100vh - ${theme.custom.appBarHeight} - ${theme.custom.boardBarHeight})`
      }}
    >
      Board Content
    </Box>
  )
}

export default BoardContent
