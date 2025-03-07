import React from 'react'
import ReactDOM from 'react-dom/client'

let seconds = 0; 


let countdown = false; 
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

setInterval(()=>{
 seconds = seconds + 1
 ReactDOM.createRoot(document.getElementById('root')).render(
  <Home time = {seconds}/>



 )}, 1000)

 Document.addEventListener