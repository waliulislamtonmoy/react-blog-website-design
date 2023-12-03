import React from "react";

const BlogPagination = ({ blogs, onpagechange, currentpage, pagesize }) => {
  const totalPage = Math.ceil(blogs.length / pagesize);
  console.log(totalPage);

  const renderPaginationLink = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map(
      (pagenumber) => (
        <li
          className={pagenumber === currentpage ? "activePagination" : ""}
          key={pagenumber}
        >
          <a href="#nextpage" onClick={() => onpagechange(pagenumber)}>
            {pagenumber}
          </a>
        </li>
      )
    );
  };
  return (
    <div className="py-10">
      <ul className="pagination  my-8 flex-wrap  gap-4">
        <li>
          <button
            className="px-2 py-1 bg-green-400 text-white  rounded text-lg lead hover:bg-black hover:text-white"
            onClick={() => onpagechange(currentpage - 1)}
            disabled={currentpage === 1}
          >
            Previous
          </button>
        </li>
        <div className="flex gap-1">{renderPaginationLink()}</div>
        <li>
          <button
            className="px-2 py-1 bg-green-400 text-white  rounded text-lg lead hover:bg-black hover:text-white"
            onClick={() => onpagechange(currentpage + 1)}
            disabled={currentpage === totalPage}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BlogPagination;
