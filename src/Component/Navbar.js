import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    let [search, setSearch] = useState("")
    function postSearch(e){
      e.preventDefault()
      props.getSearch(search)
    }
    
    
  return (
    <nav className="navbar navbar-expand-lg background">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to ="/" onClick= {()=>props.getSearch("")}>News App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className=" nav-link text-light active " aria-current="page" to ="/All"onClick = {()=>props.getSearch("")}>All</button>
        </li>
        <li className="nav-item">
          <Link className=" nav-link text-light" to ="/Crime" onClick = {()=>props.getSearch("")}>Crime</Link>
        </li>
        <li className="nav-item">
          <Link  className=" nav-link text-light" to ="/Politics" onClick = {()=>props.getSearch("")}>Politics</Link>
        </li>
        <li className="nav-item">
          <Link  className=" nav-link text-light" to ="/Technology" onClick = {()=>props.getSearch("")}>Technology</Link>
        </li>
        <li className="nav-item">
          <Link  className=" nav-link text-light" to ="/Cricket" onClick = {()=>props.getSearch("")}>Cricket</Link>
        </li>
        <li className="nav-item">
          <Link  className=" nav-link text-light" to ="/Education" onClick = {()=>props.getSearch("")}>Education</Link>
        </li>
        <li className="nav-item">
          <Link  className=" nav-link text-light" to ="/Science" onClick = {()=>props.getSearch("")}>Science</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className=" nav-link text-light dropdown-toggle" to ="/Other" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to ="/India">India</Link></li>
            <li><Link className="dropdown-item" to ="/Jokes">Jokes</Link></li>
            <li><Link className="dropdown-item" to ="/World">World</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to ="/MahaKumbh">MahaKumbh</Link></li>
            
          </ul>
          </li>
          <li className="nav-item dropdown">
          <Link className=" nav-link text-light dropdown-toggle" to ="/Other" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </Link>
          <ul className="dropdown-menu">
          <li> <button className="dropdown-item" onClick={()=>props.getLanguage("en")}>English</button></li>
          <li><button className="dropdown-item" onClick={()=> props.getLanguage("hi")} >Hindi</button></li>
            
        
            
          </ul>

        </li>
    
        
      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=> postSearch(e)}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name = "search" onChange ={(e)=>setSearch(e.target.value)}/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
