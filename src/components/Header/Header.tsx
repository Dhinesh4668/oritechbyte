import React from 'react'
import Styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

  
  // handle contect click
  const handleContactClick = () => {
    console.log('hanfle click')
  }

  return (
    <header className={Styles.header}>
      {/* left side */}
      <div>logo</div>
      {/* center */}
      <div className={Styles.headerLink}>
        <Link to="/">Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>blog</Link>
        <Link to='/service'>service</Link>
      </div>
      {/* contact */}
      <div onClick={handleContactClick} className={Styles.contact}>
        <Link style={{color: "white"}} to="/contact">Contact</Link>
      </div>
    </header>
  )
}

export default Header