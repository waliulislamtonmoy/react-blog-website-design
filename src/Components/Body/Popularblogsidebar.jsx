import React from "react";

import Blogs from "../../assets/data/blogsData.json";
import { BsArrowRight } from "react-icons/bs";
const Popularblogsidebar = () => {
  return (
    <div>
      <div>
        <p className="text-2xl font-bold ">Latest Blogs</p>

        {Blogs.slice(0, 5).map((data, key) => {
          return (
            <div
              className="border-b-2 pt-1 pb-2 cursor-pointer font-semibold my-5 "
              key={key}
            >
              <p className="text-black">{data.title}</p>
              <a
                href={`${data.id}`}
                className="inline-flex text-base capitalize pb-2 hover:text-orange-500 items-center"
              >
                see more <BsArrowRight className="mt-1 ml-2" />
              </a>
            </div>
          );
        })}
      </div>
      <div>
        <div className="">
          <p className="text-2xl font-bold">Popular Blogs</p>
        </div>
        {Blogs.slice(6, 11).map((data, key) => {
          return (
            <div
              className="border-b-2 pt-1 pb-2 cursor-pointer font-semibold"
              key={key}
            >
              <p className="text-black">{data.title}</p>
              <a
                href={`${data.id}`}
                className="inline-flex text-base capitalize pb-2 hover:text-orange-500 items-center"
              >
                see more <BsArrowRight className="mt-1 ml-2" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popularblogsidebar;
