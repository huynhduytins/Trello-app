import NoteAddIcon from '@mui/icons-material/NoteAdd'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import ListColumns from './ListColumns'
import Column from './ListColumns/Column'

const BoardContent = ({ board }) => {
  return (
    <ListColumns>
      {board.columns.map((column) => (
        <Column columnContent={column} key={column._id} />
      ))}
      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: '#ffffff3d'
        }}
      >
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
        >
          Add new column
        </Button>
      </Box>
    </ListColumns>
  )
}

export default BoardContent
