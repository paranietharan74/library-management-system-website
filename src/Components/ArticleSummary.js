import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

export default function ArticleSummary(props) {
  return (
    <Card sx={{ maxWidth: '20%', margin: '10px', backgroundColor: '#e6e6e6' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.articleImage}
          alt="green iguana"
          style={{width: '100%', height: 'auto'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">{props.summary}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Read Article</Button>
      </CardActions>
    </Card>
  );
}