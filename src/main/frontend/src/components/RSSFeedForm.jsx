import React, { useContext, useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import axios from 'axios';
import PodcastPreview from './PodcastPreview';
import { Box } from '@mui/system';
import { Context } from '../context';

const RSSFeedForm = () => {
  const { addPodcastToState } = useContext(Context);
  const [rssFeedUrl, setRssFeedUrl] = useState("");
  const [podcastPreviewDetails, setPodcastPreviewDetails] = useState([]);

  const fetchPodcastDetailsViaRSSFeed = () => {
    axios
      .get("http://localhost:8080/api/v1/rss-feed/podcast?url=" + rssFeedUrl)
      .then((response) => setPodcastPreviewDetails(response.data));
  }

  const savePodcast = (podcast) => {
    axios
      .post("http://localhost:8080/api/v1/podcast", podcast)
      .then((response) => {
        podcast.id = response.data;
        addPodcastToState(podcast);
        axios.post(`http://localhost:8080/api/v1/rss-feed/episodes?podcastId=${podcast.id}&url=${rssFeedUrl}`) 
      })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRssFeedUrl(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(rssFeedUrl);
    fetchPodcastDetailsViaRSSFeed();
    console.log(podcastPreviewDetails)
  }

  return (
    <Box
      // component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          // width: "25ch"
        },
        maxWidth: "100%",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            name="rssUrl"
            onChange={handleInputChange}
            id="outlined-basic"
            label="RSS Feed"
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" type="submit">Submit</Button>
        </form>
        <PodcastPreview podcastPreviewDetails={podcastPreviewDetails} />
        <Button variant="contained" onClick={() => savePodcast(podcastPreviewDetails)}>Add podcast to database</Button>
      </div>
    </Box>
  );
}

export default RSSFeedForm