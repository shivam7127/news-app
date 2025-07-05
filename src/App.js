
import { useState } from 'react';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  let [search , setSearch] = useState("")
  let [language, setLanguage] = useState("hi")
  function getLanguage(input) {
   setLanguage(input)
  }
  let getSearch =(input) =>{
      setSearch(input)
  }
  return (
    <>
    <BrowserRouter>
    <Navbar getLanguage = {getLanguage}getSearch = {getSearch} />
    n<Routes>
     <Route path = "" element = {<Home language = {language} q= {search ? search: "All"}/>}/>
     <Route path = "/All" element = {<Home language = {language} q= {search ?search  : "All"}/>}/>
     <Route path = "/Politics" element = {<Home language = {language} q = {search ? search  : "Politics"}/>}/>
    <Route path = "/Crime" element = {<Home language = {language} q = {search ? search  : "Crime"}/>}/>
    <Route path = "/India" element = {<Home language = {language} q = {search ? search  : "India"}/>}/>
    <Route path = "/Jokes" element = {<Home language = {language} q = {search ? search  : "Jokes"}/>}/>
    <Route path = "/Mahakumbh" element = {<Home language = {language} q = {search ? search  : "Mahakumbh"}/>}/>
    <Route path = "/World" element = {<Home language = {language} q = {search ? search  : "World"}/>}/>
    <Route path = "/Technology" element = {<Home language = {language} q = {search ? search  : "Technology"}/>}/>
    <Route path = "/Cricket" element = {<Home language = {language} q = {search ? search  : "Cricket"}/>}/>
    <Route path = "/Education" element = {<Home language = {language} q = {search ? search  : "Education"}/>}/>
    <Route path = "/Science" element = {<Home language = {language} q = {search ? search  : "Science"}/>}/>
              
      
      
      
      
      
      
      
      
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
