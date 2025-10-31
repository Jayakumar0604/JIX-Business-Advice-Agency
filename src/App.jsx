import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from "./Layouts/MainLayouts";
import Home from "./Pages/Home/Index";
import About from "./Pages/About/Index";
import PortFolio from "./Pages/Portfolio/Index";
import Pricing from "./Pages/Pricing/Index";
import Landing from "./Pages/Landing/Index";
import Blog from "./Pages/Blog/Index";
import Contact from "./Pages/Contact/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
