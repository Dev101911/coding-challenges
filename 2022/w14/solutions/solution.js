// North - South - East - West
const directionMap = new Map([
  ["NORTH", 1],
  ["SOUTH", -1],
  ["EAST", 2],
  ["WEST", -2],
]);
const cutToTheChase = (directions) => {
  const newArray = [];
  for (let i = 0; i < directions.length; i++) {
    if (
      directionMap.get(newArray[newArray.length - 1]) +
        directionMap.get(directions[i]) !==
      0
    ) {
      newArray.push(directions[i]);
    } else {
      newArray.pop();
    }
  }
  return newArray;
};

module.exports = cutToTheChase;
