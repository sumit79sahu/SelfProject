import AshImage from "../assets/images/Ash.jpg";
import ClearImage from "../assets/images/Clear.jpg";
import CloudsImage from "../assets/images/Clouds.jpg";
import DrizzleImage from "../assets/images/Drizzle.jpg";
import DustImage from "../assets/images/Dust.jpg";
import FogImage from "../assets/images/Fog.png";
import HazeImage from "../assets/images/Haze.jpg";
import RainImage from "../assets/images/Rain.jpg";
import SandImage from "../assets/images/Sand.jpg";
import SmokeImage from "../assets/images/Smoke.jpg";
import SnowImage from "../assets/images/Snow.jpg";
import SquallImage from "../assets/images/Squall.jpg";
import SunnyImage from "../assets/images/Sunny.jpg";
import ThunderstormImage from "../assets/images/Thunderstorm.jpg";
import TornadoImage from "../assets/images/Tornado.jpg";

export const getBackgroundImage = (image: string) => {
  switch (image) {
    case "Ash":
      return AshImage;
    case "Clear":
      return ClearImage;
    case "Clouds":
      return CloudsImage;
    case "Drizzle":
      return DrizzleImage;
    case "Dust":
      return DustImage;
    case "Fog":
      return FogImage;
    case "Haze":
      return HazeImage;
    case "Rain":
      return RainImage;
    case "Sand":
      return SandImage;
    case "Smoke":
      return SmokeImage;
    case "Snow":
      return SnowImage;
    case "Squall":
      return SquallImage;
    case "Sunny":
      return SunnyImage;
    case "Thunderstorm":
      return ThunderstormImage;
    case "Tornado":
      return TornadoImage;
    default:
      return ClearImage; // Default image URL or empty string
  }
};
