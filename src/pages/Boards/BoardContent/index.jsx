import { Box } from '@mui/material'

const COLUMN_HEADER_HEIHGT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const BoardContent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        height: (theme) =>
          `calc(100vh - ${theme.custom.appBarHeight} - ${theme.custom.boardBarHeight})`
      }}
    >
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          ml: 2,
          borderRadius: '6px'
        }}
      >
        <Box sx={{}}>Header</Box>
        <Box sx={{}}>List Card</Box>
        <Box sx={{}}>Footer</Box>
      </Box>
    </Box>
  )
}

export default BoardContent
