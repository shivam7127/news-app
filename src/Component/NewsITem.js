import React from 'react'
import {Link} from 'react-router-dom'

const NewsITem = (props) => {

  return (
    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 '>
      <div className="card mt-2 ">
       <img src= {props.pic ? props.pic:"asstes/imges.jpg"} alt="image not found" />
       <div className="card-body card-background text-light">
        <div className="card-title"> {props.title} </div>
        <div className="source">
            <p>{props.source}</p>
            <p>{new Date(props.date).toLocaleDateString()}</p>
        </div>
        <div className="card-text">
            <p>{props.description}</p>
                <Link to = {props.url}  target = "_blanK"  rel = "noreferror"  className = "btn background text-light">Read more</Link>
                
            
        </div>
       </div>

      </div>
    </div>
  )
}

export default NewsITem
