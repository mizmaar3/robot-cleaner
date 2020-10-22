const fs = require("fs");
const { applyThreshold } = require("./utils");
const { MAX_NO_OF_COMMANDS } = require("./constants");

const getArgs = () =>
  new Promise(resolve => {
    const filename = process.argv[2];
    fs.readFile(`${__dirname}/../${filename}`, "utf8", (err, input) => {
      const data = input.split("\n");

      const noOfCommands = applyThreshold(
        Number(data[0]),
        0,
        MAX_NO_OF_COMMANDS
      );

      const startPosition = data[1].split(" ").map(Number);

      const movements = data.splice(2, noOfCommands).map(v => v.split(" "));

      const args = {
        startPosition,
        movements,
      };

      resolve(args);
    });
  });

exports.getArgs = getArgs;
