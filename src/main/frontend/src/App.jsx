import React from 'react';
import { Container, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Provider } from './context';
import PodcastDetail from './components/PodcastDetail';
import TunestAppBar from './components/TunestAppBar';
import AudioPlayer from './components/AudioPlayer';
import RSSFeedForm from './components/RSSFeedForm';
import Home from './components/Home';
import SavedPodcasts from './components/SavedPodcasts';

const App = () => {

  return (
    <Provider>
      <Router>
        <TunestAppBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
            <Route path="/rss-feed" element={<RSSFeedForm />} />
            <Route path="/saved" element={<SavedPodcasts />} />
          </Routes>
        </Container>
        <AudioPlayer />
      </Router>
    </Provider>
  );
}

export default App;
