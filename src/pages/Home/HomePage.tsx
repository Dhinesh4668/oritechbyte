import React from 'react';
import { Helmet } from 'react-helmet';
import { HeroImage } from '../../assets';
import Style from './HomePage.module.scss';
import { Button } from '../../components';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home | oritechbyte</title>
        <meta
          name="description"
          content="Welcome to the homepage of oritechbyte!"
        />
      </Helmet>
      {/* main container */}
      <div className={Style.herocontainer}>
        {/* left  */}
        <div className={Style.leftContent}>
          {/* main title */}
          <h1>Building Tomorrow’s Software, Today</h1>
          <p>
            Transform your ideas into reality with our expert app and web
            development solutions. At <span>oritechByte</span>, we specialize in
            creating innovative, scalable, and user-centric applications across
            all platforms, ensuring your business stays ahead in the digital
            era.
          </p>
          <h1>Let’s Build the Future Together.</h1>

          {/* buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '50px',
              alignItems: 'center',
              marginTop: '30px',
            }}
          >
            <Button title="Get Started" />
            <Button title="Explore Services" varient />
          </div>
        </div>
        {/* right */}
        <div>
          {/* image */}
          <img src={HeroImage} />
        </div>
      </div>

      {/* service page */}
      <div
        style={{
          height: '100vh',
        }}
      >
        {/* title container */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '100px',
            alignItems: 'center',
          }}
        >
          <h1>
            We are development experts on <br /> all technologies & platforms{' '}
          </h1>
          <Button title="Browse all services" />
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default HomePage;
