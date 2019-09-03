import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.style.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
