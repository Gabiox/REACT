 import { useState } from 'react'
import reactLogo from './assets/react.svg' 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css' 

import Navbar from './components/Navbar/NavBar/NavBar';
import CartContainer from './containers/CartContainer/CartContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
  
import { BrowserRouter, Route, Routes } from 'react-router-dom'




function App(){
    return(
      <div> 
        <BrowserRouter>
        <Navbar/>
         <Routes>
          <Route path='./lista' element= {<ItemListContainer saludo={saludo}/>}/>
          <Route path='./cart' element= {<CartContainer />}/>
        </Routes> 
        </BrowserRouter> 
      </div>
    )
} 
export default App