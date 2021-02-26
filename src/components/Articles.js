import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SkeletonArticle from '../skeletons/SkeletonArticle';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setArticles(res.data);
      } catch (err) {
        console.log(err);
      }
    }, 5000);
  }, []);

  return (
    <div className="articles">
      <h2>All articles</h2>
      {articles.length
        ? articles.map((article) => (
            <div className="article" key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          ))
        : [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} />)}
    </div>
  );
};

export default Articles;
