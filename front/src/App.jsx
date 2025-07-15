import NavBar from './components/Navbar/NavBar';
import HomeSection from './sections/Home/HomeSection';
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
      </main>
    </div>
  );
};

export default App;
