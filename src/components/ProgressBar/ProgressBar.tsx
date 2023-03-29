import { useState } from "react";
import "./progressBar.css";

type ProgressBarProps = {
  percent: number;
};

function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <div className="progressBar">
      <div className="progressBar__fill" style={{ width: `${percent}%` }}></div>
      <label className="progressBar__label">{`${percent} %`}</label>
    </div>
  );
}

export default ProgressBar;
