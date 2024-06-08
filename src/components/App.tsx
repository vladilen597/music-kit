import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import songs from '../constants/resourses/songsObject'
import Header from './Header/Header'
import Player from './Player/Player'
import Favorites from './Favorites/Favorites'
import Content from './Content/Content'

import '../static/styles/reset.css'
import '../static/styles/fonts.css'
import './App.scss'

const App = () => {
  useEffect(() => {
    const isThemeDark = JSON.parse(localStorage.getItem('isThemeDark'))
    if (isThemeDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <Router>
      <Header />
      <div className='header-height-container' />
      <Routes>
        <Route path='/' element={<Content songs={songs} />} />
        <Route path='favorites' element={<Favorites />} />
      </Routes>
      <div className='track-height-container' />
      <Player />
    </Router>
  )
}

export default App
