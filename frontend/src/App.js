/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Argos from './components/Argos'
import AllArgos from './components/AllArgos'
import {BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Edit from './components/Edit'


export default class App extends Component {
  render() {
    return (
      <div>
        
          <div className='jumbotron'>
           
            <h1 className='d-flex justify-content-center'>
            <img style ={{width: '90px', height: '30px'}}
            src ='https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png' 
            alt ='https://www.wildcodeschool.com'
            />
             <span style ={{position: 'relative', marginTop: '-10px'}}>Les Argonautes</span> 
            </h1>
          </div>
    
        <div className='container'>
        <Argos /> 
        <Router>
          <Switch>
            <Route path ='/update/:id'  component ={Edit}  />
          </Switch>
          </Router>
        <AllArgos />
        </div>

        <div className ='bg-danger p-3 mt-5' >
          <h6 className='text-center text-white'>Réalisé par Jason en Anthestérion de l'an 515 avant JC</h6>
        </div>
      </div>
     
    )
  }
}

