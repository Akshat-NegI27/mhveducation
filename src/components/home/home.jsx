import React, { useState, useEffect } from "react";
import "./LandingPage.css";

function LandingPage() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Example effect to toggle animation state
    const timer = setTimeout(() => {
      setIsAnimating(!isAnimating);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isAnimating]);

  return (
    <div className={`landing-container ${isAnimating ? 'fade-out' : ''}`}>
      <header className="landing-header">
        <h1>Welcome to Our Website</h1>
      </header>
      <main className="landing-main">
        <p>This is a basic landing page created with React.</p>
        <button onClick={() => setIsAnimating(!isAnimating)}>
          Toggle Animation
        </button>
      </main>
      <footer className="landing-footer">
        <p>&copy; 2025 Your Company</p>
      </footer>
    </div>
  );
}

export default LandingPage;