import WeatherCard from "./WeatherCard";

export default function Widget(props){

    console.log(props.data);
    
    var forecasts = props.data.forecast.forecastday;
    var location = props.data.location;
    var current = props.data.current;


    return(
    <div className="weatherWidget"> 
    <div className="main">
        <h1>Today's Weather  in {location.country}</h1>
        <h3>{current.last_updated.split(' ')[0]}</h3>
        <img className ="icon" src={current.condition.icon} alt={""}/>
        <h2>{current.condition.text}</h2>
        <h2>{current.temp_c}&deg;C</h2>
    </div>
        <h1>Weather Forecasts</h1>
        <ul className="weatherList">
            {forecasts.map((forecast,index)=> index !== 0 ? <WeatherCard date={forecast.date} forecastDay={forecast.day} /> : null) }  
        </ul>
    </div>)
}