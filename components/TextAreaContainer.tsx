import React from "react";
import TextArea from "./TextArea";
import ClearTextButton from "./ClearTextButton";

export default function TextAreaContainer() {
  return (
    <div className="card w-96 bg-white card-xl shadow-sm">
      <div className="card-body">
        <TextArea />
        <ClearTextButton />
      </div>
    </div>
  );
}
