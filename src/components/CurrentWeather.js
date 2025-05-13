import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  const getCurrentWeather = () => {
    const time = new Date().getHours(); // 현재 시각 알아내기
    const hourlyData = weatherData.hourly;
    const nowWeather = {
      // hourly 데이터에서 현재 시각을 기준으로 data를 가져옴, 현재 13시라면 hourly 데이터에서 13번째 index에 13시 정보가 있음1
      temperature: hourlyData.temperature_2m[time],
      time: hourlyData.time[time],
      weatherCode: hourlyData.weather_code[time],
    };

    return nowWeather;
  };
  if (isLoading) {
    return <div>현재날씨 로딩중...</div>;
  }
  const currentData = getCurrentWeather();

  return (
    <CurrentWeatherWrapper>
      <h3>현재 위치 : 서울</h3>
      <Temperature>{Math.floor(currentData.temperature)}°C</Temperature>
      <WeatherCode>
        {getWeatherDescription(currentData.weatherCode)}
      </WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;
