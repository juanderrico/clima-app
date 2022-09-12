import React  from "react";
import './App.css';
import { AppUI} from "./components/AppUI/AppUI.js"
import {WeatherContext, WeatherProvider} from "./components/weathercontext/WeatherContext.js"
function App() {
  
  return (
    <WeatherProvider>

      <WeatherContext.Consumer>
        {value =>(<AppUI></AppUI>)
          
        }
      
      </WeatherContext.Consumer>
    </WeatherProvider>
  );
}

export default App;
