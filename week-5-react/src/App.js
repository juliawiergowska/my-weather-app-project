import React from "react";

import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Weather App </h1>
     <button className="btn btn-primary">Hello</button>

     <footer>
          This project was coded by{" "}
          
            Julia Wiergowska
        
          and is{" "}
          <a
            href="https://github.com/jwiergowska/weather-4thproject"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
     
     </div>
  );
}

export default App;
