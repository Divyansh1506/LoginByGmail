import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase-config';
import { signOut } from 'firebase/auth';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error logging out: ', error);
      });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
