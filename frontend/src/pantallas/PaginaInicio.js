import React, { useState, useEffect } from 'react'
import Producto from '../componentes/Producto'
import Loader from '../componentes/Loader'
import Mensaje from '../componentes/Mensaje'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listaProductos } from '../actions/productosAction'

function PaginaInicio() {
    const dispatch = useDispatch()

    const productosLista = useSelector(state => state.producto)

    const { error, loading, productos } = productosLista

    useEffect(() => {
        dispatch(listaProductos())
    }, [])

    return (
        <div>
            <h1>Productos nuevos</h1>
            { loading ? <Loader />
                : error ? <Mensaje variant='danger'>{error}</Mensaje>
                    :
                    <Row>
                        {productos.map(producto => (
                            <Col key={producto._id} sm={12} md={6} lg={4} xl={3}>
                                <Producto producto={producto} />
                            </Col>
                        ))}
                    </Row>
            }
        </div>
    )
}

export default PaginaInicio
