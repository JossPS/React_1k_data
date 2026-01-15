export async function fetchWeatherData(){
    const latitude = 40.7128; 
    const longitude = -74.0060;

    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 60);
    const formatDate = (date) => date.toISOString().split('T')[0];

    const url =
    "https://archive-api.open-meteo.com/v1/archive" +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&start_date=${formatDate(startDate)}` +
    `&end_date=${formatDate(endDate)}` +
    "&hourly=temperature_2m" +
    "&timezone=auto";

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Error fetching weather data");
    }

    const data = await response.json();
    return data;
}