import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useMemo } from 'react';
import { useWeatherData } from './hooks/useWeatherData.js';
import './App.css'

function App() {
  const { data, loading, error } = useWeatherData();
  const chartData = useMemo(() => {
    if (!data) return [];

    const times = data.hourly.time;
    const temperatures = data.hourly.temperature_2m;
    
    return times.map((time, index) => ({
      time,
      temperature: temperatures[index],
    }));
  }, [data]);

  console.log("chartData length:", chartData.length);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log("time length:", data.hourly.time.length);
  console.log("temp length:", data.hourly.temperature_2m.length);

  console.log(
    "Puntos:",
    data.hourly.time.length,
    data.hourly.temperature_2m.length
  );

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h1>Temperature over time</h1>
      <p style={{ opacity: 0.7 }}>
        60 days of hourly temperature data (1464 points)
      </p>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <XAxis dataKey="time" hide />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#8884d8"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    
  )
}

export default App
