import React from 'react';
import './ArticleSummaryStyle.css';

function ArticleSummary(props) {
  return (
    <div className="article-summary-wrapper">
      <div className="article-summary-container">
        <img className="article-image" src={props.articleImage} alt="Article" />
        <p className="article-summary">{props.summary}</p>
        <h2 className="article-title">{props.title}</h2>
        <div className='author-info'>
          <img className="author-image" src={props.authorImage} alt="Author" />
          <p className="author-name">{props.authorName}</p>
        </div>
        <p className="publication-date">Published {props.publishedAgo}</p>
      </div>
    </div>
  );
}

export default ArticleSummary;
