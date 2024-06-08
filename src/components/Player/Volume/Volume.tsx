import React, { useState } from 'react'

import './Volume.scss'

interface IVolumeProps {
  audio: React.RefObject<HTMLAudioElement>
}

const Volume = ({ audio }: IVolumeProps) => {
  const [currentVolume, setCurrentVolume] = useState(
    localStorage.getItem('volume') || 100
  )

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!audio.current) return

    audio.current.volume = Number(event.target.value) / 100
    setCurrentVolume(Math.floor(Number(event.target.value)))
    localStorage.setItem(
      'volume',
      JSON.stringify(Math.floor(Number(event.target.value)))
    )
  }

  return (
    <section className='volume'>
      <input
        onChange={handleVolumeChange}
        type='range'
        step={1}
        min={0}
        max={100}
        defaultValue={currentVolume}
        className='slider-styled-volume'
      />
      <span className='volume-counter'>{currentVolume}</span>
    </section>
  )
}

export default Volume
