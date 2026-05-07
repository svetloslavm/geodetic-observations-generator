# Land Surveying Generator

A JavaScript-based generator for surveying measurements in geodesy.

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

- **Input**: Enter survey points (TPLAN code) with format: `POINT X Y Z` (one per line). Example: `110336 4778357.269 313482.704`
- **Generate**: Click "Generate" to generate observations
- **Output**: Generated \*.dpi format observations with 2 faces and measurements, intended for use in TPLAN.

## Details

- **Target software**
  The generated \*.dpi observations are intended for use with TPLAN (ТПЛАН) – a specialized geodetic software application used in Bulgaria for processing and adjusting geodetic measurements in land surveying, cadastre, and construction projects.
