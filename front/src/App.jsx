import NavBar from './components/Navbar/NavBar';
import HomeSection from './sections/Home/HomeSection';
import NewEvents from './sections/NewEvents/NewEvents';
import NewProducts from './sections/NewProducts/NewProducts';
import OurProducts from './sections/OurProducts/OurProducts';

const App = () => {
  return (
    <div className="app-container">
      <header>
        <NavBar />
      </header>
      <main>
        <HomeSection />
        <OurProducts />
        <NewProducts />
        <NewEvents />
      </main>
    </div>
  );
};

export default App;
