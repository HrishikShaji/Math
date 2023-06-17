"use client";

import React from "react";

const LeetCode = () => {
  var interpret = function (command) {
    let interpreted = "";

    for (let i = 0; i < command.length; i++) {
      if (command[i] === "G") {
        interpreted += "G";
      } else if (command[i] === "(" && command[i + 1] === ")") {
        interpreted += "o";
        i++;
      } else if (command[i] === "(" && command[i + 1] === "a") {
        interpreted += "al";
        i += 3;
      }
    }
    return interpreted;
  };
  return (
    <div>
      <button onClick={() => interpret("G()(al)")}>Leetcode</button>
    </div>
  );
};

export default LeetCode;
