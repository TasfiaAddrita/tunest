import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider } from './context';
import PodcastGrid from './components/PodcastGrid';
import PodcastDetail from './components/PodcastDetail';

const App = () => {

  return (
    <Provider>
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={ <PodcastGrid /> } />
            <Route path="/podcast/:podcastId" element={ <PodcastDetail /> } />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
