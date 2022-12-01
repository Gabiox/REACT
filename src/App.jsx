import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const Titulo = () => {
  return (
    <h2>Hola</h2>
  )
}

const Segundotitulo = () => {
  return (
    <h1>HELLO</h1>
  )
}

function App(){
return (
  <div>
    <Segundotitulo/>
    <Titulo/>
    </div>
)
}
export default App