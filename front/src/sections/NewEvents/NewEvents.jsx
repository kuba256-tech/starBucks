import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { Carousel } from 'react-bootstrap';
import event_1 from '../../assets/images/eventsSection/event_1.svg';
import event_2 from '../../assets/images/eventsSection/event_2.svg';
import event_3 from '../../assets/images/eventsSection/event_3.svg';
import event_4 from '../../assets/images/eventsSection/event_4.svg';
import event_5 from '../../assets/images/eventsSection/event_5.svg';
import CarouselComponent from '../../components/Carousel/CarouselComponent';

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
      <div className="NewEvents-content">
        <div className="NewEvents-content-carousel">
          <Carousel interval={7000}>
            <Carousel.Item className="NewEvents-item">
              <div className="NewEvents-item-content">
                <img src={event_1} alt="event_1" />
                <div className="item-content-info">
                  <p>TWO COFFEE FOR 1 PRICE</p>
                  <button>more</button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="NewEvents-item">
              <CarouselComponent img={event_2} text={'KITCHEN TOUR'} />
            </Carousel.Item>
          </Carousel>
          <hr />
          <Carousel interval={4000}>
            <Carousel.Item className="NewEvents-item">
              <div className="NewEvents-item-content">
                <img src={event_3} alt="event_1" />
                <div className="item-content-info">
                  <p>FREE COFFEE FOR 3 COFFEE</p>
                  <button>more</button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="NewEvents-item">
              <div className="NewEvents-item-content">
                <img src={event_4} alt="event_1" />
                <div className="item-content-info">
                  <p>FREE COFFEE FOR 3 COFFEE</p>
                  <button>more</button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="NewEvents-item">
              <div className="NewEvents-item-content">
                <img src={event_5} alt="event_1" />
                <div className="item-content-info">
                  <p>WHERE ARE YOU CHOOSE US?</p>
                  <button>more</button>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default NewEvents;
