import AttachmentIcon from '@mui/icons-material/Attachment'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import PeopleIcon from '@mui/icons-material/People'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

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
  if (isOpen) {
    return (
      <Box
        sx={{
          '& .MuiPaper-root': {
            overflow: 'hidden'
          }
        }}
      >
        <Card sx={{ height: `${100}px`, transition: 'height 2s' }}>
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
            <Button
              size="small"
              color="primary"
              startIcon={<ModeCommentIcon />}
            >
              {comments}
            </Button>
            <Button size="small" color="primary" startIcon={<AttachmentIcon />}>
              {attachments}
            </Button>
          </CardActions>
        </Card>
      </Box>
    )
  }

  return (
    <Card onClick={() => handleClickCard(idx)}>
      <CardActionArea>
        <CardContent sx={{ p: 1.5 }}>
          <Typography>Lizard</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardContainer
