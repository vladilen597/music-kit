import { animated, useSpring } from '@react-spring/web'
import { FaPause, FaPlay } from 'react-icons/fa'
import cn from 'classnames'
import { ISong } from '../../../constants/resourses/songTypes'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import {
  setIsPlaying,
  setSongId,
  toggleFavouriteSong,
} from '../../../store/songSlice/songSlice'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'

import './MusicCard.scss'

interface IMusicCardProps {
  song: ISong
  delay: number
  setSongId?: (id: number) => void
  setIsPlaying?: (isPlaying: boolean) => void
}

const MusicCard = ({ song, delay }: IMusicCardProps) => {
  const { songId, isPlaying, favoriteSongs } = useAppSelector(
    (state) => state.songSlice
  )
  const dispatch = useAppDispatch()
  const springs = useSpring({
    delay,
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1 },
  })

  const isCurrentSongFavourite = favoriteSongs.some(
    (favoriteSong) => favoriteSong.id === song.id
  )

  return (
    <animated.li style={{ ...springs }} key={song.id} className='music-card'>
      <div className='music-card-wrapper'>
        <div className='music-card__left'>
          <div className='music-card__image-container'>
            <img
              className='music-card__album-cover'
              src={song.albumCover}
              alt='Album Cover'
            />
            {isPlaying && songId === song.id ? (
              <button
                className={cn(
                  'play-button',
                  songId === song.id && 'play-button--playing'
                )}
                onClick={() => dispatch(setIsPlaying(false))}
              >
                <FaPause className='stop' />
              </button>
            ) : (
              <button
                className='play-button'
                onClick={() => {
                  dispatch(setSongId(song.id))
                  dispatch(setIsPlaying(true))
                }}
              >
                <FaPlay className='play' />
              </button>
            )}
          </div>
          <div className='music-card__description-container'>
            <h3>{song.name}</h3>
            <p>{song.artist}</p>
          </div>
        </div>
        <div className='music-card__add-favorite-wrapper'>
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
        </div>
      </div>
    </animated.li>
  )
}

export default MusicCard
