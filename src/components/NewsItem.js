import React from 'react'
import NewsImage from './news.jpeg'

const NewsItem = (props) => {
    
        let { title, description, imgUrl, url, author, date, source } = props;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={imgUrl ? imgUrl : NewsImage} alt="NaN" />
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger text-light" style={{ right: "0px", zIndex: "1" }}>
                        {source}
                    </span>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {date}</small></p>
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
