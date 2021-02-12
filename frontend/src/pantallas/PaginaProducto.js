import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem  } from 'react-bootstrap'
import Rating from '../componentes/Rating'
import productos from '../productos'

function PaginaProducto({ match }) {
    const producto = productos.find((p) => p._id == match.params.id)
    return (
        <div>
            <Link to='/' className="btn btn-light my-3">Atrás</Link>
            <Row>
                <Col md={6}>
                    <Image src={producto.image} alt={producto.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{producto.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={producto.rating} text={`${producto.numReviews} reviews`} color={'#f8e825'}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Precio: ${producto.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Descripción: {producto.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Precio:</Col>
                                    <Col>
                                        <strong>${producto.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Existencia:</Col>
                                    <Col>
                                        {producto.countInStock > 0 ? 'Disponible' : 'No disponible'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className="btn-block" type='button' disabled={producto.countInStock == 0}>
                                    Añadir al carrito
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                </Col>
            </Row>
        </div>
    )
}

export default PaginaProducto
