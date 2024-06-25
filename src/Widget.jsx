import WeatherCard from "./WeatherCard";

export default function Widget(props){
    
    var forecasts = props.data.forecast.forecastday;
    var location = props.data.location;


    return(
    <div className="weatherWidget"> 
    <div className="main">
        <h1>Weather Forecasts in {location.country}</h1>
        <h3>{forecasts[0].date}</h3>
        <img className ="icon" src={forecasts[0].day.condition.icon} alt={""}/>
        <h2>{forecasts[0].day.condition.text}</h2>
    </div>
        <ul className="weatherList">
            {forecasts.map((forecast,index)=> index !== 0 ? <WeatherCard date={forecast.date} forecastCondition={forecast.day.condition} /> : null) }  
        </ul>
    </div>)
}