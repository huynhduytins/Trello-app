import AttachmentIcon from '@mui/icons-material/Attachment'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import PeopleIcon from '@mui/icons-material/People'
import { Box, Collapse } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { keyframes } from '@mui/system'

const spin = keyframes`
  0% {
    height: 500px
  }
  100% {
    height: 0
  }
`

const CardContainer = ({
  title,
  img,
  contributors,
  comments,
  attachments,
  isOpen,
  handleClickCard,
  idx
}) => {
  return isOpen ? (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt="" />
        <CardContent sx={{ p: 1.5 }}>
          <Typography>{title}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" startIcon={<PeopleIcon />}>
          {contributors}
        </Button>
        <Button size="small" color="primary" startIcon={<ModeCommentIcon />}>
          {comments}
        </Button>
        <Button size="small" color="primary" startIcon={<AttachmentIcon />}>
          {attachments}
        </Button>
      </CardActions>
    </Card>
  ) : (
    <Box>
      <Card onClick={() => handleClickCard(idx)}>
        <CardActionArea>
          <CardContent sx={{ p: 1.5 }}>
            <Typography>Lizard</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}

export default CardContainer
