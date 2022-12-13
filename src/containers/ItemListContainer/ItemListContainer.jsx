import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
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

    }, [categoriaId])

    console.log(categoriaId)    
  return (
    <>
         <h2>{ saludo }</h2> 
       
        { loading ? 
            <h2>Cargando productos ...</h2> 
                :
                <div 
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                >
                    {
                        products.map( product =>    <div            
                            style={{ marginLeft: 100}}
                            className='col-md-3'
                            key={product.id}
                        >   
                             <Link to={`/detail/${product.id}`} > 
                                
                                <div className="card w-100 mt-5" >
                                    <div className="card-header">
                                        {`${product.name} - ${product.categoria}`}
                                    </div>
                                    <div className="card-body">
                                        <img src={product.foto} alt='' className='w-50' />
                                        {product.precio}                                                            
                                    </div>
                        
                                </div>

                             </Link> 
                                            
                            
                    </div>  
) 
                    }
                </div>
            }

        
    </>
  )
}

export default ItemListContainer



 