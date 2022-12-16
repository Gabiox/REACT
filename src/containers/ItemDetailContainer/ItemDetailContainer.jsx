import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { gFetch } from "../../DATA/gFetch";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const {productoId} = useParams ()
    /* console.log(productoId); */
    

    useEffect(()=>{
        gFetch(productoId)
        .then(resp => setProduct(resp))
        .catch(error=> console.log(error))
    }, [])

    return (
        <ItemDetail product={product}
        />
    )
}

export default ItemDetailContainer
