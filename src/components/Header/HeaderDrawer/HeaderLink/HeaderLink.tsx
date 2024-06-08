import { IconType } from 'react-icons/lib'
import { NavLink } from 'react-router-dom'

import './HeaderLink.scss'

interface IHeaderLinksProps {
  to: string
  clickLink: () => void
  title: string
  Icon: IconType
}

const HeaderLink = ({ to, clickLink, title, Icon }: IHeaderLinksProps) => {
  return (
    <li className='header-link'>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'link link--active' : 'link')}
        onClick={clickLink}
      >
        <Icon className='link-icon' />
        <span className='link-text'>{title}</span>
      </NavLink>
    </li>
  )
}

export default HeaderLink
