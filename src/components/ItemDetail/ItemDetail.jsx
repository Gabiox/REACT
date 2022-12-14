import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {
  const onAdd = (cantidad) => console.log(`${cantidad} Productos seleccionados`);
  return (
    <div className='row'>
       <div className='col m-5'>
           <h2>Nombre: {product.name}</h2>
           <img src="{product.foto}" className='w-50' alt="Producto" />
           <h3>Categoria: {product.categoria}</h3>
           <h4>Precio: {product.precio}</h4>
       </div>
       <div className='col'>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
       </div>
    </div>
  )
}

export default ItemDetail 