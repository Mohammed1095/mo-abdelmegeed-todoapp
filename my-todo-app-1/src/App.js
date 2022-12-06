import React from "react";
import "./App.css";
import Openweather from "./components/openWeather/openweather";
import Form from "./components/Form";

function App() {
  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <Form />
      <Openweather />
    </div>
  );
}

export default App;
