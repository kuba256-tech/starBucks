import SectionHeader from '../../components/SectionHeader/SectionHeader';

import picture1 from '../../assets/images/logo/starBucksCup1.svg';
import picture2 from '../../assets/images/logo/starBucksCup2.svg';
import picture3 from '../../assets/images/logo/starBucksCup3.svg';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const NewProducts = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="NewProducts">
      <div className="NewProducts-top">
        <SectionHeader text={'New Our'} gradientText={'Products'} />
        <p>
          Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!
        </p>
      </div>
      <div className="NewProducts-cards">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          <Carousel.Item className="NewProducts-card">
            <div className="NewProducts-card-content">
              <img src={picture1} alt="picture" />
              <div className="card-content-data">
                <p className="card-title">Cappuccino</p>
                <span className="card-information">Our cafe will serve you quickly</span>
                <div className="card-content-price">
                  <p className="card-price">7,45$</p>
                  <span className="card-information">330 ml</span>
                </div>
                <button>Buy Product</button>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="NewProducts-card">
            <div className="NewProducts-card-content">
              <img src={picture2} alt="picture" />
              <div className="card-content-data">
                <p className="card-title">Espresso</p>
                <span className="card-information">Our cafe will serve you quickly</span>
                <div className="card-content-price">
                  <p className="card-price">4,45$</p>
                  <span>330 ml</span>
                </div>
                <button>Buy Product</button>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="NewProducts-card">
            <div className="NewProducts-card-content">
              <img src={picture3} alt="picture" />
              <div className="card-content-data">
                <p className="card-title">Frapuchino</p>
                <span className="card-information">Our cafe will serve you quickly</span>
                <div className="card-content-price">
                  <p className="card-price">5,45$</p>
                  <span>330 ml</span>
                </div>
                <button>Buy Product</button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default NewProducts;
