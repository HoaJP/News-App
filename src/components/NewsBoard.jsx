import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://newsdata.io/api/1/latest?apikey=${
          import.meta.env.VITE_API_KEY
        }&q=${category}&language=en`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);
        
        setArticles(data.results || []);
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
                url={news.link}
                src={news.image_url}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Newsboard;
