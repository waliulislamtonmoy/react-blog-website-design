import React from "react";

const BlogCategory = ({
  onSelectedCategory,
  selectedcategory,
  activecategory,
}) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];
  return (
    <div>
      <div className="px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900">
        <button
          onClick={() => onSelectedCategory(null)}
          className={`mr-4 px-3 py-2 rounded space-x-16 ${
            activecategory ? "" : "active-category-button"
          }`}
        >
          All
        </button>
        {categories.map((cat, key) => {
          return (
            <button
              onClick={() => onSelectedCategory(cat)}
              className={`mr-4 px-3 py-2 rounded space-x-16 ${
                activecategory === cat ? "active-category-button" : ""
              }`}
              key={key}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCategory;
