import { Drawer } from '@material-ui/core'
import { RiHome2Fill } from 'react-icons/ri'
import { BsFillHeartFill } from 'react-icons/bs'
import logo from '../../../resourses/logo.png'
import HeaderLink from './HeaderLink/HeaderLink'
import './HeaderDrawer.scss'

interface IHeaderDrawerProps {
  isOpen: boolean
  clickLink: () => void
}

const HeaderDrawer = ({ isOpen, clickLink }: IHeaderDrawerProps) => {
  return (
    <Drawer anchor={'right'} open={isOpen} onClose={clickLink}>
      <section className='drawer'>
        <div className='logo'>
          <img src={logo} className='drawer-logo' alt='Drawer Logo' />
          <h1 className='header-logo-h1 drawer-h1'>
            Music<span>Kit</span>
          </h1>
        </div>
        <ul className='drawer-list'>
          <HeaderLink
            to='/'
            clickLink={clickLink}
            title='Home'
            Icon={RiHome2Fill}
          />
          <HeaderLink
            to='/favorites'
            clickLink={clickLink}
            title='Favorites'
            Icon={BsFillHeartFill}
          />
        </ul>
      </section>
    </Drawer>
  )
}

export default HeaderDrawer
