import BookFrame from "../components/BookFrame";
import PersistentDrawerLeft from "../components/PersistentDrawerLeft";
import "./style/userHomeStyle.css";
import imgSrc from "../resources/book-cover.jpg";
import './style/userHomeStyle.css';

function UserHome() {
    return (
        <div className="home">
            <PersistentDrawerLeft>
                <div className="userHome">
                    <h1>Hi Mihunan, Welcome to Library Management system</h1>

                    <div className="book-frame-item">
                        <div className="book-frame">
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className="book-frame-item">
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className="book-frame-item">
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className="book-frame-item">
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className="book-frame-item">
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className="book-frame-item">
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className="book-frame-item">
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>
                    </div>

                </div>
            </PersistentDrawerLeft>
        </div>
    );
}

export default UserHome;