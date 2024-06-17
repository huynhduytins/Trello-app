import Box from '@mui/material/Box'
import { useState } from 'react'

import CardContainer from './CardContainer'

const ListCards = ({ cards }) => {
  const [openedCard, setOpenedCard] = useState(cards[0]._id)

  const handleClickCard = (idx) => {
    setOpenedCard(idx)
  }

  return (
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
          `calc(${theme.custom.boardContentHeight} - ${theme.spacing(5)} - ${
            theme.custom.columnHeaderHeight
          } - ${theme.custom.columnFooterHeight})`,
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
      {cards.map((card) => (
        <CardContainer
          attachments={card.attachments}
          comments={card.comments}
          contributors={card.memberIds}
          img={card.cover}
          isOpen={openedCard === card._id}
          title={card.title}
          key={card._id}
          handleClickCard={handleClickCard}
          idx={card._id}
        />
      ))}
    </Box>
  )
}

export default ListCards
