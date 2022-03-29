import React, {useEffect, useState} from 'react'
import './news.css';
import NewsItem from '../NewsItems/NewsItem'

import Spinner from '../Spinner/Spinner';

import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from '../Navbar/Navbar';

const News = ({category,country,pageSize})=>{
    const [toparticles, setTopArticles] = useState([]);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
   const NEWS_API='9c5992f032a4429da9c21a32255c8448';


useEffect(() => {
    const News = async ()=> {
        // props.setProgress(10);
const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${NEWS_API}&page=${page}&pageSize=${pageSize}`; 
        // setLoading(true)
        let data = await fetch(url);
        // props.setProgress(30);
        let parsedData = await data.json()
        setLoading(false);
        // props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        // setLoading(false)
        // props.setProgress(100);
    }

    News();
}, [])

const fetchMoreData = async () => {   
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${ NEWS_API}&page=${page+1}&pageSize=${pageSize}`;
    setPage(page+1) 
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
        return (
            <>
            <Navbar/>
            {!loading ?  <div className='main'>
           
                    <h3>Today's News -{category}</h3>
                 <div className="container">
                 <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={articles?.length !== totalResults}
          loader={<Spinner/>}>
                         <div className="row">
                            {/* {articles?.map((m) =>( */}
                                <NewsItem title={'m?.title'} desc={'m?.description'} img={'m?.urlToImage'} more={'m?.url'} date={'m?.publishedAt'} author={'m?.author'}/>
                                <NewsItem title={'m?.title'} desc={'m?.description'} img={'m?.urlToImage'} more={'m?.url'} date={'m?.publishedAt'} author={'m?.author'}/>
                                <NewsItem title={'m?.title'} desc={'m?.description'} img={'m?.urlToImage'} more={'m?.url'} date={'m?.publishedAt'} author={'m?.author'}/>
                                <NewsItem title={'m?.title'} desc={'m?.description'} img={'m?.urlToImage'} more={'m?.url'} date={'m?.publishedAt'} author={'m?.author'}/>
                            {/* // ))}   */}
                        </div>
                        </InfiniteScroll>
                    </div> 
            </div> :<Spinner/>}
            </>
        )
    
}

export default News