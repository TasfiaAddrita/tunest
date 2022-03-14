import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { IconButton, List, ListSubheader, Button, Menu, MenuItem, ListItemIcon, Paper } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import EpisodeListItem from './EpisodeListItem';


const EpisodeList = ({ podcast, podcastId }) => {

  const [episodes, setEpisodes] = useState([]);
  const [sort, setSort] = useState("");

  const url = "http://localhost:8080/api/v1"

  // const getEpisodesByPodcastId = (podcastId) => {
  //   axios.get(url + `/podcast/${podcastId}/episodes`).then((res) => {
  //     setEpisodes(res.data);
  //   }).catch((err) => {
  //     console.error(err);
  //   })
  // }

  const getEpisodesByPodcastId = (podcastId, sort, popupState) => {
    // popupState.close();
    setSort(sort);
    axios
      .get(url + `/podcast/${podcastId}/episodes?sort=${sort}`)
      .then((res) => {
        setEpisodes(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getEpisodesByPodcastId(podcastId, "datedesc");
  }, [episodes])
  
  return (
    
      <List>
        <ListSubheader sx={{ width: "100%", bgcolor: "red" }}>
          Episodes
        </ListSubheader>

        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button variant="contained" {...bindTrigger(popupState)}>
                Sort
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  selected={sort === "titleasc"}
                  // onClick={popupState.close}
                  onClick={() =>
                    getEpisodesByPodcastId(podcastId, "titleasc", popupState)
                  }
                >
                  <ListItemIcon>
                    <ArrowUpward />
                  </ListItemIcon>
                  Title (A - Z)
                </MenuItem>

                <MenuItem
                  selected={sort === "titledesc"}
                  // onClick={popupState.close}
                  onClick={() =>
                    getEpisodesByPodcastId(podcastId, "titledesc", popupState)
                  }
                >
                  <ListItemIcon>
                    <ArrowDownward />
                  </ListItemIcon>
                  Title (Z - A)
                </MenuItem>

                <MenuItem
                  selected={sort === "dateasc"}
                  // onClick={popupState.close}
                  onClick={() =>
                    getEpisodesByPodcastId(podcastId, "dateasc", popupState)
                  }
                >
                  <ListItemIcon>
                    <ArrowUpward />
                  </ListItemIcon>
                  Date (Oldest to Newest)
                </MenuItem>

                <MenuItem
                  selected={sort === "datedesc"}
                  // onClick={popupState.close}
                  onClick={() =>
                    getEpisodesByPodcastId(podcastId, "datedesc", popupState)
                  }
                >
                  <ListItemIcon>
                    <ArrowDownward />
                  </ListItemIcon>
                  Date (Newest to Oldest)
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>

        {episodes.map((episode) => (
          
          <EpisodeListItem
            podcast={podcast}
            episode={episode}
            key={episode.id}
          />
        ))}
      </List>
    
  );
}

export default EpisodeList;