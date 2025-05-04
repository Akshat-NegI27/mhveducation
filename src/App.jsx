import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomCursor from "./CustomCursor";
import Loader from "./components/Loader";
import "./App.css"; // Make sure you include the fade-in styles here

const Home = lazy(() => import("./pages/home/home"));
const Courses = lazy(() => import("./pages/courses/courses"));
const About = lazy(() => import("./pages/about/about"));
const Contact = lazy(() => import("./pages/contact/contact"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5500); // 👈 Adjust for speed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="app-wrapper fade-in">
          <CustomCursor />
          <Router
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
          >
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </Router>
        </div>
      )}
    </>
  );
};

export default App;
