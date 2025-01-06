import React from 'react';
import Styles from './Header.module.scss';
import { Link, Links } from 'react-router-dom';
import { LogoIcon } from '../../assets';

const Header: React.FC = () => {
  // handle contect click
  const handleContactClick = () => {
    console.log('hanfle click');
  };

  return (
    <header className={Styles.header}>
      {/* left side */}
      <Link
        to="/"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <img src={LogoIcon} alt="Logo" />
        <p style={{ fontWeight: 500, margin: 0 }}>
          OriTech<span style={{ color: '#5F28FD' }}>Byte</span>
        </p>
      </Link>

      {/* center */}
      <div className={Styles.headerLink}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">blog</Link>
        <Link to="/service">service</Link>
      </div>
      {/* contact */}
      <div onClick={handleContactClick} className={Styles.contact}>
        <Link style={{ color: 'white' }} to="/contact">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
