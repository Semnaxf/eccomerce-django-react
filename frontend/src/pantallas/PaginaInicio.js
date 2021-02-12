import React from 'react'
import productos from '../productos'
import Producto from '../componentes/Producto'
import { Row, Col } from 'react-bootstrap'


function PaginaInicio() {
    return (
        <div>
            <h1>Productos nuevos</h1>
            <Row>
                {productos.map(producto=>(
                    <Col key={producto._id} sm={12} md={6} lg={4} xl={3}>
                        <Producto producto={producto} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default PaginaInicio
