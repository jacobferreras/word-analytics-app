"use client";
import React from "react";
import Count from "./Count";
import PlatformCount from "./PlatfromCount";

interface AnalyticsContainerProps {
  word: number;
  character: number;
}

const AnalyticsContainer = ({ word, character }: AnalyticsContainerProps) => {
  return (
    <div className="card w-96 bg-white card-xl shadow-sm">
      <div className="card-body">
        <h2 className=" text-black font-bold text-center text-2xl mb-2">
          Analysis Result
        </h2>
        <div className="gap-y-4">
          <Count label="Word Count" count={word} />
          <Count label="Character Count" count={character} />
          <Count label="Sentence Count" count={0} />
          <Count label="Paragraph Count" count={0} />
        </div>

        <h2 className=" text-gray-700 font-bold text-start text-2xl mt-2">
          Platform Limits
        </h2>
        <div>
          <PlatformCount label="Facebook" count={63206} />
          <PlatformCount label="Instagram" count={2200} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsContainer;
