import Home from "./pages/home/home";
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import feestructure from "./pages/fee-structure/fee-structure"
import courses from "./pages/courses/courses"
import blogs from "./pages/blogs/blogs"
import CustomCursor from "./CustomCursor";

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
          <Route exact path = "/About" element = {<About/>}/>
          <Route exact path = "/fee-structure" element = {<fee-structure/>}/>
          <Route exact path = "/courses" element = {<courses/>}/>
          <Route exact path = "/blogs" element = {<blogs/>}/>
          <Route exact path = "/Contact" element = {<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;