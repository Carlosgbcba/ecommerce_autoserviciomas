import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import {Link} from 'react-router-dom'

function Producto({prod}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{prod.name} {prod.brand}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${prod.price}</Card.Subtitle>
                <Card.Text>
                {prod.description}
                </Card.Text>
                <Button variant="success">Comprar</Button>{' '}
                {/* <Link className="btn btn-danger" to={`/editarproducto/${prod._id}`}>Editar</Link> */}
            </Card.Body>
            </Card>
        </div>

    )
}


export default Producto
