import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './08-useReducer/intro-reducer'
import { MainApp } from './09-useContext/MainApp'
import { HomePage } from './09-useContext/HomePage'
import { AboutPage } from './09-useContext/AboutPage'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MainApp/>
  </BrowserRouter>
)
