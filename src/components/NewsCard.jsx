import React, { useState } from 'react';

function NewsCard({ article }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="news-card">
      <div className="news-image-box">
        <img src={article.image} alt={article.title} loading="lazy" />
        <span className="news-tag">{article.tag}</span>
      </div>

      <div className="news-content">
        <div className="news-meta">
          <span>📅 {article.date}</span>
          <span>⏱ {article.readTime}</span>
        </div>

        <h3 className="news-title">{article.title}</h3>
        <p className="news-excerpt">
          {expanded ? article.fullText : article.excerpt}
        </p>

        <div className="news-footer">
          <div className="news-author">
            <div className="author-avatar">{article.author[0]}</div>
            <span>{article.author}</span>
          </div>

          <button
            className="read-more-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Свернуть ↑' : 'Читать далее →'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;