# React JS Developer Assessment – The 1K Data Challenge

## Overview
This project is a React application built to fetch, process, and visualize a dataset containing more than 1,000 data points.  


The application displays 60 days of hourly weather data (~1464 points) in a single chart, rendered all at once without lazy loading.

---

## Data Source
- **API:** Open-Meteo (Archive API)
- **Data type:** Historical hourly temperature data
- **Range:** Last 60 days
- **Volume:** 1464 data points

The Open-Meteo Archive API was chosen because it provides free, reliable historical data and allows dynamic date ranges.

---

## Rendering Strategy
- **Library:** Recharts (SVG-based charting library for React)
- All data points are loaded into memory at once and passed directly to the chart.
- SVG rendering was intentionally chosen to clearly expose rendering and interaction costs with a large dataset.

---

## Performance Considerations
- Data transformation is handled using "useMemo" to avoid unnecessary recalculations on re-renders.
- Array methods (map) are used efficiently to transform raw API data into chart-ready data.
- Chart dots are disabled to reduce the number of rendered SVG nodes.
- ResponsiveContainer is used to ensure efficient re-rendering on window resize.

---

## Interaction
- Tooltip interaction remains responsive with all 1,000+ points rendered.
- Hover behavior follows the cursor smoothly without noticeable lag.
- The chart resizes efficiently when the browser window changes size.

---

## Tech Stack
- React 18
- Vite
- JavaScript
- Recharts

---

## Running the Project Locally

1. Clone the repository:
```bash
git clone https://github.com/JossPS/React_1k_data.git
```
2. Install dependencies:
```bash
npm install
```

3. Start de server:
```bash
npm run dev
```

4. open the aplication in the browser:

http://localhost:5173

5. Live Demo
https://react-1k-data.vercel.app/
