import CartActionTypes from './cart.types';

export const toggleCartHidden = payload => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
