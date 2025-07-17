import React from 'react';
import backGround from '../../assets/images/products/contactsPic.svg';
import StarButton from '../../components/StarButton/StarButton';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const Contacts = () => {
  return (
    <>
      <div className="Contacts">
        <div className="contacts-right">
          <div className="Contacts-right-string">
            <div className="Contacts-string"></div>
            <StarButton text={'We Have'} size={17} />
          </div>
          <div className="Contacts-right-icon">
            <div className="Contacts-img-background"></div>
            <img src={backGround} alt="starbucks" />
          </div>
        </div>
        <div className="contacts-left">
          <div className="contact-left-top">
            <SectionHeader text={'Our'} gradientText={'Contacts'} />
            <p>
              Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the
              discount!
            </p>
          </div>
          <div className="contacts-left-footer">
            <p className="intagram">@supercoffee</p>
            <p className="call">+7-999-999-99-99</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
