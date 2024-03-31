// ArticleSummary.js
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

function ArticleSummary({ article }) {
  return (
    <Card sx={{ maxWidth: '100%', margin: '10px', backgroundColor: '#e6e6e6' }}>
      <Link to={`/article/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={article.articleImage}
            alt="Article Image"
            style={{ width: '100%', height: 'auto' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.contents.title} {/* Access the title from article.contents */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.contents.paragraphs[0]} {/* Display the first paragraph as summary */}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" component={Link} to={`/article/${article.id}`} style={{ textDecoration: 'none' }}>
          Read Article
        </Button>
      </CardActions>
    </Card>
  );
}

export default ArticleSummary;
