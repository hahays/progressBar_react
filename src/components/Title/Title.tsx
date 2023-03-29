import React from "react";
import "./title.css";

type TitleProps = {
  content: string;
};

function Title({ content }: TitleProps) {
  return <div className="title-container">{content}</div>;
}

export default Title;
