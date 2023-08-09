import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const progressStyle = {
    // height: '55px',
    width: '50%',
    backgroundColor: '#C19FFC',
    color: 'white'
  }

  return (
    <div style={{ backgroundColor: '#202123', 
                  color: 'white', 
                  height: '100vh', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'center'}}>
      <h1>Cargando anuncios...</h1>
      <ProgressBar style={progressStyle} now={progress} label={`${Math.round(progress)}%`} />
    </div>
  );
};

export default LoadingPage;
