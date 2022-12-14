import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import { gFetch } from '../../DATA/gFetch'



const ItemListContainer = ({ saludo }) => {
    const [ products, setProducts ] =   useState([])
    const [ loading, setLoading ] = useState(true) 
    const { categoriaId } = useParams()
    
    useEffect(()=>{
        if (categoriaId) {
            gFetch() 
            .then( resp =>  setProducts(resp.filter(product => product.categoria === categoriaId )) )   
            .catch( err => console.log( err ) )
            .finally(()=> setLoading(false))             
        } else {
            gFetch() 
            .then( resp =>  setProducts(resp) )   
            .catch( err => console.log( err ) )
            .finally(()=> setLoading(false))            
        }   

    },  [categoriaId])
 
console.log(categoriaId)    
  return (
    <>
        { loading ? 
            <h2>Cargando productos</h2> 
                :
      <ItemList products={products}/>
        }
        
    </>
  )
}

export default ItemListContainer



 