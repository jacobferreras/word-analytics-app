import React from "react";

interface PlatformCountProps {
  label: string;
  count: number;
}

export default function PlatformCount({ label, count }: PlatformCountProps) {
  return (
    <p className="text-gray-700 text-xl font-semibold">
      {label}({count} Chars): <span className="text-blue-700">{count}</span>
    </p>
  );
}
