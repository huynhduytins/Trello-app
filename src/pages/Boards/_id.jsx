import Container from '@mui/material/Container'

import { mockData } from '~/apis/mock-data'
import AppBar from '~/components/AppBar'

import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

const Board = () => {
  return (
    <Container
      sx={{
        height: '100vh'
      }}
      disableGutters
      maxWidth={false}
    >
      <AppBar />
      <BoardBar board={mockData.board} />
      <BoardContent board={mockData.board} />
    </Container>
  )
}

export default Board
