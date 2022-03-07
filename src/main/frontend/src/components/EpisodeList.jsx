import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { List, ListSubheader, ListItem, ListItemText, Grid } from "@mui/material";
import EpisodeListItem from './EpisodeListItem';

const EpisodeList = ({ podcastId }) => {

  const [episodes, setEpisodes] = useState([]);

  const url = "http://localhost:8080/api/v1"
  const getEpisodesByPodcastId = (podcastId) => {
    axios.get(url + `/podcast/${podcastId}/episodes`).then((res) => {
      setEpisodes(res.data);
    }).catch((err) => {
      console.error(err);
    })
  }

  useEffect(() => {
    getEpisodesByPodcastId(podcastId);
  }, [episodes])
  
  return (
    <List>
      <ListSubheader sx={{ width: "100%", bgcolor: "red" }}>
        Episodes
      </ListSubheader>
      {episodes.map((episode) => (
        <EpisodeListItem episode={episode} />
      ))}
    </List>
  );
}

export default EpisodeList;