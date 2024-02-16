import ArticleNavBar from "../Components/ArticleNavBar";
import Footer from "../Components/Footer";
import ArticleSummary from "../Components/ArticleSummary";
import styles from './style/ArticleHome.module.css'; // Import CSS module file

function ArticleHome() {
    return (
        <div className={styles.container}>
            <ArticleNavBar />

            <div className={styles.articles}>
            <ArticleSummary
                    articleImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae nisl aliquam ultricies. Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis."
                    authorImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="Sample Article Title"
                    authorName="John Doe"
                    publishedAgo="2 hours ago"
                />

                <ArticleSummary
                    articleImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae nisl aliquam ultricies. Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis."
                    authorImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="Sample Article Title"
                    authorName="John Doe"
                    publishedAgo="2 hours ago"
                />

                <ArticleSummary
                    articleImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae nisl aliquam ultricies. Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis."
                    authorImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="Sample Article Title"
                    authorName="John Doe"
                    publishedAgo="2 hours ago"
                />

                <ArticleSummary
                    articleImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae nisl aliquam ultricies. Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis."
                    authorImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="Sample Article Title"
                    authorName="John Doe"
                    publishedAgo="2 hours ago"
                />

                <ArticleSummary
                    articleImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae nisl aliquam ultricies. Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis."
                    authorImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="Sample Article Title"
                    authorName="John Doe"
                    publishedAgo="2 hours ago"
                />

                <ArticleSummary
                    articleImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero vitae nisl aliquam ultricies. Sed tristique, odio sit amet pretium commodo, mauris velit ultricies justo, a aliquet risus ipsum vel turpis."
                    authorImage="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="Sample Article Title"
                    authorName="John Doe"
                    publishedAgo="2 hours ago"
                />
            </div>

            <Footer />
        </div >
    );
}

export default ArticleHome;