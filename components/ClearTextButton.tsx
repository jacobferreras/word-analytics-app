import React from "react";

interface ClearTextButtonProps {
  onClick: () => void;
}

const ClearTextButton = ({ onClick }: ClearTextButtonProps) => {
  return (
    <button
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-xl bg-red-500"
      onClick={onClick}
    >
      Clear Text
    </button>
  );
};

export default ClearTextButton;
