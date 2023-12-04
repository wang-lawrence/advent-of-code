import { readFile } from "node:fs/promises";

const cubeMax = {
  red: 12,
  green: 13,
  blue: 14,
};

try {
  const data = await readFile("input.txt", "utf8");
  const inputs = data.trim().split("\n");
  let total = 0;
  for (let i = 0; i < inputs.length; i++) {
    // for (let i = 0; i < 5; i++) {
    const games = inputs[i].split(":");
    const id = +games[0].split(" ")[1];
    const draws = games[1].split(";");
    // console.log(draws);
    drawLoop: for (let j = 0; j < draws.length; j++) {
      const cubes = draws[j].split(",");
      // console.log(cubes);
      for (let k = 0; k < cubes.length; k++) {
        const [num, color] = cubes[k].trim().split(" ");
        if (+num > cubeMax[color]) {
          total += id;
          break drawLoop;
        }
      }
    }
  }
  console.log(5050 - total);
} catch (error) {
  console.log("fail to read content: ", error);
}
