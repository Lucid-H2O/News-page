import { useEffect, useState } from "react";
import Card from "./NewsCard";
import Widget from "./Widget";
import img from './assets/—Pngtree—location vector icon_4015251.png'

export default function App() {
  
  const [ArticleURL, setArticleURL] = useState(
    new URL('https://newsapi.org/v2/top-headlines?') + new URLSearchParams({
      country: 'hk',
      apiKey: process.env.REACT_APP_NEWS_API_KEY,
    })
  );
  const [WeatherURL, setWeatherURL] = useState(
    new URL('https://api.weatherapi.com/v1/forecast.json?') + new URLSearchParams({
      key: process.env.REACT_APP_WEATHER_API_KEY,
      q: 'hk',
      days: 7,
    })
  );
  const [Article, setArticle] = useState('');
  const [Weather, setWeather] = useState('');

  useEffect(()=>{
    fetch(ArticleURL)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
  },[ArticleURL])

  useEffect(()=>{
    fetch(WeatherURL,{method: "GET",})
      .then((response) => response.json())
      .then((data) => setWeather(data));
  },[WeatherURL])
  
  function getLocation() {
    var selectedLocation = JSON.parse(document.getElementById("locationSelect").value) ;
    setArticleURL(
      new URL('https://newsapi.org/v2/top-headlines?') + new URLSearchParams({
        country: selectedLocation.country,
        apiKey: process.env.REACT_APP_NEWS_API_KEY,
      })
    )
    setWeatherURL(
      new URL('https://api.weatherapi.com/v1/forecast.json?') + new URLSearchParams({
        key: process.env.REACT_APP_WEATHER_API_KEY,
        q: selectedLocation.q,
        days: 7,
      })
    )
  }

  return (
  <div className="app">
    <div className="menu">
        <img className="menu-image" src={img} alt="Menu Icon"/>
        <select className="menu-options" id="locationSelect">
          <option value='{"country":"au","q":"Australia"}'>Australia</option>
          <option value='{"country":"cn","q":"China"}'>China</option>
          <option value='{"country":"hk","q":"HongKong"}'>Hong Kong</option>
          <option value='{"country":"id","q":"Indonesia"}'>Indonesia</option>
          <option value='{"country":"jp","q":"Japan"}'>Japan</option>
          <option value='{"country":"kr","q":"Korea"}'>Korea</option>
          <option value='{"country":"my","q":"Malaysia"}'>Malaysia</option>
          <option value='{"country":"nz","q":"New-Zealand"}'>New Zealand</option>
          <option value='{"country":"ph","q":"Philippines"}'>Philippines</option>
          <option value='{"country":"sg","q":"Singapore"}'>Singapore</option>
        </select>
        <button className="menu-btn" onClick={getLocation}>Get Selected Location</button>
    </div>
    <div className="column left">
      {Weather !== '' ? <Widget data={Weather}></Widget> : null}
    </div>
    <div className="column right">
      <h1>Top News Headlines</h1>
      {Article !== '' ? Article.map((articles,index)=>(index < 8 ? <Card key={index} article={articles} /> : null)) : null}
    </div>
        
  </div>
  );
}

