export const Calc = (sample) => {
  let sampleArray = sample.split("");

  const constants = getConstants(sampleArray);
  const answer = executeFunction(constants);
  const groups = priorityOperations(constants);
  simplifyGroups(groups, constants);
};

const simplifyGroups = (groups, constants) => {
  let operationGroups = [];
  groups.forEach((group) => {
    const operations = constants.slice(group.open, group.close + 1);
    operationGroups.push(operations);
  });
  console.log(operationGroups);
};

const priorityOperations = (constants) => {
  let openIndexes = [];
  let closeIndexes = [];
  for (let i = 0; i < constants.length; i++) {
    if (constants[i] === "(") {
      openIndexes.push(i);
    }
    if (constants[i] === ")") {
      closeIndexes.push(i);
    }
  }

  let groups = [];
  for (let i = 0; i <= closeIndexes.length; i++) {
    for (let j = openIndexes.length - 1; j >= 0; j--) {
      if (openIndexes[j] < closeIndexes[i]) {
        groups.push({
          open: openIndexes[j],
          close: closeIndexes[i],
        });
        openIndexes.splice(j, 1);
        break;
      }
    }
  }
  return groups;
};

const executeFunction = (constants) => {
  let sum = constants[0];
  let operator = null;
  for (let i = 1; i < constants.length; i++) {
    if (constants[i] === "+") {
      operator = "+";
    } else if (constants[i] === "-") {
      operator = "-";
    } else {
      const number = constants[i];
      if (operator === "+") {
        sum += number;
      } else if (operator === "-") {
        sum -= number;
      }
    }
  }
  return sum;
};

const getConstants = (sample) => {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let constants = [];
  let currentConstant = "";
  for (let i = 0; i < sample.length; i++) {
    if (numbers.includes(sample[i])) {
      currentConstant += sample[i];
    } else if (currentConstant !== "") {
      constants.push(parseInt(currentConstant));
      currentConstant = "";
    }
    if (sample[i] === "+") {
      constants.push("+");
    } else if (sample[i] === "-") {
      constants.push("-");
    } else if (sample[i] === "*") {
      constants.push("*");
    } else if (sample[i] === "/") {
      constants.push("/");
    } else if (sample[i] === "(") {
      constants.push("(");
    } else if (sample[i] === ")") {
      constants.push(")");
    }
  }
  if (currentConstant !== "") {
    constants.push(parseInt(currentConstant));
  }

  return constants;
};
