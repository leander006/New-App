

import Navbar from "./component/Navbar/Navbar"
import React, {useState } from 'react'
import  News  from './component/News/News';
import NewsItem from "./component/NewsItems/NewsItem";
import env from "react-dotenv";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

const App = ()=>{
  // const [progress, setProgress] = useState(0)

//  const  apiKey =process.env.REACT_APP_NEWS_API
 

    return (

      <div>
    
      <Router>

     <Routes>
       <Route exact  path="/" element={< News  key="general"   category="general" country="in"  pageSize = "9" />} ></Route>
       <Route  path="/sports" element={< News     key="sport" category="sport" country="in"  pageSize = "9" />} ></Route>
       <Route path="/business" element={< News  key="business"   category="business" country="in"  pageSize = "9" />} ></Route>
       <Route  path="/entertainment" element={< News  key="entertainment"   category="entertainment" country="in"  pageSize = "9" />} ></Route>
       <Route  path="/health" element={< News   key="health" category="health" country="in"  pageSize = "9" />} ></Route>
       <Route  path="/science" element={< News  key="science"   category="science" country="in"  pageSize = "9" />} ></Route>
       <Route  path="/technology" element={< News  key="technology"   category="technology" country="in"  pageSize = "9" />} ></Route>
       </Routes>
       </Router>
        
      </div>
      
    )

}

export default App 