import axios from 'axios'
import {useEffect, useState} from 'react'
import Producto from './Producto'

function CatalogoProductos() {

    const[product, setProd] = useState([])

    useEffect(() => {
        axios.get('/api/products').then(res => {
            setProd(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const catalogoProductos = product.map(prod => {
        return(
            <div>
                <Producto prod={prod}/>
            </div>
        )
    })
    

    return (
        <div>
            <h2>Catalogo Productos</h2>
            {catalogoProductos}
        </div>
    )
}

export default CatalogoProductos