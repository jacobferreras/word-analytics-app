import React from "react";

interface PlatformCountProps {
  label: string;
  count: number;
  limit: string;
}

export default function PlatformCount({
  label,
  count,
  limit,
}: PlatformCountProps) {
  return (
    <p className="text-gray-700 text-xl font-semibold">
      {label}({limit} Chars): <span className="text-blue-700">{count}</span>
    </p>
  );
}
