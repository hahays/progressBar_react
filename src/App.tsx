import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Title from "./components/Title/Title";

function App() {
  const [currentProgress, setCurrentProgress] = useState(0);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    start();
  }, []);
  const frame = () => {
    setCurrentProgress((current) => {
      if (current >= 100) {
        if (interval.current) {
          clearInterval(interval.current);
        }
        return current;
      }
      return current + 1;
    });
  };
  const start = () => {
    if (interval.current) {
      clearInterval(interval.current);
    }
    interval.current = setInterval(frame, 20);
  };
  const pause = () => {
    if (interval.current) {
      clearInterval(interval.current);
    }
  };
  const stop = () => {
    if (interval.current) {
      clearInterval(interval.current);
    }
    setCurrentProgress(0);
  };
  return (
    <div className="app">
      <Title content="PROGRESS BAR" />
      <ProgressBar percent={currentProgress} />
      <div className="app__buttons">
        <Button content="START" onClick={start} />
        <Button content="PAUSE" onClick={pause} />
        <Button content="STOP" onClick={stop} />
      </div>
    </div>
  );
}
export default App;
