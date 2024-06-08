import { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import SelectView from './SelectView/SelectView.tsx'
import ThemeToggle from '../Shared/ThemeToggle/ThemeToggle.tsx'
import logo from '../../resourses/logo.png'
import HeaderDrawer from './HeaderDrawer/HeaderDrawer'

import './Header.scss'

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState)
  }

  return (
    <header className='header'>
      <div className='header-logo-tagline'>
        <img className='header-logo' src={logo} alt='Header' />
        <h1 className='header-logo-title'>
          Music<span>Kit</span>
        </h1>
      </div>
      <div className='header-controls'>
        <SelectView />
        <ThemeToggle />
        <button className='drawer-button' onClick={toggleDrawer}>
          <HiOutlineMenu className='drawer-icon' />
        </button>
        <HeaderDrawer isOpen={isDrawerOpen} clickLink={toggleDrawer} />
      </div>
    </header>
  )
}

export default Header
