import React from 'react';
import styles from './ArticleSummaryStyle.module.css'; // Import the CSS module
// ^ Note the change in the import statement

function ArticleSummary(props) {
  return (
    <div className={styles['article-summary-wrapper']}> {/* Use the scoped class name */}
      <div className={styles['article-summary-container']}> {/* Use the scoped class name */}
        <img className={styles['article-image']} src={props.articleImage} alt="Article" /> {/* Use the scoped class name */}
        <p className={styles['article-summary']}>{props.summary}</p> {/* Use the scoped class name */}
        <h2 className={styles['article-title']}>{props.title}</h2> {/* Use the scoped class name */}
        <div className={styles['author-info']}>
          <img className={styles['author-image']} src={props.authorImage} alt="Author" /> {/* Use the scoped class name */}
          <p className={styles['author-name']}>{props.authorName}</p> {/* Use the scoped class name */}
        </div>
        <p className={styles['publication-date']}>Published {props.publishedAgo}</p> {/* Use the scoped class name */}
      </div>
    </div>
  );
}

export default ArticleSummary;