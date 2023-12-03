import React from "react";
import { useParams } from "react-router-dom";
import Data from "../../assets/data/blogsData.json";

import { BsPersonFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import Popularblogsidebar from "./Popularblogsidebar";
const SingleBlog = () => {
  const { id } = useParams();
  const blog = Data.find((project) => String(project.id) === id);

  return (
    <div className="">
      <div className="mx-auto max-w-7xl my-12 flex flex-col lg:flex-row gap-6  ">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img
              src={blog?.image}
              alt=""
              className="w-full mx-auto rounded my-10"
            />
          </div>
          <h2 className=" font-semibold text-2xl">{blog?.title}</h2>
          <p className="mb-3 text-gray-500  ">
            <BsPersonFill className="inline-flex text-center mr-2 " />
            {blog?.author} | {blog?.published_date}
          </p>
          <p className="mb-3 text-gray-500  ">
            <BsFillClockFill className="inline-flex text-center mr-2 " />
            {blog?.reading_time}
          </p>

          <p>{blog?.content}</p>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              obcaecati explicabo ducimus nam, porro consequuntur libero, nihil
              reprehenderit iure impedit facilis facere pariatur mollitia,
              perspiciatis provident! Itaque saepe perspiciatis, deserunt sunt
              omnis dolorem atque suscipit ipsum eveniet fugiat quibusdam quia
              quam, unde assumenda sapiente. Blanditiis labore amet est. Ea
              exercitationem rerum soluta.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              obcaecati explicabo ducimus nam, porro consequuntur libero, nihil
              reprehenderit iure impedit facilis facere pariatur mollitia,
              perspiciatis provident! Itaque saepe perspiciatis, deserunt sunt
              omnis dolorem atque suscipit ipsum eveniet fugiat quibusdam quia
              quam, unde assumenda sapiente. Blanditiis labore amet est. Ea
              exercitationem rerum soluta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              obcaecati explicabo ducimus nam, porro consequuntur libero, nihil
              reprehenderit iure impedit facilis facere pariatur mollitia,
              perspiciatis provident! Itaque saepe perspiciatis, deserunt sunt
              omnis dolorem atque suscipit ipsum eveniet fugiat quibusdam quia
              quam, unde assumenda sapiente. Blanditiis labore amet est. Ea
              exercitationem rerum soluta.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              obcaecati explicabo ducimus nam, porro consequuntur libero, nihil
              reprehenderit iure impedit facilis facere pariatur mollitia,
              perspiciatis provident! Itaque saepe perspiciatis, deserunt sunt
              omnis dolorem atque suscipit ipsum eveniet fugiat quibusdam quia
              quam, unde assumenda sapiente. Blanditiis labore amet est. Ea
              exercitationem rerum soluta.
            </p>
            <br />
            <br />
          </div>
        </div>
        <div className="my-12">
          <Popularblogsidebar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
