import ArticleNavBar from "../Components/ArticleNavBar";
import Footer from "../Components/LibraryFooter";
import ProfileCard from "../Components/ProfileCard";
import styles from "./style/MyProfile.module.css";
import ArticleSummary from "../Components/ArticleSummary";

function MyProfile() {
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
            <ArticleSummary
              articleImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae nisl aliquam ultricies. Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis."
              title="Sample Article Title"
            />

            <ArticleSummary
              articleImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae nisl aliquam ultricies. Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis."
              title="Sample Article Title"
            />

            <ArticleSummary
              articleImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae nisl aliquam ultricies. Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis."
              title="Sample Article Title"
            />

            <ArticleSummary
              articleImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae nisl aliquam ultricies. Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis."
              title="Sample Article Title"
            />

            <ArticleSummary
              articleImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae nisl aliquam ultricies. Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis."
              title="Sample Article Title"
            />

            <ArticleSummary
              articleImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae nisl aliquam ultricies. Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis."
              title="Sample Article Title"
            />
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