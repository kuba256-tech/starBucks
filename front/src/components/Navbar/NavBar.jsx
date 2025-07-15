const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <h4>StarBucks</h4>
        </div>
        <div className="navbar-right">
          <ul className="burger">
            <li className="burger-element"></li>
            <li className="burger-element"></li>
            <li className="burger-element"></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
