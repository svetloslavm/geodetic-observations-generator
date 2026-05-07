/**
 * Calculate the direction and distance between station and target
 * @param {Object} station - Station point with x, y coordinates
 * @param {Object} target - Target point with x, y coordinates
 * @param {number} orientationAngle - Orientation angle
 * @returns {Object} Object with baseDirection and distance
 */
function calculateDirectionAndDistance(
  station,
  target,
  orientationAngle,
) {
  const dy = target.y - station.y;
  const dx = target.x - station.x;

  const angleRad = Math.atan2(dy, dx);
  const headingAngle = normalizeAngle((angleRad * 200) / Math.PI);
  const directionExpression = headingAngle - orientationAngle;
  const baseDirection = normalizeAngle(directionExpression);

  const distance = Math.sqrt(dy * dy + dx * dx);

  return { baseDirection, distance };
}

/**
 * Create an observation for a target point
 * @param {number} baseDirection - Base direction angle
 * @param {number} distance - Measured distance
 * @param {boolean} isFace2 - Whether this is face 2 (second observation)
 * @returns {Object} Object with direction, zAngle, and measuredDistance
 */
function createObservation(baseDirection, distance, isFace2 = false) {
  return {
    direction: normalizeAngle(
      baseDirection +
        (isFace2 ? 200 : 0) +
        randomBetween(-config.rError, config.rError),
    ),
    zAngle: normalizeAngle(
      (isFace2 ? 400 - config.baseZAngle : config.baseZAngle) +
        randomBetween(-config.zError, config.zError),
    ),
    measuredDistance:
      distance +
      randomBetween(config.distanceError.min, config.distanceError.max),
  };
}
