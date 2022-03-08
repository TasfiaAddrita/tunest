import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider } from './context';
import PodcastGrid from './components/PodcastGrid';
import PodcastDetail from './components/PodcastDetail';
import TunestAppBar from './components/TunestAppBar';
import AudioPlayer from './components/AudioPlayer';

const App = () => {

  return (
    <Provider>
      <Router>
        <TunestAppBar />
        <Container>
          <Routes>
            <Route path="/" element={ <PodcastGrid /> } />
            <Route path="/podcast/:podcastId" element={ <PodcastDetail /> } />
          </Routes>
        </Container>
        <AudioPlayer />
      </Router>
    </Provider>
  );
}

export default App;
