import React, { useEffect, useRef, useState } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import songs from '../../constants/resourses/songsObject'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { setIsPlaying, setSongId } from '../../store/songSlice/songSlice'
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from 'react-icons/tb'
import Volume from './Volume/Volume'

import './Player.scss'

const Player = () => {
  const [currentTime, setCurrentTime] = useState(0)
  const [durationTime, setDurationTime] = useState(0)
  const { songId, isPlaying } = useAppSelector((state) => state.songSlice)
  const dispatch = useAppDispatch()

  const audio = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!audio?.current) {
      return
    }
    if (isPlaying) {
      audio.current.play()
    } else audio.current.pause()
  }, [songId, isPlaying])

  const handleTogglePlaying = () => {
    dispatch(setIsPlaying(!isPlaying))
  }

  const setCurrentTimeDuration = (
    event: React.SyntheticEvent<HTMLAudioElement>
  ) => {
    setCurrentTime(Math.floor(event.currentTarget.currentTime))
  }

  const convertCurrentTime = () => {
    let minutes = Math.floor(currentTime / 60)
    let seconds = Math.floor(currentTime % 60)
    if (seconds < 10) {
      return `${minutes}:0${seconds}`
    } else return `${minutes}:${seconds}`
  }

  const currentTimeConverted = convertCurrentTime()

  const HandleDurationTime = (
    event: React.SyntheticEvent<HTMLAudioElement>
  ) => {
    setDurationTime(Math.ceil(event.currentTarget.duration))
  }

  const convertDurationTime = () => {
    let minutes = Math.floor(durationTime / 60)
    let seconds = Math.floor(durationTime % 60)
    if (seconds < 10) {
      return `${minutes}:0${seconds}`
    }
    return `${minutes}:${seconds}`
  }

  const durationTimeConverted = convertDurationTime()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!audio.current) return
    audio.current.currentTime = Math.floor(Number(event.target.value))
    setCurrentTime(Math.floor(Number(event.target.value)))
  }

  const handlePlayPreviousSong = () => {
    songs.forEach((song, index) => {
      if (song.id === songId) {
        if (index === 0) {
          dispatch(setSongId(songs.length - 1))
        } else {
          dispatch(setSongId(index - 1))
        }
        dispatch(setIsPlaying(true))
      }
    })
  }

  const handlePlayNextSong = () => {
    songs.forEach((song, index) => {
      if (song.id === songId) {
        if (index + 1 === songs.length) {
          dispatch(setSongId(0))
        } else {
          dispatch(setSongId(index + 1))
        }
      }
      dispatch(setIsPlaying(true))
    })
  }

  return (
    <footer className='audio-player'>
      <section className='audio-now-playing'>
        <h3>{songs[songId]?.name || ''}</h3>
        <p>{songs[songId]?.artist || ''}</p>
      </section>
      <section className='audio-track'>
        <audio
          draggable={false}
          onTimeUpdate={setCurrentTimeDuration}
          onLoadedData={HandleDurationTime}
          ref={audio}
          src={songs[songId]?.source || ''}
          preload='metadata'
          onEnded={handlePlayNextSong}
        />
        <div className='slider'>
          <div className='time'>{currentTimeConverted}</div>
          <input
            type='range'
            onChange={handleChange}
            step={0.01}
            min={0}
            value={currentTime}
            max={durationTime}
            className='slider-styled'
          />
          <span className='time'>{durationTimeConverted}</span>
        </div>
        <div className='player-controls'>
          <button
            onClick={handlePlayPreviousSong}
            className='control-song-button'
          >
            <TbPlayerTrackPrevFilled />
          </button>
          <button onClick={handleTogglePlaying} className='audio-play-button'>
            {isPlaying ? (
              <FaPause className='pause-icon' />
            ) : (
              <FaPlay className='play-icon' />
            )}
          </button>
          <button onClick={handlePlayNextSong} className='control-song-button'>
            <TbPlayerTrackNextFilled />
          </button>
        </div>
      </section>
      <Volume audio={audio} />
    </footer>
  )
}

export default Player
