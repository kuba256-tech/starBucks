import NavBar from './components/Navbar/NavBar';
import HomeSection from './sections/Home/HomeSection';

const App = () => {
  return (
    <div className="app-container">
      <header>
        <NavBar />
      </header>
      <main>
        <HomeSection />
      </main>
    </div>
  );
};

export default App;
