import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2>Welcome to Mentora</h2>
        <p>
          Mentora is an innovative e-learning platform designed to empower
          individuals with the knowledge and skills they need to excel in their
          chosen fields. Our platform offers meticulously crafted courses led by
          industry experts, ensuring a blend of quality, practicality, and
          inspiration.
        </p>
        <div className="features">
          <h3>Why Choose Mentora?</h3>
          <ul>
            <li>📚 A wide range of courses covering diverse domains.</li>
            <li>💡 Interactive learning experience with quizzes and assignments.</li>
            <li>🏆 Certification programs to showcase your achievements.</li>
            <li>⏱ Flexible learning schedules tailored to your needs.</li>
            <li>🌐 Access to global instructors and peer networks.</li>
            <li>📈 Advanced analytics to track your learning progress.</li>
          </ul>
        </div>
        <div className="cta-section">
          <button className="explore-courses">Explore Courses</button>
          <button className="contact-us">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
