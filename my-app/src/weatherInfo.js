import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather';
const defaults = {
     icon: 'CLEAR_DAY',
     color: 'white',
     size: 100,
     animate: true
   };
function WeatherInfo(props){
return(
     <React.Fragment>
          <div className="col-6 side-bg text-center py-4">
          <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
    <h2 className="text-white py-2">{props.weatherName}</h2>
    <div className="d-flex flex-wrap">
         <div className="d-flex col-12 py-4 ">
              <div className="text-white"><strong>Humidity</strong></div>
              <div className="text-white ml-auto">{props.humidity}%</div>
              <div></div>
         </div>
         <div className=" d-flex col-12 py-4">
              <div className="text-white"><strong>Visibility</strong></div>
              <div className="text-white ml-auto">{props.visibility} mi</div>
              <div></div>
         </div>
         <div className="d-flex col-12 py-4 ">
              <div className="text-white"><strong>Wind Speed</strong></div>
              <div className="text-white ml-auto">{props.windSpeed}km/h</div>
              <div></div>
         </div>
         <div className="d-flex col-12 py-4 ">
              <div className="text-white"><strong>Feels Like</strong></div>
              <div className="text-white ml-auto"> {props.feelsLike}°C</div>
              <div></div>
         </div>
         <div className=" d-flex col-12 py-4">
              <div className="text-white"><strong>Maximum Temp</strong></div>
              <div className="text-white ml-auto">{props.maxTemp}°C</div>
              <div></div>
         </div>

    </div>
          </div>
     </React.Fragment>
              
              
            
);
}

export default WeatherInfo