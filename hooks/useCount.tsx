"use client";
import React from "react";
import { useState } from "react";

const useCount = () => {
  const [text, setText] = useState("");
  const [word, setWord] = useState(0);
  const [character, setCharacter] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);

    const words = newText.trim().split(/\s+/);
    const count = words.filter((word) => word !== "").length;
    setWord(count);
    setCharacter(newText.length);
  };

  return {
    text,
    word,
    character,
    handleChange,
  };
};

export default useCount;
