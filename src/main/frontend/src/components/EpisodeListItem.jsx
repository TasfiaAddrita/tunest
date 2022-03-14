import React, { useContext } from 'react'
import parse from "html-react-parser";
import { ListItem, ListItemText, Grid, Button, Typography, Paper } from "@mui/material";
import { Context } from '../context';

const EpisodeListItem = ({ podcast, episode }) => {
  const { addPodcastEpisodeToAudioList } = useContext(Context);

  return (
    <>
      <ListItem>
        <Grid container>
          <Grid item xs={2} sx={{ bgcolor: "pink" }}>
            <img style={{ width: "100%" }} src={podcast.image} />
          </Grid>
          <Grid item xs={10} sx={{ bgcolor: "green" }}>
            <ListItemText>{episode.title}</ListItemText>
            {/* <Typography variant="p">{episode.title}</Typography> */}
            <ListItemText>
              {parse(episode.description)}
            </ListItemText>
            {/* <Typography variant="p">{parse(episode.description)}</Typography> */}
          </Grid>
        </Grid>
      </ListItem>
      <Button
        variant="contained"
        onClick={() => addPodcastEpisodeToAudioList(episode)}
      >
        Play Episode
      </Button>
    </>
  );
}

export default EpisodeListItem;