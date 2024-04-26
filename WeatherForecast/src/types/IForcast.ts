type Temperature = {
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

type Sys = {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;

};

type Weather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};
type Wind = {
  deg: number;
  speed: number;
  gust: number;
};

export interface IForecast {
  name: string;
  main: Temperature;
  weather: Weather[];
  wind: Wind;
  sys:Sys,
  timezone:number;
  visibility: number;
  message?:string
}
