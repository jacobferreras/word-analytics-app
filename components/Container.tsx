"use client";
import React from "react";
import TextAreaContainer from "./TextAreaContainer";
import AnalyticsContainer from "./AnalyticsContainer";
import ClearTextButton from "./ClearTextButton";
import TextArea from "./TextArea";
import useCount from "@/hooks/useCount";

const Container = () => {
  const { text, word, character, handleChange } = useCount();

  return (
    <div className="flex justify-center py-12 gap-4">
      <TextAreaContainer>
        <TextArea text={text} handleChange={handleChange} />
        <ClearTextButton />
      </TextAreaContainer>
      <AnalyticsContainer word={word} character={character} />
    </div>
  );
};

export default Container;
