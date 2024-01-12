import React, { useState, useEffect } from 'react';

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const targetCount = 45; // Set your target count
    const speed = 3000; // Set your animation speed in milliseconds
    const steps = 10; // Set the number of steps

    const stepValue = targetCount / steps;
    const timeInterval = speed / steps;

    let currentCount = 0;
    let intervalId;

    const updateCounter = () => {
      currentCount += stepValue;
      setCounter(Math.floor(currentCount));

      if (currentCount >= targetCount) {
        clearInterval(intervalId);
        setCounter(targetCount); // Ensure the final count is exact
      }
    };

    intervalId = setInterval(updateCounter, timeInterval);

    return () => {
      clearInterval(intervalId); // Cleanup on component unmount
    };
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="rt-counter" style={{ color: '#ffffff', fontSize: '40px' }}>
      {counter}
    </div>
  );
};

export default CounterComponent;
