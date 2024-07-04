import { useEffect, useState } from "react";
import Card from "./NewsCard";
import Widget from "./Widget";

export default function App() {
  var urlNews = new URL('https://newsapi.org/v2/top-headlines?') + new URLSearchParams({
    country: 'hk',
    apiKey: process.env.REACT_APP_NEWS_API_KEY,
  })
  
  var urlWeather = new URL('https://api.weatherapi.com/v1/forecast.json?') + new URLSearchParams({
    key: process.env.REACT_APP_WEATHER_API_KEY,
    q: 'hk',
    days: 7,
  })

  const [Article, setArticle] = useState('');
  const [Weather, setWeather] = useState('');

  useEffect(()=>{
    fetch(urlNews)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
  },[])

  useEffect(()=>{
    fetch(urlWeather,{method: "GET",})
      .then((response) => response.json())
      .then((data) => setWeather(data));
  },[])
  

  return (<div className="app">
        {Weather !== '' ? <Widget data ={Weather}></Widget> : null}
        <h1>Top News Headlines</h1>
        {Article !== '' ? Article.map((articles,index)=>(index<5 ? <Card key={index} article={articles} /> : null)) : null}
    </div>
  );
}

