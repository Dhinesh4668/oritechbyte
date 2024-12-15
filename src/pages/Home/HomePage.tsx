import React from 'react'
import { Helmet } from 'react-helmet'

const HomePage :React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home | oritechbyte</title>
        <meta name="description" content="Welcome to the homepage of oritechbyte!" />
      </Helmet>
    <div>HomePage</div>
    </>
  )
}

export default HomePage