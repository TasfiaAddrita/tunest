import React, { useContext } from 'react'
import { ListItem, ListItemText, Grid, Button } from "@mui/material";
import { Context } from '../context';

const EpisodeListItem = ({ episode }) => {
  const { addPodcastEpisodeToAudioList } = useContext(Context);

  return (
    <>
    <ListItem>
      <Grid container>
        <Grid item xs={2} sx={{ bgcolor: "pink" }}>
          <ListItemText>{episode.title}</ListItemText>
        </Grid>
        <Grid item xs={10} sx={{ bgcolor: "green" }}>
          <ListItemText>{episode.description}</ListItemText>
        </Grid>
      </Grid>
    </ListItem>
    <Button variant="contained" onClick={() => addPodcastEpisodeToAudioList(episode)}>Play Episode</Button>
    </>
  );
}

export default EpisodeListItem;