import { useEffect, useState } from "react";
import Card from "./Card";

console.log();

export default function App() {
  var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=hk&' +
          'apiKey=' + process.env.REACT_APP_NEWS_API_KEY;

  var req = new Request(url);

  const [Article, setArticle] = useState('')

  useEffect(()=>{
    fetch(req)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
  },[])

  useEffect(()=>{console.log(Article)},[Article]);
  

  return (<div className="app"><h1>News</h1>
        {Article !== '' ? Article.map((articles,index)=>(<Card key={index} article={articles} />)) : null}
    </div>
  );
}

