import React, { useContext } from 'react';
import { Context } from "../context";
import { Grid } from "@mui/material";
import PodcastCard from './PodcastCard';

const PodcastGrid = () => {
const { podcasts } = useContext(Context);
  return (
    <Grid container>
      {podcasts.map((podcast) => (
        <PodcastCard podcast={podcast} key={podcast.id} />
      ))}
    </Grid>
  );
}

export default PodcastGrid;