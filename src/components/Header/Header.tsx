import React, { useEffect } from 'react';
import { useHeaderStore } from '../../state/slices/headerSlice';

const Header: React.FC = () => {
  const { isScrolled, setScrolled } = useHeaderStore();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? 'header scrolled' : 'header'}>
      <h1>My Website</h1>
      {/* Add navigation links here */}
    </header>
  );
};

export default Header;
