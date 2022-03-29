import React from "react";

function BlogItem({ name, image, descrption, code, visit }) {
  return (
    <div className="blogItem">
      <div style={{ backgroundImage: `url(${image})`}}></div>
      <h2> {name} </h2>
      <h4> {descrption} </h4>
      <a className="code" href={code}>Code</a>
      <a className="visit" href={visit}>Visit</a>
    </div>
  );
}

export default BlogItem;
