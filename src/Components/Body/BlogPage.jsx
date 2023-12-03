import React, { useEffect, useState } from "react";

import Blogs from "../../assets/data/blogsData.json";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";
import BlogCategory from "./BlogCategory";
import Popularblogsidebar from "./Popularblogsidebar";
const BlogPage = () => {
  const [blogs, setBlogs] = useState(Blogs);
  const [currentpage, setCurrentpage] = useState(1);
  const pagesize = 9;
  const [selectedcategory, setSelectedcategory] = useState(null);
  const [activecategory, setActivecategory] = useState(null);

  useEffect(() => {
    async function fethcBlogh() {
      let url = `../../assets/data/blogsData.json?page=${currentpage}$limit=${pagesize}`;

      if (selectedcategory) {
        url += `$category=${selectedcategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fethcBlogh();
  }, [currentpage, pagesize, selectedcategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentpage(pageNumber);
  };
  const handleCategoryChange = (category) => {
    setSelectedcategory(category);
    setCurrentpage(1);
    setActivecategory(category);
  };

  return (
    <div>
      <div>
        <BlogCategory
          onSelectedCategory={handleCategoryChange}
          selectedcategory={selectedcategory}
          activecategory={activecategory}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <BlogCard
          blogs={blogs}
          currentpage={currentpage}
          selectedcategory={selectedcategory}
          pagesize={pagesize}
        />

        <div>
          <Popularblogsidebar />
        </div>
      </div>

      <div>
        <BlogPagination
          onpagechange={handlePageChange}
          blogs={blogs}
          currentpage={currentpage}
          pagesize={pagesize}
        />
      </div>
    </div>
  );
};

export default BlogPage;
