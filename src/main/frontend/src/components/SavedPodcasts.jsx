import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context'
import axios from 'axios';

const SavedPodcasts = () => {
  const { user } = useContext(Context);
  const [userSavedPodcasts, setUserSavedPodcasts] = useState([]);
  const getUserSavedPodcasts = () => {
    axios
      .get("http://localhost:8080/api/v1/user/saved-podcasts/" + user.googleId)
      .then((response) => console.log(response.data));
  }

  useEffect(() => {
    getUserSavedPodcasts();
  })

  return (
    <div>{ userSavedPodcasts.length > 0 ? <h1>You have podcasts</h1> : <h1>Save some podcasts!</h1>}</div>
  )
}

export default SavedPodcasts