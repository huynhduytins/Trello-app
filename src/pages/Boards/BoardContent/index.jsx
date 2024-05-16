import ListColumns from './ListColumns'
import Column from './ListColumns/Column'
import ListCards from './ListColumns/Column/ListCards'

const BoardContent = () => {
  return (
    <ListColumns>
      <Column>
        <ListCards />
      </Column>
    </ListColumns>
  )
}

export default BoardContent
