import PersistentDrawerLeft from "../components/PersistentDrawerLeft";
import BookView from "../components/BookView";
import imgSrc from "../resources/book-cover.jpg";

function MyBooks() {
    return (
        <div className="MyBooks">
            <PersistentDrawerLeft />
            <div className="content">
                <h1>My Books</h1>
                <BookView
                    imgSrc={imgSrc}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    borrowedDate="7 days ago"
                />

            </div>
        </div>
    )
}

export default MyBooks;