import React, { useState, useEffect } from "react";
import "./Task4.css";

const Task4 = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  // Format time helper function
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${hours.toString().padStart(2, "0")}:
            ${minutes.toString().padStart(2, "0")}:
            ${seconds.toString().padStart(2, "0")}:
            ${milliseconds.toString().padStart(3, "0")}`;
  };

  // Function to update display
  const updateDisplay = (time) => {
    return formatTime(time);
  };

  // Start/Stop timer logic
  const startStop = () => {
    if (isRunning) {
      // Stop the stopwatch
      setElapsedTime(
        (prevElapsedTime) => prevElapsedTime + (Date.now() - startTime)
      );
      setIsRunning(false);
    } else {
      // Start the stopwatch
      setStartTime(Date.now());
      setIsRunning(true);
    }
  };

  // Reset timer logic
  const reset = () => {
    setElapsedTime(0);
    setLaps([]);
    setIsRunning(false);
  };

  // Lap logic
  const lap = () => {
    if (isRunning) {
      const lapTime = formatTime(elapsedTime + (Date.now() - startTime));
      setLaps((prevLaps) => [...prevLaps, lapTime]);
    }
  };

  // Effect to continuously update the timer when running
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setElapsedTime(
          (prevElapsedTime) => prevElapsedTime + (Date.now() - startTime)
        );
        setStartTime(Date.now()); // Update startTime for smooth running
      }, 10); // Update every 10ms
    }

    return () => clearInterval(timer); // Cleanup on unmount
  }, [isRunning, startTime]);

  return (
    <main className="container d-flex justify-content-center align-items-center my-5">
      <div id="stopWatch" className="stopWatch">
        <h3>Stop Watch</h3>
        <div className="display">
          {updateDisplay(
            isRunning ? elapsedTime + (Date.now() - startTime) : elapsedTime
          )}
        </div>
        <div className="buttons">
          <button title="Start/Stop" className="bttn start" onClick={startStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button title="Lap" className="bttn lap" onClick={lap}>
            Lap
          </button>
          <button title="Reset" className="bttn reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
      <div className="timeLap">
        <h3>Laps</h3>
        {laps.map((lap, index) => (
          <div key={index}>{lap}</div>
        ))}
      </div>
    </main>
  );
};

export default Task4;
