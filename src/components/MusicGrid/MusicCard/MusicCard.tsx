import { animated, useSpring } from '@react-spring/web'
import { FaPause, FaPlay } from 'react-icons/fa'
import { ISong } from '../../../constants/resourses/songTypes'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import {
  setIsPlaying,
  setSongId,
  toggleFavouriteSong,
} from '../../../store/songSlice/songSlice'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import cn from 'classnames'

import './MusicCard.scss'

interface IMusicCardProps {
  song?: ISong
  delay?: number
}

const MusicCard = ({ song, delay }: IMusicCardProps) => {
  const springs = useSpring({
    delay,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  const { isPlaying, songId, favoriteSongs } = useAppSelector(
    (state) => state.songSlice
  )
  const dispatch = useAppDispatch()

  const isCurrentSongFavourite = favoriteSongs.some(
    (favoriteSong) => favoriteSong.id === song.id
  )

  return (
    <animated.li
      style={{ ...springs }}
      key={song.id}
      className='music-grid-item'
    >
      <div className='music-card'>
        <div
          className={cn(
            'hover',
            isPlaying && songId === song.id && 'hover--active'
          )}
        >
          {isPlaying && songId === song.id ? (
            <div className='cover-wrapper'>
              <button
                className='music-card__add-favorite'
                onClick={() => dispatch(toggleFavouriteSong(song))}
                type='button'
              >
                {isCurrentSongFavourite ? (
                  <IoMdHeart className='music-card__add-favorite music-card__add-favorite--filled' />
                ) : (
                  <IoMdHeartEmpty className='music-card__add-favorite' />
                )}
              </button>
              <button
                className={cn(
                  'play-button',
                  songId === song.id && 'play-button--playing'
                )}
                onClick={() => dispatch(setIsPlaying(false))}
              >
                <FaPause className='stop' />
              </button>
              <div className='empty-button'></div>
            </div>
          ) : (
            <div className='cover-wrapper'>
              <button
                className='music-card__add-favorite'
                onClick={() => dispatch(toggleFavouriteSong(song))}
                type='button'
              >
                {isCurrentSongFavourite ? (
                  <IoMdHeart className='music-card__add-favorite music-card__add-favorite--filled' />
                ) : (
                  <IoMdHeartEmpty className='music-card__add-favorite' />
                )}
              </button>
              <button
                className='play-button'
                onClick={() => {
                  dispatch(setSongId(song.id))
                  dispatch(setIsPlaying(true))
                }}
              >
                <FaPlay className='play' />
              </button>
              <div className='empty-button' />
            </div>
          )}
        </div>
        <img src={song.albumCover} alt='Album Cover' />
        <div className='description-wrapper'>
          <h3>{song.name}</h3>
          <p>{song.artist}</p>
        </div>
      </div>
    </animated.li>
  )
}

export default MusicCard
