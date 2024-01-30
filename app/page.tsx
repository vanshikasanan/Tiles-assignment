"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const initialColors: string[] = ["#0000FF", "#008000", "#FFFF00", "#FFA500", "#FF0000"];
  const [colors, setColors] = useState<string[]>(initialColors);
  const [changeHistory, setChangeHistory] = useState<string[][]>([initialColors]);

  const handleColorChange = (index: number) => {
    const colorIndex = Math.floor(Math.random() * initialColors.length);
    const randomColor = initialColors[colorIndex];
    if (randomColor !== colors[index]) {
      const newColors = [...colors];
      newColors[index] = randomColor;
      setColors(newColors);
      setChangeHistory(prevHistory => [...prevHistory, newColors]);
    }
  };

  const handleReverseColors = () => {
    if (changeHistory.length > 1) {
      const updatedHistory = [...changeHistory];
      updatedHistory.pop();
      const previousColors = updatedHistory[updatedHistory.length - 1];
      setColors(previousColors);
      setChangeHistory(updatedHistory);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-evenly mt-12 main-container">
      <div className="flex flex-wrap justify-center gap-8">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-16 h-16"
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(index)}
          />
        ))}
      </div>
      <button className="bg-slate-300 p-4" onClick={handleReverseColors}>Reverse Colors</button>
    </div>
  );
}


