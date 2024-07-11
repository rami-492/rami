import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/about-us');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleRedirect}>Go to About Us</button>
    </div>
  );
};

export default Home;
