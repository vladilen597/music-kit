import { ISong } from '../../constants/resourses/songTypes'
import MusicCard from './MusicCard/MusicCard'

import './MusicGrid.scss'

interface IMusicGridProps {
  songs: ISong[]
}

const MusicGrid = ({ songs }: IMusicGridProps) => {
  return (
    <div className='music-grid'>
      <ul className='music-grid__cards'>
        {songs.map((song, index) => (
          <MusicCard key={song.id} song={song} delay={index * 50} />
        ))}
      </ul>
    </div>
  )
}

export default MusicGrid
