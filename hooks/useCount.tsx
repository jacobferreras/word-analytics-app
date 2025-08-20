"use client";
import React, { use } from "react";
import { useState } from "react";

const useCount = () => {
  const [text, setText] = useState("");
  const [word, setWord] = useState(0);
  const [character, setCharacter] = useState(0);
  const [sentence, setSentence] = useState(0);
  const [paragraph, setParagraph] = useState(0);
  const [facebookChar, setFacebookChar] = useState(63206);
  const [instagramChar, setInstagramChar] = useState(2200);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);

    const words = newText.trim().split(/\s+/);
    const count = words.filter((word) => word !== "").length;
    setWord(count);
    setCharacter(newText.length);

    const sentences = newText
      .split(/[.!?]+/)
      .filter((s) => s.trim().length > 0);
    setSentence(sentences.length);

    const paragraphs = newText.split(/\n+/).filter((p) => p.trim().length > 0);
    setParagraph(paragraphs.length);

    const facebookCount = facebookChar - character;
    setFacebookChar(facebookCount < 0 ? 0 : facebookCount);

    const instagramCount = instagramChar - character;
    setInstagramChar(instagramCount < 0 ? 0 : instagramCount);
  };

  const handleClick = () => {
    setText("");
    setWord(0);
    setCharacter(0);
    setSentence(0);
    setParagraph(0);
    setFacebookChar(63206);
    setInstagramChar(2200);
  };

  return {
    text,
    word,
    character,
    sentence,
    paragraph,
    facebookChar,
    instagramChar,
    handleChange,
    handleClick,
  };
};

export default useCount;
