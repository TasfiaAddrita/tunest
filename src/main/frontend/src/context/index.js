import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export function Provider(props) {
  const [podcasts, setPodcasts] = useState([]);

  const url = "http://localhost:8080/api/v1"

  const getPodcasts = () => {
    axios.get(url + "/podcasts").then((res) => {
      setPodcasts(res.data);
    }).catch((err) => {
      console.error(err);
    })
  }

  useEffect(getPodcasts, []);

  return (
    <Context.Provider
      value={{ podcasts, getPodcasts }}
      {...props}
    />
  );
}