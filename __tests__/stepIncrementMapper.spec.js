const { stepIncrementMapper } = require("stepIncrementMapper");

describe("stepIncrementMapper", () => {
  let axis;
  beforeEach(() => {
    axis = { x: 1, y: 1 };
  });

  it("stepIncrementMapper.E shud return obj with incremented x axis", () => {
    const result = stepIncrementMapper.E(axis);
    expect(result).toEqual({ x: 2, y: 1 });
  });

  it("stepIncrementMapper.W shud return obj with decremented x axis", () => {
    const result = stepIncrementMapper.W(axis);
    expect(result).toEqual({ x: 0, y: 1 });
  });

  it("stepIncrementMapper.N shud return obj with incremented y axis", () => {
    const result = stepIncrementMapper.N(axis);
    expect(result).toEqual({ x: 1, y: 2 });
  });

  it("stepIncrementMapper.S shud return obj with decremented x axis", () => {
    const result = stepIncrementMapper.S(axis);
    expect(result).toEqual({ x: 1, y: 0 });
  });
});
