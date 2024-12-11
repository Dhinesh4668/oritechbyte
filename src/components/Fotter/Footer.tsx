import React from 'react';
// import './Footer.css'; // Assuming a CSS file for footer styles

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 My Website. All rights reserved.</p>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
