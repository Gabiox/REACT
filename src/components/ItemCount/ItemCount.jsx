import { useState } from "react"


export const ItemCount = ({ stock = 5 }) => {
    const [ contador, setCount ] = useState(0) 
    
  
     const botonCount = () => {
      if(setCount < stock){
        seteoContador(contador + 1)
    }
  }

    
    
    return (
        <center>
        <button className="btn btn-outline-primary" onClick={botonCount}>+</button>     
        <label htmlFor="">{contador}</label>
        <button className="btn btn-outline-primary" onClick={botonCount} > - </button> 
        <br/>    
        <button className="btn btn-outline-primary" onClick={botonCount} > Agregar al carrito </button>     
        <br></br>
    </center>
    )
}

export default ItemCount