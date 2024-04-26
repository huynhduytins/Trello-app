import { AppBar, Box, Container } from '@mui/material'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

const Board = () => {
  return (
    <Container
      sx={{
        height: '100vh'
      }}
      disableGutters
      maxWidth
    >
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board
