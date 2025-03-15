import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Courses from "./pages/courses/courses";
import Feestructure from "./pages/feestructure/feestructure";
import Blogs from "./pages/blogs/blogs";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import CustomCursor from "./CustomCursor";
import Coursesdetail from "./components/courses-detail-content/coursesdetailContent";
import Loader from "./components/Loader"; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensures loader displays for the intended time before switching to the home page
    const timer = setTimeout(() => setLoading(false), 4500); 
    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <CustomCursor />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Courses" element={<Courses />} />
              <Route path="/Feestructure" element={<Feestructure />} />
              <Route path="/Blogs" element={<Blogs />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Coursesdetail" element={<Coursesdetail />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
};

export default App;
