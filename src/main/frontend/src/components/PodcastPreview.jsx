import { Grid, TextField } from '@mui/material'
import React from 'react'
import placeholder from "../assets/podcast_placeholder.png";

const PodcastPreview = ({ podcastPreviewDetails }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          {podcastPreviewDetails.image ? (
            <img style={{ width: "100%" }} src={podcastPreviewDetails.image} />
          ) : (
            <img style={{ width: "100%" }} src={placeholder} />
          )}
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-required"
            label="Podcast Name"
            value={podcastPreviewDetails.name}
            InputProps={{ readOnly: true }}
            focused
            fullWidth
          />
          <TextField
            id="outlined-required"
            label="Author"
            value={podcastPreviewDetails.company}
            InputProps={{ readOnly: true }}
            focused
            fullWidth
          />
          <TextField
            id="outlined-required"
            label="Website"
            value={podcastPreviewDetails.website}
            InputProps={{ readOnly: true }}
            focused
            fullWidth
          />
          <TextField
            id="outlined-required"
            label="Description"
            value={podcastPreviewDetails.description}
            InputProps={{ readOnly: true }}
            focused
            multiline
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default PodcastPreview