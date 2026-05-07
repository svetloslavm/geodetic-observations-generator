/**
 * Configuration for the surveying measurements generator
 */
const config = {
  instrumentHeight: { min: 1.4, max: 1.65 }, // meters
  vsHeight: 1.3, // meters, fixed Vs height for all observations
  requiredPointNameLength: 6, // point length of a polygon or triangulation point
  baseZAngle: 100, // gradians
  rError: 0.002, // gradians
  zError: 0.002, // gradians
  distanceError: { min: 0.001, max: 0.005 }, // meters
};
