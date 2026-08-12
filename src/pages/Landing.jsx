import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs';

function Landing() {
  return (
    <div className="landing">
      <AboutUs />
      <Link to="/plants">
        <button className="btn-get-started">
          🌱 Get Started
        </button>
      </Link>
    </div>
  );
}

export default Landing;