import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shopping from './Components/Shopping/Shopping'
import Products from './Components/Products/Products'
import Info from './Components/Info/Info'
import Copyright from './Components/Copyright/Copyright'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Shopping/>
        <Products/>
        <Info/>
        <Copyright/>
      </>
    )
  }
}