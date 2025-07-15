import Achievement from '../../components/Achievement/Achievement';
import GreenBackground from '../../components/GreenBackground/GreenBackground';
import heartIcon from '../../assets/images/icons/heart.svg';
import rockekIcon from '../../assets/images/icons/rocket.svg';
import cashIcon from '../../assets/images/icons/cash.svg';
import WeHaveItem from '../../components/WehaveItems/WeHaveItem';

const HomeSection = () => {
  return (
    <div className="homeSection">
      <div className="homeSection-content-right">
        <button>
          <GreenBackground></GreenBackground>
          <p className="plus-button">+</p>
        </button>
      </div>
      <div className="homeSection-content-left">
        <div className="homeSection-heading">
          <h2>
            New Cafe <br /> by <span>StarBucks</span>
          </h2>
          <p>
            Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!
          </p>
        </div>
        <div className="homeSection-information">
          <div className="homeSection-buttons">
            <button>Select a coffee</button>
            <button>More</button>
          </div>
          <div className="homeSection-information-data">
            <Achievement value={'9k'} information={'Premium Users'} />
            <Achievement value={'2k'} information={'Happy Customer'} />
            <Achievement value={'28'} information={'Awards'} />
          </div>
        </div>
      </div>
      <div className="homeSection-content-footer">
        <div className="wehave-items">
          <WeHaveItem img={heartIcon} title={'Tasty'} text={'We have the most delicious coffee'} />
          <WeHaveItem img={rockekIcon} title={'Fast'} text={'Our cafe will serve you quickly'} />
          <WeHaveItem img={cashIcon} title={'Available'} text={'Cafe will serveat the most pleasant prices'} />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
