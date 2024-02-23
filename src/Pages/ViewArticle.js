import ArticleNavBar from "../Components/ArticleNavBar";
import HoverRating from "../Components/HoverRating";
import ViewComments from "../Components/ViewComments";
import styles from './style/ViewArticle.module.css';
import Footer from "../Components/Footer";

function ViewArticle() {
    return (
        <div>
            <ArticleNavBar />
            <div className={styles.content}>
                <img
                    src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Article"
                    className={styles.articleImage}
                />

                <div className={styles.authorSection}>
                    <div className={styles.authorDetails}>
                        <img
                            src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Author"
                            className={styles.authorImage}
                        />
                        <p>author name</p>
                    </div>
                    <div className={styles.publishedDate}>
                        <p>Published: January 16, 2024</p>
                    </div>
                </div>

                <div className={styles.articleHeader}>
                    <h1 className={styles.articleTitle}>How to do web design with React js</h1>
                    <p>
                        <span>#react</span>
                        <span>#development</span>
                        <span>#webdesign</span>
                    </p>
                </div>

                <div className={styles.articleContent}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi. Nam
                        aliquet, justo ut tincidunt aliquam, dolor turpis tincidunt
                        nunc, in tincidunt odio ligula sed nunc. Nulla facilisi.
                    </p>
                </div>
            </div>

            <div className={styles.RatignAndCommentSection}>
                <div className={styles.ratingSection}>
                    <p>Average Rating: 7.5</p>
                    <HoverRating />
                </div>
                <div className={styles.commentSection}>
                    <div className={styles.writeComment}>
                        <textarea placeholder="Write a comment"></textarea>
                        <button>Submit</button>
                    </div>
                    <ViewComments comments={commentsArray} />
                </div>
            </div>

            <Footer />
        </div>
    );
}

// code for random comments
const generateRandomComments = () => {
    const comments = [];

    for (let i = 0; i < 10; i++) {
        const comment = {
            imgLink: "https://images.pexels.com/photos/20167083/pexels-photo-20167083/free-photo-of-portrait-of-girl-with-hands-on-cheeks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // Replace with actual image link
            author: `Author ${i + 1}`,
            content: `This is comment ${i + 1}. Lorem ipsum dolor sit amet.`,
            timestamp: "1 minute ago", // Replace with actual timestamp logic
        };

        comments.push(comment);
    }

    return comments;
};

// Generate random comments
const commentsArray = generateRandomComments();

export default ViewArticle;