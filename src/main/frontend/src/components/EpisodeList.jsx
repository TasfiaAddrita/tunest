import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { IconButton, List, ListSubheader, Button, Menu, MenuItem, ListItemIcon, Paper } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import EpisodeListItem from './EpisodeListItem';


const EpisodeList = ({ podcast, podcastId }) => {

  const [episodes, setEpisodes] = useState([]);

  const url = "http://localhost:8080/api/v1"

  const getEpisodesByPodcastId = (podcastId) => {
    axios.get(url + `/podcast/${podcastId}/episodes`).then((res) => {
      setEpisodes(res.data.slice(0,20));
    }).catch((err) => {
      console.error(err);
    })
  }

  const handleClick = (sortType) => {
    switch (sortType) {
      case "titleasc":
        setEpisodes([].concat(episodes).sort((a, b) => (b.title < a.title ? 1 : -1)));
        break;
      case "titledesc":
        setEpisodes([].concat(episodes).sort((a, b) => (a.title < b.title ? 1 : -1)));
        break;
      case "dateasc":
          setEpisodes([].concat(episodes).sort((a, b) => (b.releaseDate < a.releaseDate ? 1 : -1)))
        break;
      case "datedesc":
        setEpisodes([].concat(episodes).sort((a, b) => (a.releaseDate < b.releaseDate ? 1 : -1)))
        break;
      default:
    }
  };

  useEffect(() => {
    getEpisodesByPodcastId(podcastId);
  }, [])
  
  return (
    <List>
      <ListSubheader sx={{ width: "100%", bgcolor: "red" }}>
        Episodes
      </ListSubheader>

      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <>
            <Button variant="contained" {...bindTrigger(popupState)}>
              Sort
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem
                onClick={(e) => handleClick("titleasc")}
              >
                <ListItemIcon>
                  <ArrowUpward />
                </ListItemIcon>
                Title (A - Z)
              </MenuItem>

              <MenuItem
                onClick={(e) => handleClick("titledesc")}
              >
                <ListItemIcon>
                  <ArrowDownward />
                </ListItemIcon>
                Title (Z - A)
              </MenuItem>

              <MenuItem
                onClick={(e) => handleClick("dateasc")}
              >
                <ListItemIcon>
                  <ArrowUpward />
                </ListItemIcon>
                Date (Oldest to Newest)
              </MenuItem>

              <MenuItem
                onClick={(e) => handleClick("datedesc")}
              >
                <ListItemIcon>
                  <ArrowDownward />
                </ListItemIcon>
                Date (Newest to Oldest)
              </MenuItem>
            </Menu>
          </>
        )}
      </PopupState>

      {episodes.map((episode) => (
        <EpisodeListItem podcast={podcast} episode={episode} key={episode.id} />
      ))}
    </List>
  );
}

export default EpisodeList;