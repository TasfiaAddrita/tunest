import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export function Provider(props) {
  const [podcasts, setPodcasts] = useState([]);
  const [audioList, setAudioList] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const url = "http://localhost:8080/api/v1"

  const getPodcasts = () => {
    axios.get(url + "/podcasts").then((res) => {
      setPodcasts(res.data);
    }).catch((err) => {
      console.error(err);
    })
  }

  const addPodcastToState = (newPodcast) => {
    setPodcasts([...podcasts, newPodcast])
  }

  const addPodcastEpisodeToAudioList = (podcastEpisode) => {
    const episode = {
      name: podcastEpisode.title,
      musicSrc: podcastEpisode.audioLink
    }
    setAudioList([...audioList, episode])
  }

  useEffect(getPodcasts, []);

  return (
    <Context.Provider
      value={{
        podcasts, getPodcasts,
        audioList, addPodcastEpisodeToAudioList,
        isUserLoggedIn, setIsUserLoggedIn,
        addPodcastToState,
        user, setUser
      }}
      {...props}
    />
  );
}