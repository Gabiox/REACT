 import { useState } from 'react'
import reactLogo from './assets/react.svg' 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css' 

import Navbar from './components/Navbar/NavBar/NavBar';
import CartContainer from './containers/CartContainer/CartContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartContext } from './context/cartContext';





function App(){
  
    return(
        <CartContext.Provider value={[]}>
      <div> 
        <BrowserRouter>
        <Navbar/>
         <Routes>
          <Route path='/' element= {<ItemListContainer />}/> 
          <Route path='/categoria/:categoriaId' element= {<ItemListContainer />}/>
          <Route path='/detail/:productoId' element= {<ItemDetailContainer/>}/>
          <Route path='/cart' element= {<CartContainer />}/> 
        </Routes> 
        </BrowserRouter> 
      </div>
      </CartContext.Provider>
    )
} 
export default App