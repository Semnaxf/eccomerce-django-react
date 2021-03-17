import {
    LISTA_PRODUCTO_REQUEST,
    LISTA_PRODUCTO_SUCCESS,
    LISTA_PRODUCTO_FAIL,
} from "../constants/productoConstantes";

export const L_productoReducer = (state = { productos: [] }, action) => {
    switch (action.type) {
        case LISTA_PRODUCTO_REQUEST:
            return { loading: true, productos: [] };

        case LISTA_PRODUCTO_SUCCESS:
            return { loading: false, productos: action.payload };

        case LISTA_PRODUCTO_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};