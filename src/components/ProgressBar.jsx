import React, { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 50);
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainingTime} max={timer}></progress>;
}
