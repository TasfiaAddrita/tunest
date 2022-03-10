import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import axios from 'axios';
import PodcastPreview from './PodcastPreview';
import { Box } from '@mui/system';
import { grey } from '@mui/material/colors';

const RSSFeedForm = () => {
  const [rssFeedUrl, setRssFeedUrl] = useState("");
  const [podcastPreviewDetails, setPodcastPreviewDetails] = useState([]);

  const fetchPodcastDetailsViaRSSFeed = () => {
    axios
      .get("http://localhost:8080/api/v1/rss-feed/podcast?url=" + rssFeedUrl)
      .then((response) => setPodcastPreviewDetails(response.data));
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
          <Button type="submit">Submit</Button>
        </form>
        <PodcastPreview podcastPreviewDetails={podcastPreviewDetails} />
      </div>
    </Box>
  );
}

export default RSSFeedForm