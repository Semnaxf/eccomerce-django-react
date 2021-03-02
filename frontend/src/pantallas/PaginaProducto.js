import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import Rating from '../componentes/Rating'
import axios from 'axios'

function PaginaProducto({ match }) {
    const [producto, setProducto] = useState([])

    useEffect(() => {

        async function fetchProducto() {
            const { data } = await axios.get(`/api/productos/${match.params.id}`)
            setProducto(data)
        }

        fetchProducto()

    }, [])

    return (
        <div>
            <Link to='/' className="btn btn-light my-3">Atrás</Link>
            <Row>
                <Col md={6}>
                    <Image src={producto.imagen} alt={producto.nombre} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{producto.nombre}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={producto.rating} text={`${producto.numero_reviews} reviews`} color={'#f8e825'} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Precio: ${producto.precio}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Descripción: {producto.descripcion}
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
                                        <strong>${producto.precio}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Existencia:</Col>
                                    <Col>
                                        {producto.stock > 0 ? 'Disponible' : 'No disponible'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className="btn-block" type='button' disabled={producto.stock == 0}>
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
