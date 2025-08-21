"use client";
import React from "react";
import { useState, useCallback, useMemo } from "react";

const FacebookLimit = 63206;
const InstagramLimit = 2200;

const useCount = () => {
  const [text, setText] = useState("");

  const counts = useMemo(() => {
    const trimmedText = text.trim();
    const words = trimmedText === "" ? [] : trimmedText.split(/\s+/);
    const wordCount = words.length;
    const characterCount = text.length;

    const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
    const sentenceCount = sentences.length;

    const paragraphs = text.split(/\n+/).filter((p) => p.trim().length > 0);
    const paragraphCount = paragraphs.length;

    const facebookCharCount = Math.max(FacebookLimit - text.length, 0);
    const instagramCharCount = Math.max(InstagramLimit - text.length, 0);

    return {
      wordCount,
      characterCount,
      sentenceCount,
      paragraphCount,
      facebookCharCount,
      instagramCharCount,
    };
  }, [text]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newText = e.target.value;
      setText(newText);
    },
    []
  );

  const handleClick = useCallback(() => {
    setText("");
  }, []);

  return {
    text,
    ...counts,
    handleChange,
    handleClick,
  };
};

export default useCount;
