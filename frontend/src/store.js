import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { L_productoReducer } from './reducers/productoReducers'

const reducer = combineReducers({
    producto: L_productoReducer,
})

const initialState = {}

const middleWare = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleWare))
    )

export default store