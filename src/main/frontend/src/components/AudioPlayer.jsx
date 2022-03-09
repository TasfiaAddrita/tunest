import React, { useContext } from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { Context } from '../context'

const AudioPlayer = () => {

  // repo: https://github.com/lijinke666/react-music-player
  // example source: https://github.com/lijinke666/react-music-player/blob/master/example/example.js

  const { audioList } = useContext(Context)

  const options = {
    audioLists: audioList,
    mode: 'full',
    remove: true,
    responsive: false,
    // showDestroy: true,
    showDownload: false,
    showPlayMode: false,
    showReload: false,
    showThemeSwitch: false,
    toggleMode: false
  }

  return (
    <>{audioList.length > 0 && <ReactJkMusicPlayer {...options} />}</>
  )
}

export default AudioPlayer