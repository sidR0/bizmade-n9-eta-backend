import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createDataReducer } from './reducers/combinedReducer.js';

const combinedReducer = combineReducers({
    productList: createDataReducer('products'),
    userList: createDataReducer('users')
});

// const initialState = {};
const initialState = {
    products: [],
    users: []
};

const store = createStore(
    combinedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);



export default store