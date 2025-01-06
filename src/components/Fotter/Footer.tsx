import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h2 className={styles.brand}>
            <span></span> OriTech{' '}
            <span className={styles.brandHighlight}>Byte</span>
          </h2>
          <p className={styles.description}>
            Vehicula ut habitant orci, et faucibus integer aliquam odio dolor
            sit amet conset.
          </p>
          <div className={styles.contactInfo}>
            <p>
              <strong>Email</strong>
              <br />
              <a href="mailto:contact@oritechbyte.com" className={styles.link}>
                contact@oritechbyte.com &rarr;
              </a>
            </p>
            <p>
              <strong>Phone</strong>
              <br />
              <a href="tel:111111111" className={styles.link}>
                (487) 456 - 789 &rarr;
              </a>
            </p>
          </div>
        </div>
        <div className={styles.rightSection}>
          <h3>Get in touch with us and let’s work on your project!</h3>
          <form className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Subscribe
            </button>
          </form>
          <div className={styles.socialMedia}>
            <p>Follow us on social media</p>
            <div className={styles.icons}>
              <a href="#" className={styles.icon}>
                F
              </a>
              <a href="#" className={styles.icon}>
                T
              </a>
              <a href="#" className={styles.icon}>
                I
              </a>
              <a href="#" className={styles.icon}>
                L
              </a>
              <a href="#" className={styles.icon}>
                Y
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>
          Copyright © {new Date().getFullYear()} | Designed by{' '}
          <strong>Dhinesh</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
