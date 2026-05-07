/**
 * Parse input text into an array of points
 * @param {string} raw - Raw input text with point data
 * @returns {Array} Array of points with name, x, y properties
 */
function parseInput(raw) {
  const result = [];

  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const [name, xStr, yStr] = trimmed.split(/\s+/);
    if (!name || !xStr || !yStr) continue;

    const x = Number(xStr);
    const y = Number(yStr);

    if (Number.isNaN(x) || Number.isNaN(y)) continue;

    result.push({ name, x, y });
  }

  return result;
}
