"use client";
import React from "react";
import { useState } from "react";

const useCount = () => {
  const FacebookLimit = 63206;
  const InstagramLimit = 2200;
  const [text, setText] = useState("");

  const trimmedText = text.trim();
  const word = trimmedText === "" ? [] : trimmedText.split(/\s+/);
  let wordCount = word.length;

  let characterCount = text.length;

  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  let sentenceCount = sentences.length;

  const paragraphs = text.split(/\n+/).filter((p) => p.trim().length > 0);
  let paragraphCount = paragraphs.length;

  let facebookCharCount = Math.max(FacebookLimit - text.length, 0);
  let instagramCharCount = Math.max(InstagramLimit - text.length, 0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
  };

  const handleClick = () => {
    setText("");
    wordCount = 0;
    characterCount = 0;
    sentenceCount = 0;
    paragraphCount = 0;
    facebookCharCount = 63206;
    instagramCharCount = 2200;
  };

  return {
    text,
    wordCount,
    characterCount,
    sentenceCount,
    paragraphCount,
    facebookCharCount,
    instagramCharCount,
    handleChange,
    handleClick,
  };
};

export default useCount;
