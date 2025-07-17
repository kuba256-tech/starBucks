import { useEffect } from 'react';
import NavBar from './components/Navbar/NavBar';
import Contacts from './sections/Contacts/Contacts';
import Footer from './sections/Footer/Footer';
import HomeSection from './sections/Home/HomeSection';
import NewEvents from './sections/NewEvents/NewEvents';
import NewProducts from './sections/NewProducts/NewProducts';
import OurProducts from './sections/OurProducts/OurProducts';
import scrollReveal from 'scrollReveal';

const App = () => {
  useEffect(() => {
    const registerAnimation = () => {
      const sr = scrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 2000,
        reset: false,
      });
      sr.reveal(`.navbar, .homeSection,.ourProducts, .NewProducts, .NewEvents, .Contacts, .footer`, { interval: 500 });
    };
    registerAnimation();
  }, []);

  return (
    <>
      <div className="app-container">
        <header>
          <NavBar />
        </header>
        <main>
          <HomeSection />
          <OurProducts />
          <NewProducts />
          <NewEvents />
          <Contacts />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
