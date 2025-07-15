import React from 'react';

const WeHaveItem = ({ img, title, text }) => {
  return (
    <div className="wehave-item">
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <span>{text}</span>
    </div>
  );
};

export default WeHaveItem;
