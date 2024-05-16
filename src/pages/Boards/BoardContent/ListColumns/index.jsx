import Box from '@mui/material/Box'

const ListColumns = ({ children }) => {
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
        {children}
      </Box>
    </Box>
  )
}

export default ListColumns
