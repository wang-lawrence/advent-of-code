import { readFile } from "node:fs/promises";

const example = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];

const hash = {
  one: "1",
  eno: "1",
  two: "2",
  owt: "2",
  three: "3",
  eerht: "3",
  four: "4",
  ruof: "4",
  five: "5",
  evif: "5",
  six: "6",
  xis: "6",
  seven: "7",
  neves: "7",
  eight: "8",
  thgie: "8",
  nine: "9",
  enin: "9",
};

const re = /one|two|three|four|five|six|seven|eight|nine|[1-9]/;
const reverseRe = /eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|[1-9]/;

try {
  let sum = 0;
  const data = await readFile("input.txt", "utf8");
  const inputs = data.split("\n");
  for (let i = 0; i < inputs.length; i++) {
    let currentStr = "";
    const matches = inputs[i].match(re);
    if (matches) {
      const firstDigit = inputs[i].match(re)[0];
      currentStr += isNaN(+firstDigit) ? hash[firstDigit] : firstDigit;
      const secondDigit = inputs[i]
        .split("")
        .reverse()
        .join("")
        .match(reverseRe)[0];
      currentStr += isNaN(+secondDigit) ? hash[secondDigit] : secondDigit;
    }
    if (currentStr.length) {
      sum += +currentStr;
    }
  }
  console.log("solution is", sum);
} catch (error) {
  console.log("fail to read content: ", error);
}
