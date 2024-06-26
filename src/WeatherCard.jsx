export default function WeatherCard(props){

    return(<div className="weatherCard">
        
            <p>{props.date}</p>
            <img src={props.forecastDay.condition.icon} alt={""}/>
            <p>{props.forecastDay.condition.text}</p>
            <p>{props.forecastDay.avgtemp_c}&deg;C</p>
            
    </div>)
}