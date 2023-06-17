"use client";
import React, { useState } from "react";
import { Calc } from "@/app/calculations";
import LeetCode from "@/app/LeetCode";

const SimpleCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    const data = Calc(inputValue);
    setAnswer(data);
  };

  return (
    <div className="h-screen w-full flex-col gap-5 justify-center items-center flex bg-gray-500 ">
      <div className="flex  gap-2 items-center   ">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-2 rounded-sm"
        />
        <button onClick={handleSubmit} className="p-2 bg-teal-500 rounded-sm">
          Calculate
        </button>
      </div>
      <h1>{answer}</h1>
    </div>
  );
};

export default SimpleCalculator;
