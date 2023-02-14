// import logo from './logo.svg';
import './App.css';
import "./styles/css/all.css";
// import "animate.css/animate.css"
// import "animate.css/animate.min.css"
// import {Animate} from 'react-animated-css'
// import { Animate } from "animate.css-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/js/custom.js"
import "bootstrap/dist/js/bootstrap.js";
import Turf from './component/Turf';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AllTurfs from './component/AllTurfs';
import Header from './component/Header';
import Login from './component/Login';
import SingleTurf from './component/SingleTurf';
import Signup from './component/Signup';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route path="/index" element={<Turf />} />
          <Route path="/turfs" element={<AllTurfs />} />
          <Route path="/singleturf" element={<SingleTurf />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
