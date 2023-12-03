import React from "react";
import Navbar from "./Header/Navbar";
import Home from "./Body/Home";
import Services from "./Body/Services";
import About from "./Body/About";
import Blogs from "./Body/Blogs";
import Contact from "./Body/Contact";

import Footer from "./Footer/Footer";
import SingleBlog from "./Body/SingleBlog";
import Userregester from "./Body/Userregister";

import { Routes, Route } from "react-router-dom";
import UserLogin from "./Body/UserLogin";

const Maincomponents = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/:id" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Userregester />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Maincomponents;
