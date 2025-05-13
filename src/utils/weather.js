export const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "맑음 ☀️",
    1: "대체로 맑음 🌤️",
    2: "부분적으로 흐림 ⛅",
    3: "흐림 ☁️",
    45: "안개 🌫️",
    48: "짙은 안개 🌫️",
    51: "약한 이슬비 🌦️",
    53: "보통 이슬비 🌦️",
    55: "강한 이슬비 🌦️",
    61: "약한 비 🌧️",
    63: "보통 비 🌧️",
    65: "강한 비 🌧️",
    71: "약한 눈 🌨️",
    73: "보통 눈 🌨️",
    75: "강한 눈 🌨️",
  };
  return weatherCodes[code] || "알 수 없음";
};

export const formatHourlyData = (weatherData) => {
  if (!weatherData) return [];
  // 밑에 코드 채워주세요
  const time = weatherData.hourly.time;
  const temperature2m = weatherData.hourly.temperature_2m;
  const weatherCode = weatherData.hourly.weather_code;
  const hourlyData = [];
  for (let i = 0; i < 12; i++) {
    hourlyData.push({
      time: time[i].toString(),
      temperature: temperature2m[i],
      weatherCode: weatherCode[i],
    });
  }
  return hourlyData;
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) return [];
  const time = weatherData.daily.time;
  const temperature2mMax = weatherData.daily.temperature_2m_max;
  const weatherCode = weatherData.daily.weather_code;
  const dailyData = [];
  for (let i = 0; i < 7; i++) {
    dailyData.push({
      time: time[i].toString(),
      temperature: temperature2mMax[i],
      weatherCode: weatherCode[i],
    });
  }

  return dailyData;
};
