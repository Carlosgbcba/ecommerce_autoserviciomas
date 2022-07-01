import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function AgregarProducto() {

    const[producto, setProducto] = useState('')
    const[marca, setMarca] = useState('')
    const[descripcion, setDescripcion] = useState('')
    const[precio, setPrecio] = useState()
    const[categoria, setCategoria] = useState('')
    const[idFoto, setIdFoto] = useState('')
    
    function agregarProducto () {
        var product = {
            name: producto,
            brand: marca,
            description: descripcion,
            price: precio,
            category: categoria,
            photoId: idFoto,
        }

        
        axios.post('/api/products', product)
        .then(res => {
            Swal.fire('Listo!', 'El producto se agrego con exito')
        })
        .then(err => { console.log(err) })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='mt-4'>
                    <h2>Agregar producto</h2>
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Nombre</label>
                        <input type='text' className='form-control' value={producto} onChange={(e) => {setProducto(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Marca</label>
                        <input type='text' className='form-control' value={marca} onChange={(e) => {setMarca(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Descripcion</label>
                        <input type='text' className='form-control' value={descripcion} onChange={(e) => {setDescripcion(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Precio</label>
                        <input type='text' className='form-control' vaue={precio} onChange={(e) => {setPrecio(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Categoria</label>
                        <input type='text' className='form-control' value={categoria} onChange={(e) => {setCategoria(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>idFoto</label>
                        <input type='text' className='form-control' value={idFoto} onChange={(e) => {setIdFoto(e.target.value)}}></input>
                    </div>

                    <button  onClick={agregarProducto} className='btn btn-success'>Agregar Producto</button>
                </div>
            </div>
        </div>
    )
}

export default AgregarProducto