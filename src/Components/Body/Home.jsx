import React from "react";
import Banner from "./Banner";
import BlogPage from "./BlogPage";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>

      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
};

export default Home;
