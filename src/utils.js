const applyThreshold = (value, minValue = 0, maxValue = 1) => {
  const newValue = value < minValue ? minValue : value;
  return newValue > maxValue ? maxValue : newValue;
};

exports.applyThreshold = applyThreshold;
