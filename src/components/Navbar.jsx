import "./styles/navbar.css";
export default function Navbar() {
    return (
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo Section */}
          <div className="logo-box">
            <div className="logo-container">
                <img src="/assets/nav-logo-1.png" alt="AHS Connect Logo" className="logo-img" />
            </div>
          </div>

          {/* Title Section */}
          <h2 className="nav-title">American Hospitality Services Inc.</h2>
  
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
  