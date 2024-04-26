import { useEffect, useState } from "react";
import { IForecast } from "../types/IForcast";
import { K_CONST, W_CONST } from "../utils/constants";
import { icon_url } from "../utils/constants";


const WeatherPanel = ({ weatherData }: { weatherData: IForecast }) => {
  const { description, icon } = weatherData.weather[0];
  const { temp, humidity } = weatherData.main;
  const { speed,gust } = weatherData.wind;
  const {name }=weatherData
  const {country}=weatherData.sys

  const [date, setDate] = useState(new Date().toDateString());
  const [time, setTime] = useState(
    new Date().toLocaleString("en", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDate(date.toDateString());
      setTime(
        date.toLocaleString("en", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>    
      <div className="h-full grid grid-cols-1 gap-5">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <div>
              <img
                src={icon_url + icon + "@2x.png"}
                className="w-16 md:w-20 lg:w-24"
                alt={description}
              />
            </div>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold ml-2">
              {Math.floor(temp - K_CONST)} &deg;C
            </span>
          </div>
          <span className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center">{description}</span>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">{name}, {country}</h2>
        </div>
        <div className="flex justify-between gap-3 ">
          <span className="text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg text-center mt-2">{date}</span>
          <span className="text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg text-center  mt-2">Local time {time}</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="border w-[45%] rounded-lg bg-blue-600 flex justify-center items-center flex-col">
            <span className="text-white font-bold text-sm md:text-base lg:text-lg text-center mt-2">
              Wind Speed
            </span>
            <span className="text-white font-bold text-sm md:text-base lg:text-lg text-center mb-2">
              {Math.floor((gust || speed) * W_CONST)} Km/h
            </span>
          </span>
          <span className="border w-[45%] rounded-lg bg-green-600 flex justify-center items-center flex-col">
            <span className="text-white font-bold text-sm md:text-base lg:text-lg text-center mt-2">
              Humidity
            </span>
            <span className="text-white font-bold text-sm md:text-base lg:text-lg text-center mb-2">
              {humidity}%
            </span>
          </span>
        </div>

      </div>

    </>
  );
};

export default WeatherPanel;
