const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [[[1, 2, 3, 4]], [2, 3, 4]],
    [[[1, 2, 3, 1, 4]], [2, 3, 1, 4]],
    [[[1, 1, 1, 1]], [1, 1, 1]],
    [[[2, 1, 2, 1, 2, 1, 2, 1]], [2, 2, 1, 2, 1, 2, 1]],
  ])("%j = %j", (inputs, result) => {
    expect(evaluate(...inputs)).toStrictEqual(result);
  });

  test.each(spec.map(({ inputs, result }) => [inputs, result]))(
    "%j = %j",
    (inputs, result) => {
      expect(evaluate(...inputs)).toStrictEqual(result);
    }
  );
});
