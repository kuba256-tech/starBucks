import React from 'react';

const Achievement = ({ value, information }) => {
  return (
    <div className="homeSection-achievement">
      <p>
        {value}
        <span>+</span>
      </p>
      <span className="achivement-info">{information}</span>
    </div>
  );
};

export default Achievement;
