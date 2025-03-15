import Home from "./pages/home/home";
import Courses from "./pages/courses/courses";
import Feestructure from "./pages/feestructure/feestructure";
import Blogs from "./pages/blogs/blogs";
import About from "./pages/about/about"
import Contact from "./pages/contact/contact"
import CustomCursor from "./CustomCursor";
import Coursesdetail from "./components/courses-detail-content/coursesdetailContent";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
const App = () => {
  return (
    <>
            <CustomCursor></CustomCursor>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/Courses" element = {<Courses/>}/>
          <Route exact path = "/Feestructure" element = {<Feestructure/>}/>
          <Route exact path = "/Blogs" element = {<Blogs/>}/>
          <Route exact path = "/About" element = {<About/>}/>
          <Route exact path = "/Contact" element = {<Contact/>}/>
          <Route exact path = "/Coursesdetail" element = {<Coursesdetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
