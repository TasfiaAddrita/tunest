import React from 'react'
import { ListItem, ListItemText, Grid } from "@mui/material";

const EpisodeListItem = ({ episode }) => {
  return (
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
  );
}

export default EpisodeListItem;