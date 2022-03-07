import React from 'react'
import { Grid, Card, CardMedia, CardContent, CardActionArea, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const PodcastCard = ({podcast}) => {
  return (
    <Grid item xs={3}>
      <Link to={`/podcast/${podcast.id}`} style={{ textDecoration: "none" }}>
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia component="img" image={podcast.image} />
            <CardContent>
              <Typography variant="h6"
                component="div"
                // sx={{ textOverflow: "ellipsis" }}
              >
                {podcast.name}
              </Typography>
              <Typography
                variant="body1"
                component="div"
                // sx={{ textOverflow: "ellipsis" }}
              >
                {podcast.company}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}

export default PodcastCard