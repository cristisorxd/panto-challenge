import {ADD_TO_CART, DELETE_FROM_CART} from "../actions/actions";

const initialState = {
  cartItems: 0,
};

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART: 
            return {...state, cartItems: state.cartItems + 1};
        case DELETE_FROM_CART:
            return {...state, cartItems: state.cartItems - 1};
        default:
            return state;
    }
};

export default cartReducer;