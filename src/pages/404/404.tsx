import React from 'react';
import { NotFound } from '../../assets';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {
  const navigation = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      <div>
        <h1 style={{ fontSize: 43 }}>404</h1>
        <h1 style={{ fontSize: 43 }}>Page Not Found</h1>
        <Button title="Go Back Home 🏠" onPress={() => navigation('/')} />
      </div>
      <div>
        <img src={NotFound} height={'400px'} />
      </div>
    </div>
  );
};

export default PageNotFound;
