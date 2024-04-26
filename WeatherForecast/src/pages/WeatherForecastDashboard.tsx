import WeatherPanel from "../component/WeatherPanel";
import { useEffect, useState } from "react";
import { ILocation } from "../types/ILocation";
import { Status } from "../utils/status";
import { IForecast } from "../types/IForcast";
import SearchBar from "../component/SearchBar";
import { getBackgroundImage } from "../utils/getBackgroundImage";
import Loading from "../component/Loading";
import { errorToast } from "../utils/errorToast";
const WeatherForecastDashboard = () => {
  const [status, setStatus] = useState(Status.pending);
  const [weatherData, setWeatherData] = useState<IForecast | null>(null);

  const fetchWeather = async ({ city }: ILocation) => {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const result: IForecast = await data.json();
      if (result.message) {
        errorToast(result.message);
      } else {
        setWeatherData(result);
      }

      setStatus(Status.fullfiled);
    } catch (error) {
      setStatus(Status.rejected)
    }
  };

  useEffect(() => {
    const fetchUserIP = async () => {
      try {
        const { ip }: { ip: string } = await fetch(
          "https://api64.ipify.org?format=json"
        ).then((res) => res.json());
        const userLocation: ILocation = await fetch(
          `http://ip-api.com/json/${ip}`
        ).then((res) => res.json());
        fetchWeather(userLocation);
      } catch (error) {
        setStatus(Status.rejected);
      }
    };
    fetchUserIP();
  }, []);

  if (status === Status.pending) return <Loading />;
  if (status === Status.rejected) return <h1>Something went wrong</h1>;
  return (
    <div className="h-screen bg-gradient-to-b from-gray-900 to-slate-900 flex flex-col justify-center items-center">
      <h1 className="py-3 sm:py-6 text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold">
        Weather Forecast Dashboard
      </h1>
      <div className="rounded-3xl min-h-[75vh] w-[80%] md:w-[60%] lg:w-[65%] grid grid-cols-1 lg:grid-cols-4">
        <div
          style={{
            backgroundImage: `url(${getBackgroundImage(
              (weatherData as IForecast)?.weather?.[0]?.main
            )})`,
          }}
          className="rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl p-5 lg:p-10 min-h-52 lg:h-full col-span-2 bg-no-repeat bg-center bg-cover text-white flex flex-col justify-center items-center"
        >
          <SearchBar fetchWeather={fetchWeather} />
        </div>
        <div className="bg-slate-300  col-span-2 rounded-b-3xl round-t-none lg:rounded-bl-none lg:rounded-r-3xl p-10">
          <WeatherPanel weatherData={weatherData as IForecast} />
        </div>
      </div>
    </div>
  );
};

export default WeatherForecastDashboard;
