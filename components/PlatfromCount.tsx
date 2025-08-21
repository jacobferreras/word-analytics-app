import React from "react";

interface PlatformCountProps {
  label: string;
  count: number;
  limit: string;
  icon: string;
}

export default function PlatformCount({
  label,
  count,
  limit,
  icon,
}: PlatformCountProps) {
  return (
    <div>
      <h2 className="text-blue-700 font-semibold text-center text-5xl mb-4">
        {count}
      </h2>
      <h2 className="text-3xl text-black text-center">
        <i className={`${icon}`}></i>
      </h2>
      <p className="text-gray-700 text-xl font-bold text-center">
        {label}({limit} Chars)
      </p>
    </div>
  );
}
