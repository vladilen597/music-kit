import { ISong } from '../../constants/resourses/songTypes'
import { useAppSelector } from '../../store/store'
import { VIEW_TYPES } from '../Header/SelectView/SelectView'
import MusicGrid from '../MusicGrid/MusicGrid'
import MusicList from '../MusicList/MusicList'

import './Content.scss'

interface IContentProps {
  songs: ISong[]
}

const Content = ({ songs }: IContentProps) => {
  const { view } = useAppSelector((state) => state.songSlice)

  return (
    <main className='content'>
      {view === VIEW_TYPES.GRID ? (
        <MusicGrid songs={songs} />
      ) : (
        <MusicList songs={songs} />
      )}
    </main>
  )
}

export default Content
