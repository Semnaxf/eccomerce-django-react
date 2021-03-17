import axios from 'axios'
import {
    LISTA_PRODUCTO_REQUEST,
    LISTA_PRODUCTO_SUCCESS,
    LISTA_PRODUCTO_FAIL,
} from "../constants/productoConstantes";


export const listaProductos = () => async (dispatch) => {

    try {
        
        dispatch({ type: LISTA_PRODUCTO_REQUEST })

        const { data } = await axios.get('/api/productos')

        dispatch({ 
            type: LISTA_PRODUCTO_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({ 
            type: LISTA_PRODUCTO_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }

}