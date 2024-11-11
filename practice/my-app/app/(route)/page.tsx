"use client";

import { useState } from "react";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("");
  const options = [
    {
      value: "all",
      label: "모든 타입",
    },
    {
      value: "legacy",
      label: "Legacy",
    },
    {
      value: "version1",
      label: "Version 1",
    },
    {
      value: "version2",
      label: "Version 2",
    },
    {
      value: "version3",
      label: "Version 3",
    },
  ];
  return (
    <div className="bg-background text-foreground w-full h-screen">
      <main className="flex justify-center items-center flex-col gap-16"></main>
    </div>
  );
}
