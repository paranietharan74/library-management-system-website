import ArticleNavBar from "../Components/ArticleNavBar";
import Footer from "../Components/Footer";
import ArticleView from "../Components/ArticleView";

function ViewArticle() {
    return (
        <div>
            <ArticleNavBar />

            <ArticleView
                articleImage="https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                authorDetails={{
                    image: "https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "Author Name",
                    publishedDate: "Published: January 16, 2024",
                }}
                contents={{
                    title: "How to do web design with React js",
                    tags: ["react", "development", "webdesign"],
                    paragraphs: [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                        // Add more paragraphs as needed
                    ],
                }}
                comments={[/* array of comments */]}
                averageRating={7.5}
            />


            <Footer />
        </div>
    );
}

export default ViewArticle;