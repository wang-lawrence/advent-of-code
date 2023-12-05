import { readFile } from "node:fs/promises";

try {
  const data = await readFile("input.txt", "utf8");
  const inputs = data.trim().split("\n");
  let total = 0;
  for (let i = 0; i < inputs.length; i++) {
    // for (let i = 0; i < 5; i++) {
    let power = 1;
    const cubeMax = {
      red: 0,
      green: 0,
      blue: 0,
    };

    const games = inputs[i].split(":");
    const draws = games[1].split(";");
    // console.log(draws);
    for (let j = 0; j < draws.length; j++) {
      const cubes = draws[j].split(",");
      // console.log(cubes);
      for (let k = 0; k < cubes.length; k++) {
        const [num, color] = cubes[k].trim().split(" ");
        cubeMax[color] = Math.max(+num, cubeMax[color]);
      }
    }
    for (const cube in cubeMax) {
      power *= cubeMax[cube];
    }
    total += power;
    console.log(power, total);
  }
} catch (error) {
  console.log("fail to read content: ", error);
}
