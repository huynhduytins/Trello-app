import Box from '@mui/material/Box'
import { useState } from 'react'

import data from '../../../mockdata'
import CardContainer from './CardContainer'

const ListCards = () => {
  const [openedCard, setOpenedCard] = useState(0)

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
      {data.map((el, idx) => (
        <CardContainer
          attachments={el.attachments}
          comments={el.comments}
          contributors={el.contributors}
          img={el.img}
          isOpen={openedCard === idx}
          title={el.title}
          key={idx}
          handleClickCard={handleClickCard}
          idx={idx}
        />
      ))}
    </Box>
  )
}

export default ListCards
