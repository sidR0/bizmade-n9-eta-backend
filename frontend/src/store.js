import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createDataReducer } from './reducers/combinedReducer.js';

import {

    productCreateReducer,
    productReviewCreateReducer,
    productTopRatedReducer,

    productUpdateReducer,

    productListReducer,
    productDetailsReducer,

    productDeleteReducer,

} from './reducers/productReducers'

import {

    userRegisterReducer,

    userLoginReducer,
    userDetailsReducer,

    userUpdateReducer,
    userUpdateProfileReducer,
    userListReducer,

    userDeleteReducer,

} from './reducers/userReducers'

import {

    orderCreateReducer,

    orderListMyReducer,
    orderListReducer,

    orderDetailsReducer,
    orderPayReducer,
    orderDeliverReducer,

} from './reducers/orderReducers'

import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({

    productList: productListReducer,
    productDetails: productDetailsReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,

    cart: cartReducer,

    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userUpdate: userUpdateReducer,
    userDelete: userDeleteReducer,

    orderCreate: orderCreateReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,

})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}

// const combinedReducer = combineReducers({
//     productList: createDataReducer('products'),
//     userList: createDataReducer('users')
// });

// const initialState = {};
// const initialState = {
//     products: [],
//     users: []
// };

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
}

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store