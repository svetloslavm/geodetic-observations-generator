# Geodetic Observations Generator

A JavaScript-based application for generating geodetic observations from coordinate points, including distances, angles, and surveying data for cadastral and engineering workflows.

## Project Structure

```
geodetic-observations-generator/
├── index.html                # Main HTML file
├── README.md                 # Markdown file
└── src/
    ├── main.js               # Application entry point (DOM handling)
    ├── config.js             # Configuration constants
    ├── utils.js              # Utility functions (randomBetween, normalizeAngle)
    ├── calculations.js       # Core math (direction, distance, observations)
    ├── observations.js       # Main generation logic (generateObservations)
    ├── formatters.js         # Output formatting functions
    └── parser.js             # Input parsing
```

## Usage

Open `index.html` in a web browser.

### Features

- **Input**: Enter survey points (TPLAN code) with format:

```txt
POINT X Y Z
110336 4777777.123 313333.123
110337 4778888.123 313444.123
   100 4779999.123 313555.123
```

- **Generate**: Click "Generate" to generate observations
- **Output**: Generated \*.dpi format observations with 2 faces and measurements, intended for use in TPLAN.

## Details

- **Target software**
  The generated \*.dpi observations are intended for use with TPLAN (ТПЛАН) – a specialized geodetic software application used in Bulgaria for processing and adjusting geodetic measurements in land surveying, cadastre, and construction projects.
