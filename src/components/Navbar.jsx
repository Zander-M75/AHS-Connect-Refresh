import "./styles/navbar.css";
export default function Navbar() {
    return (
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo Section */}
          <div className="logo-container">
            <img src="/assets/logo.png" alt="AHS Connect Logo" className="logo-img" />
            <h1 className="logo-text">AHS Connect</h1>
          </div>
  
          {/* Navigation Links */}
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    );
  }
  