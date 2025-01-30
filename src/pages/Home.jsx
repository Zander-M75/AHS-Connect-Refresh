import "./styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="content">
        <h1>Welcome to AHS Connect</h1>
        <p>Your trusted partner in hotel architectural services.</p>
      </div>
    </div>
  );
}
