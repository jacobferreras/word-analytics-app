"use client";
import React from "react";

interface TextAreaProps {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({ text, handleChange }: TextAreaProps) => {
  return (
    <div>
      <textarea
        className="textarea bg-white border-2 border-gray-400 text-black h-100"
        placeholder="Enter text"
        value={text}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
