import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import TopBar from './component/TopBar/TopBar';
import { RepeatRounded } from '@material-ui/icons';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Index=()=>{
  return(
    <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path ="/topBar" element ={<TopBar />}  />
  </Routes>
</BrowserRouter>
</React.StrictMode>
  )
}
ReactDOM.render(
  <Index />,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
