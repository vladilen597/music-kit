import { ISong } from '../../constants/resourses/songTypes'
import MusicCard from './MusicCard/MusicCard'

import './MusicList.scss'

interface IMusicListProps {
  songs: ISong[]
}

const MusicList = ({ songs }: IMusicListProps) => {
  return (
    <main className='music-list'>
      <ul className='music-list__cards'>
        {songs.map((song, index) => (
          <MusicCard key={song.id} song={song} delay={index * 50} />
        ))}
      </ul>
    </main>
  )
}

export default MusicList
