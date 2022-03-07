import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
// import EpisodeList from './EpisodeList';

const PodcastDetail = () => {
  const { podcastId } = useParams();
  const [podcast, setPodcast] = useState({});

  const url = "http://localhost:8080/api/v1"
  const getPodcastById = (id) => {
    axios.get(url + `/podcast/${id}`).then((res) => {
      setPodcast(res.data);
    }).catch((err) => {
      console.error(err);
    })
  }
  
  useEffect(() => {
    getPodcastById(podcastId);
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={4}>
        <img style={{ width: "100%" }} src={podcast.image} />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h2" component="h1">
          {podcast.name}
        </Typography>
        <Typography variant="h4" component="h2">
          {podcast.company}
        </Typography>
        <Typography variant="h6" component="h6">
          {podcast.website}
        </Typography>
        <Typography variant="body1">{podcast.description}</Typography>
        {/* <EpisodeList /> */}
      </Grid>
    </Grid>
  );
}

export default PodcastDetail