import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "../Pages/Home";
import About from "../Pages/About";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import Store from "../Store/Store";

const Routing = () => {
  return (
    <div>
      {/* <Provider store={Store}> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
      {/* </Provider> */}
    </div>
  );
};

export default Routing;
