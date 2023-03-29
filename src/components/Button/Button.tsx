import React from "react";
import "./button.css";

type ButtonProps = {
  content: string;
  onClick: (event: React.MouseEvent) => void;
};

function Button({ content, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
