const { applyThreshold } = require("utils");

describe("applyThreshold", () => {
  it("should apply default min threshold and return value", () => {
    const result = applyThreshold(-2);
    expect(result).toBe(0);
  });

  it("should apply provided min threshold and return value", () => {
    const result = applyThreshold(-100, 1);
    expect(result).toBe(1);
  });

  it("should apply default max threshold and return value", () => {
    const result = applyThreshold(100);
    expect(result).toBe(1);
  });

  it("should apply provided max threshold and return value", () => {
    const result = applyThreshold(100, 0, 5);
    expect(result).toBe(5);
  });
});
