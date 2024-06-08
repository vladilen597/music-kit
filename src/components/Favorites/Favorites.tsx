import { useAppSelector } from '../../store/store'
import Content from '../Content/Content'
import './Favorites.scss'

const Favorites = () => {
  const favoriteSongs = useAppSelector((state) => state.songSlice.favoriteSongs)

  return <Content songs={favoriteSongs} />
}

export default Favorites
