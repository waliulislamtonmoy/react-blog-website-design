import React from "react";

const BlogCard = ({ blogs, currentpage, selectedcategory, pagesize }) => {
  const AllBlogs = blogs
    .filter((blogs) => !selectedcategory || blogs.category === selectedcategory)
    .slice((currentpage - 1) * pagesize, currentpage * pagesize);

  console.log(AllBlogs);
  return (
    <div className="">
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {AllBlogs.map((data, key) => {
          return (
            <div>
              <a
                href={`${data.id}`}
                key={key}
                className="p-5 shadow-lg rounded cursor-pointer"
              >
                <div className="">
                  <img
                    src={data.image}
                    className="w-full rounded"
                    alt="blogsimage"
                  />
                </div>
                <div>
                  <p className="text-2xl font-bold">{data.title}</p>
                  <p className="text-gray-600">{data.author}</p>
                  <p className="text-gray-500">{data.published_date}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCard;
