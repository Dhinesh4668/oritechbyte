import React from 'react';
import { Helmet } from 'react-helmet';
import { HeroImage, MobileDevIcon } from '../../assets';
import Style from './HomePage.module.scss';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
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
          <h1 style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            Building Tomorrow’s Software,
            <h1
              style={{
                padding: `5px 20px`,
                background: '#5F28FD',
                color: 'white',
              }}
            >
              Today
            </h1>
          </h1>
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
            <Button
              title="Let's talk 💼"
              onPress={() => window.open('tel:9150507538')}
            />
          </div>
        </div>
        {/* right */}
        <div>
          {/* image */}
          <img src={HeroImage} />
        </div>
      </div>

      {/* out brand marquee */}

      {/* who we are  */}
      <div className={Style.whoweareContainer}>
        <div className={Style.leftContainer}>
          <p>Who</p>
          <p
            style={{
              display: 'flex',
              gap: 10,
              marginTop: 5,
              justifyContent: 'center',
            }}
          >
            <p className={Style.areButton}>We</p>
            Are
          </p>
        </div>
        <div className={Style.rightContainer}>
          <p className={Style.content}>
            At OriTechByte FreelanceCommunity, we are a dynamic team of skilled
            IT professionals passionate about empowering businesses to thrive in
            the digital age. With expertise spanning web development, mobile app
            development, UI/UX design, and cutting-edge technologies, we
            specialize in creating robust, scalable, and user-centered solutions
            tailored to your unique needs.
            <br />
            <br />
            Whether you're a startup looking to build your foundation or an
            established enterprise aiming to optimize operations, our mission is
            to turn your vision into reality. We leverage the latest tools and
            technologies to deliver high-quality, cost-effective solutions that
            drive growth and innovation. <br /> <br />
            Looking for a trusted IT partner to transform your ideas into
            impactful digital solutions? Let’s collaborate and take your
            business to new heights!
          </p>
        </div>
      </div>

      {/* service page */}
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '0px 60px',
            margin: '10px 0px',
          }}
        >
          <div>
            <p style={{ lineHeight: 2.5, fontWeight: '600' }}>
              We are development experts on all <br /> technologies &{' '}
              <span
                style={{
                  padding: 10,
                  backgroundColor: '#5f28fd',
                  color: 'white',
                }}
              >
                Platforms
              </span>
            </p>
          </div>
          <Button
            title="Browse all Service 🖱️"
            onPress={() => navigate('/servise')}
          />
        </div>
        {/* card */}
        <div>
          <div>
            {/* icon */}
            <img src={MobileDevIcon} />
            {/* title */}
            <p>Developing Products</p>
            {/* sub title */}
            <p>
              Building responsive, robust, and scalable websites tailored to
              your needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
