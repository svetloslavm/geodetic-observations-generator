/**
 * Generate observations from a list of points
 * @param {Array} points - Array of survey points
 * @returns {string} Formatted observations output
 */
function generateObservations(points) {
  let result = '';
  const totalPoints = points.length;

  for (let i = 0; i < totalPoints; i++) {
    const station = points[i];

    console.log(station.name)

    // Skip station for detail points that don't meet the name length requirement
    if (station.name.length < config.requiredPointNameLength) {
      continue;
    }

    const instrumentHeight = randomBetween(
      config.instrumentHeight.min,
      config.instrumentHeight.max,
    ).toFixed(3);
    result += formatStationLine(station.name, instrumentHeight) + '\n';

    const orientationAngle = randomBetween(0, 400);

    const stationLines = [];

    for (let j = 0; j < totalPoints; j++) {
      if (i === j) {
        continue;
      }

      const target = points[j];
      const { baseDirection, distance } = calculateDirectionAndDistance(
        station,
        target,
        orientationAngle,
      );

      const obs1 = createObservation(baseDirection, distance);
      stationLines.push(
        formatObservationLine(
          target.name,
          config.vsHeight.toFixed(3),
          obs1.direction.toFixed(4),
          obs1.zAngle.toFixed(4),
          obs1.measuredDistance.toFixed(3),
        ) + '\n',
      );

      if (target.name.length === config.requiredPointNameLength) {
        const obs2 = createObservation(baseDirection, distance, true);
        stationLines.push(
          formatObservationLine(
            target.name,
            config.vsHeight.toFixed(3),
            obs2.direction.toFixed(4),
            obs2.zAngle.toFixed(4),
            obs2.measuredDistance.toFixed(3),
          ) + '\n',
        );
      }
    }

    if (stationLines.length > 0) {
      const lastIndex = stationLines.length - 1;
      // Mark the last observation for the station
      stationLines[lastIndex] = stationLines[lastIndex].replace(
        /[ \t]*\n$/,
        ' *\n',
      );
      result += stationLines.join('');
    }
  }

  return result;
}
