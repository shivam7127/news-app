import React , {useEffect, useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

import NewsITem from './NewsITem'

function Home(props) {
    let [articles, setArticles] = useState([])
    let [totalResults, setTotalResults] = useState(0)
    let [page , setpages] = useState(1)
    let  API_KEY  =  process.env.REACT_APP_API_KEY
    async function getAPIData() {
        let response = await fetch(`${API_KEY}`)
        response =await response.json()
        if(response.status === "ok"){
            setArticles(response.articles)
            setTotalResults(response.totalResults)
        }
    } 
    let  fetchData =async()=>{
        setpages(page +1)
        let response = await fetch(`${API_KEY}`)
        response = await response.json()
        if(response.status === "ok"){
            setArticles(articles.concat(response.articles))
        }
    }
    useEffect(()=>{
        getAPIData()
    }, [props])
  return (
    <>
   
   <div className="container-fluid">
    <h5 className='text-light m-2 text-capatalize p-2 text-center background'> {props.q} Article </h5>
    <InfiniteScroll 
    dataLength = {articles.length}
    next = {fetchData}
    hasMore = {articles.length < totalResults}
    loader = {
        <div className='my-5 text-center'> 
        <div className="spinner-border" role = "status">
            <span className="visibility-hiddden"> Loading.... </span>

        </div>

        </div>

    

    }
   >
 <div className="row">
   {articles.map((item,index)=>{
    return <NewsITem
    key = {index}
    title = {item.title}
    description = {item.description}
    url = {item.url}
    date = {item.publishedAt}
    pic= {item.urlToImage}
    source = {item.source?.name}
    
    
    
     />
   })}
 </div>
 </InfiniteScroll>
 
 
 </div>

 
 

 </>
   
  )
}

export default Home
