import React from 'react';

const CarouselComponent = ({ img, text }) => {
  return (
    <div className="NewEvents-item-content">
      <img src={img} alt="event_1" />
      <div className="item-content-info">
        <p>{text}</p>
        <button>more</button>
      </div>
    </div>
  );
};

export default CarouselComponent;
