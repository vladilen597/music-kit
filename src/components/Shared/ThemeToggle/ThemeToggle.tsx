import { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import cn from 'classnames'
import './ThemeToggle.scss'

const ThemeToggle = () => {
  const [isThemeDark, setIsThemeDark] = useState<boolean>(
    JSON.parse(localStorage.getItem('isThemeDark'))
  )

  const handleToggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    localStorage.setItem(
      'isThemeDark',
      JSON.stringify(document.documentElement.classList.contains('dark'))
    )
    setIsThemeDark(!isThemeDark)
  }

  return (
    <label className='theme-toggle'>
      <div className='theme-toggle__background-icons'>
        <FaMoon className='theme-toggle__background-icon' />
        <FaSun className='theme-toggle__background-icon theme-toggle__background-icon--sun' />
      </div>
      <div
        className={cn(
          'theme-toggle__thumb',
          isThemeDark && 'theme-toggle__thumb--active'
        )}
      ></div>
      <input
        checked={isThemeDark}
        onChange={handleToggleTheme}
        className='theme-toggle__checkbox'
        type='checkbox'
      />
    </label>
  )
}

export default ThemeToggle
