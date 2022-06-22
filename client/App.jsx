import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './components/Nav.jsx';
import Login from './components/Login.jsx';
import MainPage from './components/MainPage.jsx';
import Visualization from "./components/Visualization.jsx";
import SignUp from "./components/signup.jsx";

import {useFetchJobsQuery} from './features/jobs/jobs-API-slice';

import './stylesheets/stylesheet.css';


function App (props){
  const {data = [], isFetching} = useFetchJobsQuery();

    return (
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path='/visual' element={<Visualization />}></Route>
            {/* <Route path='cards' element={<CardsView />}></Route> */}
            <Route path='/main' element={<MainPage />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route exact path='/' element={<Login />}></Route>
          </Routes>
        </Router>
      </div>
    )
  
}

export default App;