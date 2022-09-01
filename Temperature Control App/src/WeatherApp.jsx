import React from "react";
import "./styles.css";
import { useState } from "react";

const WeatherApp = () => {
  const [result, setResult] = useState(10);
  const [temperatureColor, setTemperatureColour] = useState("cold");
  const increment = () => {
    const newResult = result + 1;
    if (newResult > 15) {
      setTemperatureColour("hot");
    } else {
      if (newResult === 15) {
        setTemperatureColour("neutral");
      } else {
        setTemperatureColour("cold");
      }
    }
    setResult(newResult);
  };
  const decrement = () => {
    const newResult = result - 1;
    if (newResult > 15) {
      setTemperatureColour("hot");
    } else {
      if (newResult === 15) {
        setTemperatureColour("neutral");
      } else {
        setTemperatureColour("cold");
      }
    }
    setResult(newResult);
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <div className={`output ${temperatureColor}`}>{result}°C</div>
        </div>
        <div className="button-container ">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
