export default function WeatherCard(props){

    return(<div className="weatherCard">
        
            <p>{props.date}</p>
            <img src={props.forecastCondition.icon} alt={""}/>
            <p>{props.forecastCondition.text}</p>

    </div>)
}