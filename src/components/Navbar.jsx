const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light justify-content-center">
      <div className="container-fluid">
        <a className="navbar-brand " href="/">
          <img
            src="/assets/logo.jpg "
            className="rounded-circle"
            alt="logo"
            width="50"
            height="50"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse  " id="navbarNavDropdown">
          <ul className="navbar-nav px-5">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
