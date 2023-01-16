import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data'
import Logo from '../images/logo.png'
import { TiThMenu, TiThMenuOutline } from 'react-icons/ti'
import './navbar.css'

const Navbar = () => {

    const [isNavShow, setIsNavShow] = useState(false);

  return (
    <nav>
        <div className="container nav__container">
            <Link to="/gym" className='logo' onClick={ () => setIsNavShow(false)}>
                <img src={Logo} alt="Logo Gym" />
            </Link>
            <ul className={ `nav__links ${isNavShow ? 'show__nav' : 'hide__nav'}` }>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={ ({isActive}) => isActive ? 'active__nav' : '' } onClick={ () => setIsNavShow( prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn" onClick={ () => setIsNavShow( prev => !prev)}>
                {
                    isNavShow ? <TiThMenuOutline /> : <TiThMenu />
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar