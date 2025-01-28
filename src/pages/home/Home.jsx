import React from "react";
import { useNavigate } from "react-router-dom";
import Testimonials from "../../components/testimonials/Testimonials";
import "./home.css";
import "@fontsource/roboto";
import "@fontsource/roboto/700.css";
import "@fontsource/lato";
import "@fontsource/open-sans";

const Home = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to Mentora – Knowledge Empowered</h1>
          <p>Empower Your Journey with Mentora!</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
        {user && (
          <div className="welcome-message">
            <h2>Hi, {user.name}!</h2>
          </div>
        )}
      </div>

      {/* Unique Feature Section */}
      <div className="unique-feature">
        <div className="unique-feature-content">
          <h2>Experience Learning Like Never Before</h2>
          <p>Join Mentora and unlock a world of personalized learning and real-time interactions.</p>
        </div>
      </div>

      {/* Unique features section */}
      <div className="features">
        <h2>Why Choose Mentora?</h2>
        <div className="feature-cards">
          <div className="feature-card" style={{ backgroundImage: 'url("/src/images/earth.jpg")' }}>
            <div className="feature-card-text">
              <h3>Global Community</h3>
              <p>Connect with learners and instructors from around the globe.</p>
            </div>
          </div>
          <div className="feature-card" style={{ backgroundImage: 'url("/src/images/education.png")' }}>
            <div className="feature-card-text">
              <h3>Live Sessions</h3>
              <p>Attend real-time sessions with industry experts.</p>
            </div>
          </div>
          <div className="feature-card" style={{ backgroundImage: 'url("/src/images/certificate.jpg")' }}>
            <div className="feature-card-text">
              <h3>Earn Rewards</h3>
              <p>Gain badges and certificates as you complete milestones.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <Testimonials />

      {/* Call to action */}
      <div className="cta">
        <h2>Join Mentora Today</h2>
        <p>
          Start your journey towards personal and professional growth. Discover
          endless possibilities with Mentora!
        </p>
        <button onClick={() => navigate("/register")} className="cta-btn">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Home;
