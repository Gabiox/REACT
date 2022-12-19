import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css'


const ItemDetail = ({product}) => {
   const onAdd = (cantidad) => console.log(`${cantidad} Productos seleccionados`); 
  return (
    
   <div className='row'>
       <div className='col-m-5'>
          <div id='detail'>
         <h2>Nombre: {product.name}</h2>
         <img id='fotoDetail' src={product.foto} alt="Imagen de producto"/>
         <h3>Categoria: {product.categoria}</h3>
         <h3>Precio: {product.precio}</h3>
         </div>
           <ItemCount stock={5} initial={1} onAdd={onAdd}/>
       </div>

       
   </div>
  )
}


export default ItemDetail 