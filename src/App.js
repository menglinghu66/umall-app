import React from 'react'
import {Switch,Route,Redirect} from "react-router-dom"

import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Index from "./pages/Index/Index"
import Detail from "./pages/Detail/Detail"
import List from "./pages/List/List"
import "./App.styl"

export default function App() {
  return (
    <div className="app">
  {/* 一级出口 */}
  <Switch>
    <Route path="/login" component={Login}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/index" component={Index}></Route>
    <Route path="/detail" component={Detail}></Route>
    <Route path="/list/:name/:id" component={List}></Route>
    <Redirect to="/login"></Redirect>

  </Switch>

    </div>
  )
}
