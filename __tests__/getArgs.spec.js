const { getArgs } = require("getArgs");

process.argv.push("__tests__/mockInput.txt");

describe("getArgs", () => {
  it("should return expect arguments", async () => {
    const args = await getArgs();

    const expectedArgs = {
      startPosition: [10, 10],
      movements: [
        ["E", "1"],
        ["W", "2"],
        ["N", "3"],
        ["S", "4"],
        ["E", "1"],
      ],
    };

    expect(args).toEqual(expectedArgs);
  });

  it("should return only requested number of commands", async () => {
    const args = await getArgs();
    expect(args.movements.length).toBe(5);
  });
});
