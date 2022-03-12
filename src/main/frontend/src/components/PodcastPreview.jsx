import { TextField } from '@mui/material'
import React from 'react'

const PodcastPreview = ({ podcastPreviewDetails }) => {
  return (
    <div>
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
    </div>
  );
}

export default PodcastPreview