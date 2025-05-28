import React from "react";
import defaultImage from '../assets/react.svg'
const NewsItem = ({ title, desc, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block m-3 p-2"
      style={{ maxWidth: "385px" }}
    >
      <img
        src={src ? src : defaultImage}
        style={{ height: "200px", objectFit: "cover" }}
        className="card-img-top"
        alt="news"
      />

      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "No title"}
        </h5>
        <p className="card-text">
          {desc?.slice(0, 90) || "No description available"}
        </p>

        <a href={url} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
