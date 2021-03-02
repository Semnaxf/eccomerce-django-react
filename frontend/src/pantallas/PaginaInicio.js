import React, { useState, useEffect } from 'react'
import Producto from '../componentes/Producto'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'


function PaginaInicio() {
    const [productos, setProductos] = useState([])

    useEffect(() => {

        async function fetchProductos() {
            const { data } = await axios.get('/api/productos')
            setProductos(data)
        }

        fetchProductos()

    }, [])

    return (
        <div>
            <h1>Productos nuevos</h1>
            <Row>
                {productos.map(producto => (
                    <Col key={producto._id} sm={12} md={6} lg={4} xl={3}>
                        <Producto producto={producto} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default PaginaInicio
