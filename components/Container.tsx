"use client";
import React from "react";
import TextAreaContainer from "./TextAreaContainer";
import AnalyticsContainer from "./AnalyticsContainer";
import ClearTextButton from "./ClearTextButton";
import TextArea from "./TextArea";
import useCount from "@/hooks/useCount";

const Container = () => {
  const {
    text,
    wordCount,
    characterCount,
    sentenceCount,
    paragraphCount,
    facebookCharCount,
    instagramCharCount,
    handleChange,
    handleClick,
  } = useCount();

  return (
    <div className="flex flex-col justify-center py-12 gap-4 px-4 md:flex-row">
      <TextAreaContainer>
        <TextArea text={text} handleChange={handleChange} />
        <ClearTextButton onClick={handleClick} />
      </TextAreaContainer>
      <AnalyticsContainer
        word={wordCount}
        character={characterCount}
        sentence={sentenceCount}
        paragraph={paragraphCount}
        facebook={facebookCharCount}
        instagram={instagramCharCount}
      />
    </div>
  );
};

export default Container;
