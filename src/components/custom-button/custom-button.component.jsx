import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
