import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';


const App = (props) => {
  // const apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = c6543b38cde14c6bb8b2e7ac5f6ecf9a;

  const [progress, setProgress] = useState(0);

  const showLoading = (progress) => {
    setProgress(progress)
  }

  
  
  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={2}
        />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News showLoading={showLoading} key="general" pageSize={10} country={"in"} category={"general"} apiKey={apiKey} />} />
          <Route exact path="/newsapp" element={<News showLoading={showLoading} key="general" pageSize={10} country={"in"} category={"general"} apiKey={apiKey} />} />
          <Route exact path="/business" element={<News showLoading={showLoading} key="business" pageSize={10} country={"in"} category={"business"} apiKey={apiKey} />} />
          <Route exact path="/entertainment" element={<News showLoading={showLoading} key="entertainment" pageSize={10} country={"in"} category={"entertainment"} apiKey={apiKey} />} />
          <Route exact path="/health" element={<News showLoading={showLoading} key="health" pageSize={10} country={"in"} category={"health"} apiKey={apiKey} />} />
          <Route exact path="/science" element={<News showLoading={showLoading} key="science" pageSize={10} country={"in"} category={"science"} apiKey={apiKey} />} />
          <Route exact path="/sports" element={<News showLoading={showLoading} key="sports" pageSize={10} country={"in"} category={"sports"} apiKey={apiKey} />} />
          <Route exact path="/technology" element={<News showLoading={showLoading} key="technology" pageSize={10} country={"in"} category={"technology"} apiKey={apiKey} />} />
        </Routes>

      </Router>
    </>
  )
}


export default App