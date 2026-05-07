/**
 * Pad a value to the left with spaces
 * @param {*} value - Value to pad
 * @param {number} width - Total width
 * @returns {string} Padded string
 */
function padLeft(value, width) {
  const text = String(value);
  return text.padStart(width, ' ');
}

/**
 * Format a station line for the output
 * @param {string} name - Station name
 * @param {string} instrumentHeight - Instrument height
 * @returns {string} Formatted station line
 */
function formatStationLine(name, instrumentHeight) {
  const nameCol = padLeft(name, 6);
  return nameCol + ' Vi ' + instrumentHeight;
}

/**
 * Format an observation line for the output
 * @param {string} name - Target point name
 * @param {string} vsHeight - Vs height
 * @param {number} direction - Direction angle
 * @param {number} zAngle - Z angle
 * @param {number} distance - Measured distance
 * @returns {string} Formatted observation line
 */
function formatObservationLine(
  name,
  vsHeight,
  direction,
  zAngle,
  distance,
) {
  const nameCol = padLeft(name, 6);
  const rCol = padLeft(direction, 8);
  const zCol = padLeft(zAngle, 8);
  const sCol = padLeft(distance, 7);

  return (
    nameCol +
    ' Vs ' +
    vsHeight +
    ' R ' +
    rCol +
    ' Z ' +
    zCol +
    ' S ' +
    sCol
  );
}
