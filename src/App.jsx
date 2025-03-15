import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomCursor from "./CustomCursor";
import Loader from "./components/Loader";

// ✅ Lazy Loading Components for Performance Optimization
const Home = lazy(() => import("./pages/home/home"));
const Courses = lazy(() => import("./pages/courses/courses"));
const Feestructure = lazy(() => import("./pages/feestructure/feestructure"));
const Blogs = lazy(() => import("./pages/blog/blog"));
const About = lazy(() => import("./pages/about/about"));
const Contact = lazy(() => import("./pages/contact/contact"));
const Coursesdetail = lazy(() =>
  import("./components/courses-detail-content/coursesdetailContent")
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer); // ✅ Cleanup to prevent memory leaks
  }, []);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <CustomCursor />
          <Router future={{ v7_startTransition: true ,
                v7_relativeSplatPath: true,

          }}> {/* ✅ Future-proofing React Router */}
            <Suspense fallback={<Loader />}> {/* ✅ Handles lazy loading */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/feestructure" element={<Feestructure />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/coursesdetail" element={<Coursesdetail />} />
              </Routes>
            </Suspense>
          </Router>
        </>
      )}
    </>
  );
};

export default App;
