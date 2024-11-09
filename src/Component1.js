import React from 'react';
import './Component1.css';
import gifImage from './gif/source-3.gif';
import backgroundGif from './gif/background.gif';

function Component1() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundGif})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <h2 className="psychedelic-text2">This is Component 1</h2>
      <p className="psychedelic-text">Welcome to Component 1!</p>
      <p>Welcome</p>
      <p className="psychedelic-text2">Welcome to Component 1!</p>
      <img src={gifImage} alt="Animated GIF" style={{ width: '200px', height: 'auto' }} />
      <p className="psychedelic-text">Welcome to Component 1!</p>
    </div>
  );
}

export default Component1;
