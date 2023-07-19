import {applyMiddleware, createStore} from 'redux'
import rootreducer from 
import {thunk} from 'thunk'
let middleware=[thunk]

let Store=createStore(rootreducer(applyMiddleware(...middleware)))
export default Store