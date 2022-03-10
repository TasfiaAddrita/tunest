import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import PodcastGrid from './PodcastGrid';

const Home = () => {
  return (
    <div>
      <PodcastGrid />
      <Link to="/rss-feed" style={{ textDecoration: "none", color: "white" }}>
        <Button variant="contained">Add Podcast via RSS Feed</Button>
      </Link>
    </div>
  );
}

export default Home