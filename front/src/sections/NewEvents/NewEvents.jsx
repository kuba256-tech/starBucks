import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const NewEvents = () => {
  return (
    <div className="NewEvents">
      <div className="NewEvents-top">
        <SectionHeader text={'Our New'} gradientText={'Events'} />
        <p>
          Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are
          ready to destroy the market
        </p>
      </div>
    </div>
  );
};

export default NewEvents;
