import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link,  } from 'react-router-dom'

function Producto({ producto }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/producto/${producto.id}`}>
                <Card.Img src={producto.imagen} />
            </Link>
            <Card.Body>
                <Link to={`/producto/${producto.id}`}>
                    <Card.Title as="div">
                        <strong>{producto.nombre}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3 ">
                        <Rating value={producto.rating} text={`${producto.numero_reviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    ${producto.precio}
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Producto
