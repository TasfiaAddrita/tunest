import React, { useContext, useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Grid, Typography, IconButton } from '@mui/material';
import EpisodeList from './EpisodeList';
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkAddOutlined from "@mui/icons-material/BookmarkAddOutlined";
import { Context } from '../context';

const PodcastDetail = () => {
  const { user } = useContext(Context);
  const { podcastId } = useParams();
  const [podcast, setPodcast] = useState([]);
  const [fillBookmark, setFillBookmark] = useState(false);

  const url = "http://localhost:8080/api/v1"
  const getPodcastById = (id) => {
    axios.get(url + `/podcast/${id}`).then((res) => {
      setPodcast(res.data);
    }).catch((err) => {
      console.error(err);
    })
  }

  const toggleFillBookmark = () => {
    if (fillBookmark) setFillBookmark(false);
    else setFillBookmark(true);
  }

  const savePodcastToUserProfile = () => {
    toggleFillBookmark();
    axios
      .post(url + `/user/saved-podcasts/${user.googleId}`, podcastId, {
        headers: {
          "Content-Type": "text/plain", // This was added to prevent the = from adding to data
        },
      })
      .then((response) => console.log(response.data));
  }

  const removePodcastFromUserProfile = () => {
    toggleFillBookmark();
  }
  
  useEffect(() => {
    getPodcastById(podcastId);
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={4}>
        <img style={{ width: "100%" }} src={podcast.image} />
        {fillBookmark ? (
          <IconButton onClick={() => removePodcastFromUserProfile()}>
            <BookmarkIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => savePodcastToUserProfile()}>
            <BookmarkAddOutlined />
          </IconButton>
        )}
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
        <EpisodeList podcastId={podcastId} />
      </Grid>
    </Grid>
  );
}

export default PodcastDetail