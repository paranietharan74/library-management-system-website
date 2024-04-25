import ArticleNavBar from "../Components/ArticleNavBar";
import Footer from "../Components/LibraryFooter";
import ProfileCard from "../Components/ProfileCard";
import styles from "./style/MyProfile.module.css";
import ArticleSummary from "../Components/ArticleSummary";

function MyProfile({articles}) {
  return (
    <div className={styles.myProfile}>
      <div className={styles.myProfileHeader}>
        <ArticleNavBar />
      </div>

      <div className={styles.myProfileBody}>
        <div className={styles.myProfile}>
          <ProfileCard
            name="John Doe"
            class="Web Developer"
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            avatar="https://images.pexels.com/photos/20167083/pexels-photo-20167083/free-photo-of-portrait-of-girl-with-hands-on-cheeks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            wallpaper="https://images.pexels.com/photos/7292733/pexels-photo-7292733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>

        <div className={styles.myArticles}>
          <h2>My Articles</h2>

          <div className={styles.articleList}>
            {articles
              .filter(article => ["1"," 3", "5"].includes(article.id)) // Display [1, 3, 5]
              .map((article) => (
                <ArticleSummary key={article.id} article={article} />
              ))}
          </div>

        </div>
      </div>


      <div className={styles.myProfileFooter}>
        <Footer />
      </div>
    </div>
  );
}

export default MyProfile;