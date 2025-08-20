"use client";
import React from "react";
import Count from "./Count";
import PlatformCount from "./PlatfromCount";

interface AnalyticsContainerProps {
  word: number;
  character: number;
  sentence: number;
  paragraph: number;
  facebook: number;
  instagram: number;
}

const AnalyticsContainer = ({
  word,
  character,
  sentence,
  paragraph,
  facebook,
  instagram,
}: AnalyticsContainerProps) => {
  return (
    <div className="card w-96 bg-white card-xl shadow-sm">
      <div className="card-body">
        <h2 className=" text-black font-bold text-center text-2xl mb-2">
          Analysis Result
        </h2>
        <div className="gap-y-4">
          <Count label="Word Count" count={word} />
          <Count label="Character Count" count={character} />
          <Count label="Sentence Count" count={sentence} />
          <Count label="Paragraph Count" count={paragraph} />
        </div>

        <h2 className=" text-gray-700 font-bold text-start text-2xl mt-2">
          Platform Limits
        </h2>
        <div>
          <PlatformCount label="Facebook" count={facebook} limit="63,206" />
          <PlatformCount label="Instagram" count={instagram} limit="2,200" />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsContainer;
