import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    if (category) {
      fetchArticles();
    }
  }, [category]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
      {category && category.charAt(0).toUpperCase() + category.slice(1)} <span className="badge bg-danger text-light">News</span>
      </h2>

      <div className="row">
        {articles &&
          articles.map((news, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4  d-flex justify-content-center"
            >
              <NewsItem
                title={news.title}
                desc={news.description}
                url={news.url}
                src={news.urlToImage}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Newsboard;
