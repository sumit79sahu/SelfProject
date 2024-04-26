import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WeatherForecastDashboard from "./pages/WeatherForecastDashboard";
function App() {
  return (
    <>
      <WeatherForecastDashboard />
      <ToastContainer/>
    </>
  );
}
export default App;
