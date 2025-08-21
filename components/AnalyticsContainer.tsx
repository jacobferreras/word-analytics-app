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
    <div className="card w-auto md:w-124 bg-white card-xl shadow-sm">
      <div className="card-body">
        <h2 className=" text-black font-bold text-center text-3xl mb-2">
          Analysis Result
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <Count label="Word Count" count={word} />
          <Count label="Character Count" count={character} />
          <Count label="Sentence Count" count={sentence} />
          <Count label="Paragraph Count" count={paragraph} />
        </div>

        <h2 className=" text-gray-700 font-bold text-center text-2xl my-4">
          Platform Limits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PlatformCount
            label="Facebook"
            count={facebook}
            limit="63,206"
            icon="bi bi-facebook"
          />
          <PlatformCount
            label="Instagram"
            count={instagram}
            limit="2,200"
            icon="bi bi-instagram"
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsContainer;
