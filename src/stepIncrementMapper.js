const stepIncrementMapper = {
  E: ({ x, y }) => ({
    x: x + 1,
    y,
  }),

  W: ({ x, y }) => ({
    x: x - 1,
    y,
  }),

  N: ({ x, y }) => ({
    x,
    y: y + 1,
  }),

  S: ({ x, y }) => ({
    x,
    y: y - 1,
  }),
};

exports.stepIncrementMapper = stepIncrementMapper;
