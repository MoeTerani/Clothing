import React from 'react';
import '../menu-item/menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className='background-image'
      ></div>
      <div className='content'>
        {/* // {title} equals  {props.tite} */}
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
