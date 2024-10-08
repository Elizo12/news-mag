import alternate from '../assets/news.jpeg';

const NewsItem = ({title, description, src, url}) =>{
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-2 py-2 px-2" style={{maxWidth: "320px"}}>
            <img src={src?src:alternate} style={{height: "200px", width: "305px"}} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description? description.slice(0, 90): "This news is unavailable for now, try again later"}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
};

export default NewsItem;