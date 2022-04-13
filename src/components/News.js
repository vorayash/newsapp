import React,{ useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './loading'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

const News =(props)=> {
    let {showLoading,country,category,apiKey,pageSize}=props;
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [emptyArticle, setemptyArticle] = useState(true);
    
    
       
    const capitalize = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    document.title = `${capitalize(props.category)} - NewsReady`;
   
    
    
    useEffect(async(props) => {
        setLoading(true);
        showLoading(30);
        let url1 = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
        let data = await fetch(url1);
        showLoading(70);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setPage(page+1);
        showLoading(100);
        setLoading(false);

      }, []);
    

    const updateNews = async () => {
        props.showLoading(30);
        let url1 = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url1);
        props.showLoading(70);
        let parsedData = await data.json();
        if(parsedData.articles.length==0)
        {
            setemptyArticle(false);
        }
        else{
        setArticles(articles.concat(parsedData.articles));
         }
        setPage(page+1);
        props.showLoading(100);
        
    }
   
        return (
            <>
            
                <div className="container text-center" style={{marginTop:"100px",marginBottom:"7px"}}>
                    <h2> NewsReady - {capitalize(props.category)} Top Headlines</h2>
                    {loading&&<h4 className="container text-center"><Loading /></h4>}
                </div>

                <InfiniteScroll
                    dataLength={articles.length}
                    next={updateNews}
                    hasMore={articles.length !== totalResults && emptyArticle }
                    loader={<h4 className="container text-center"><Loading /></h4>}
                    endMessage={
                        <p style={{ textAlign: "center", marginBottom:"40px" }}>
                          <b>End of News Results</b>
                        </p>
                    }
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                let date1 = new Date(element.publishedAt);

                                return <div className="col-lg-4 col-md-6 col-xs-12 my-3" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} url={element.url} author={element.author} date={date1.toGMTString()} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
               
            </>
        )
    
}

export default News

News.defaultProps ={
    country : 'in',
    pageSize : 8,
    category : 'general',
}

News.propTypes ={
    country : PropTypes.string,
    pageSize :PropTypes.number,
    category : PropTypes.string,
}