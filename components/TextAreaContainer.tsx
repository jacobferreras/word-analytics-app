"use client";
import React from "react";

interface TextAreaContainerProps {
  children?: React.ReactNode;
}

const TextAreaContainer = ({ children }: TextAreaContainerProps) => {
  return (
    <div className="card w-96 bg-white card-xl shadow-sm">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default TextAreaContainer;
