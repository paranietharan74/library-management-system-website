import React from 'react';
import PropTypes from 'prop-types';
import styles from './ViewArticle.module.css';
import HoverRating from './HoverRating';
import ViewComments from './ViewComments';

function ArticleView({ articleImage, authorDetails, contents, comments, averageRating }) {
    return (
        <div className={styles.ViewArticle}>
            <div className={styles.content}>
                <img
                    src={articleImage}
                    alt="Article"
                    className={styles.articleImage}
                />

                <div className={styles.authorSection}>
                    <div className={styles.authorDetails}>
                        <img
                            src={authorDetails.image}
                            alt="Author"
                            className={styles.authorImage}
                        />
                        <p>{authorDetails.name}</p>
                    </div>
                    <div className={styles.publishedDate}>
                        <p>{authorDetails.publishedDate}</p>
                    </div>
                </div>

                <div className={styles.articleHeader}>
                    <h1 className={styles.articleTitle}>{contents.title}</h1>
                    <p>
                        {contents.tags.map((tag, index) => (
                            <span key={index}>#{tag}</span>
                        ))}
                    </p>
                </div>

                <div className={styles.articleContent}>
                    {contents.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>

            <div className={styles.RatignAndCommentSection}>
                <div className={styles.ratingSection}>
                    <p>Average Rating: {averageRating}</p>
                    <HoverRating />
                </div>
                <div className={styles.commentSection}>
                    <div className={styles.writeComment}>
                        <textarea placeholder="Write a comment"></textarea>
                        <button>Submit</button>
                    </div>
                    <ViewComments comments={comments} />
                </div>
            </div>
        </div>
    );
}

ArticleView.propTypes = {
    articleImage: PropTypes.string.isRequired,
    authorDetails: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        publishedDate: PropTypes.string.isRequired,
    }).isRequired,
    contents: PropTypes.shape({
        title: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    comments: PropTypes.array.isRequired,
    averageRating: PropTypes.number.isRequired,
};

export default ArticleView;