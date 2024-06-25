export default function Card(props){
    const article= props.article;
    
    return( <div className="newsCard">
                <a href={article.url} className="title">
                    {article.title}
                </a>
            </div>)
}

