/**
 * Generate a random number between min and max
 * @param {number} min - Minimum value (inclusive)
 * @param {number} max - Maximum value (inclusive)
 * @returns {number} Random number between min and max
 */
function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

/**
 * Normalize an angle to the range [0, 400) gradians
 * @param {number} angle - Angle in gradians
 * @returns {number} Normalized angle
 */
function normalizeAngle(angle) {
  const normalized = angle % 400;
  return normalized < 0 ? normalized + 400 : normalized;
}
