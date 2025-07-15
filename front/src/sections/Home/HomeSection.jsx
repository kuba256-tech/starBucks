import starbucksCup from '../../assets/images/logo/starBucksCup.svg';
import GreenBackground from '../../components/GreenBackground/GreenBackground';

const HomeSection = () => {
  return (
    <div className="homeSection">
      <div className="homeSection-content">
        <button>
          <GreenBackground></GreenBackground>
          <p className="plus-button">+</p>
        </button>
      </div>
      <div className="homeSection-heading">
        <h2>
          New Cafe <br /> by <span>StarBucks</span>
        </h2>
        <p>
          Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!
        </p>
      </div>
      <div className="homeSection-footer">
        <div className="homeSection-buttons">
          <button>Select a coffee</button>
          <button>More</button>
        </div>
        <div className="homeSection-information">
          <div className="homeSection-achievement">
            <p>
              9k<span>+</span>
            </p>
            <span className="achivement-info">Premium Users</span>
          </div>
          <div className="homeSection-achievement">
            <p>
              2k<span>+</span>
            </p>
            <span className="achivement-info">Happy Customer</span>
          </div>
          <div className="homeSection-achievement">
            <p>
              28<span>+</span>
            </p>
            <span className="achivement-info">Awards</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
