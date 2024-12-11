import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
}

const SEO: React.FC<SEOProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="Top software service provider in Dharmapuri, offering software development, consulting, web development, mobile app development, UI/UX, and logo design." />
      <meta property="og:title" content="Top Rated Freelancing Community" />
      <meta property="og:description" content="Top software service provider in Dharmapuri, offering software development, consulting, web development, mobile app development, UI/UX, and logo design." />
      <meta property="og:image" content="/path/to/image.jpg" />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Top Rated Freelancing Community" />
      <meta name="twitter:description" content="Top software service provider in Dharmapuri, offering software development, consulting, web development, mobile app development, UI/UX, and logo design." />
      <meta name="twitter:image" content="/path/to/image.jpg" />
    </Helmet>
  );
};

export default SEO;