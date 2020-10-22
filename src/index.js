const { getArgs } = require("./getArgs");
const { outputFormatter } = require("./outputFormatter");
const { MAX_POSITION } = require("./constants");
const { stepIncrementMapper } = require("./stepIncrementMapper");

(async () => {
  try {
    const { startPosition, movements } = await getArgs();

    let start = {
      x: startPosition[0],
      y: startPosition[1],
    };

    const cleanedAxis = {
      [JSON.stringify(startPosition)]: true,
    };

    movements.forEach(m => {
      const compass = m[0];
      const step = Number(m[1]);

      for (i = 0; i < step; i++) {
        const currentStep = stepIncrementMapper[compass](start);
        const currentStepValues = Object.values(currentStep);
        const isOverThreshold = currentStepValues.find(
          v => v < -MAX_POSITION || v > MAX_POSITION
        );

        if (isOverThreshold) {
          break;
        }

        cleanedAxis[JSON.stringify(currentStepValues)] = true;
        start = currentStep;
      }
    });

    outputFormatter(Object.keys(cleanedAxis).length);
  } catch (error) {
    // Do nothing
  }
})();
