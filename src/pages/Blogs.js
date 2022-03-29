import React from "react";
import "../styles/Blogs.css";
import { BlogList } from "../helpers/BlogList";
import BlogItem from "../components/BlogItem";

function Blogs() {
  return (
    <div className="blog">
      <h1 className="blogTitle">Blogs</h1>
      <p>
        Blogging is just writing using a particular efficient type of publishing
        technology. So, here I have listed my blog websites which I have created
        yet.
      </p>
      <div className="blogList">
        {BlogList.map((blogItem, key) => {
          return (
            <BlogItem
              key={key}
              image={blogItem.image}
              name={blogItem.name}
              descrption={blogItem.descrption}
              code={blogItem.code}
              visit={blogItem.visit}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
