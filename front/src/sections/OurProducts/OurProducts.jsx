import React from 'react';
import lobbyPic from '../../assets/images/products/lobbyPic.svg';
import StarButton from '../../components/StarButton/StarButton';

const OurProducts = () => {
  return (
    <div className="ourProducts">
      <div className="ourProducts-delicious">
        <div className="delicious-left">
          <img src={lobbyPic} alt="LobbyPic" />
          <StarButton text={'we have'} size={18} />
        </div>
        <div className="delicious-right">
          <h4>
            We make <span>delicious</span>
          </h4>
          <span>
            Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are
            ready to destroy the market
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
