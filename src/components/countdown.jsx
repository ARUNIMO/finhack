import React from 'react';
import CountdownTimer from './CountdownTimer';
import "./counter.css";
const Countdown = () => {

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  return (
    <>
    <CountdownTimer targetDate="2024-03-05T00:00:00" />
    </>
  )
};

export default Countdown;
