import React from 'react';
import BookFrame from "../components/BookFrame";
import imgSrc from "../resources/book-cover.jpg";
import styles from './style/userHomeStyle.module.css'; // Import the CSS module
import UserNavbar from '../components/UserNavBar';
import Footer from '../components/Footer';

function UserHome() {
    return (
        <div className={styles.home}>
            <UserNavbar />
            <div className={styles.userHome}>
                <div className={styles.bookFrameItem}>
                    <div className={styles.bookFrame}>
                        <BookFrame book={{
                            title: "The Great Gatsby",
                            author: "F. Scott Fitzgerald",
                            availability: "Available",
                            image: imgSrc
                        }} />
                    </div>

                    <div className={styles.bookFrame}>
                        <BookFrame book={{
                            title: "The Great Gatsby",
                            author: "F. Scott Fitzgerald",
                            availability: "Available",
                            image: imgSrc
                        }} />
                    </div>

                    <div className={styles.bookFrame}>
                        <BookFrame book={{
                            title: "The Great Gatsby",
                            author: "F. Scott Fitzgerald",
                            availability: "Available",
                            image: imgSrc
                        }} />
                    </div>

                    <div className={styles.bookFrame}>
                        <BookFrame book={{
                            title: "The Great Gatsby",
                            author: "F. Scott Fitzgerald",
                            availability: "Available",
                            image: imgSrc
                        }} />
                    </div>

                    <div className={styles.bookFrame}>
                        <BookFrame book={{
                            title: "The Great Gatsby",
                            author: "F. Scott Fitzgerald",
                            availability: "Available",
                            image: imgSrc
                        }} />
                    </div>

                    <div className={styles.bookFrame}>
                        <BookFrame book={{
                            title: "The Great Gatsby",
                            author: "F. Scott Fitzgerald",
                            availability: "Available",
                            image: imgSrc
                        }} />
                    </div>

                    <div className={styles.bookFrame}>
                        <BookFrame book={{
                            title: "The Great Gatsby",
                            author: "F. Scott Fitzgerald",
                            availability: "Available",
                            image: imgSrc
                        }} />
                    </div>

                    <div className={styles.bookFrame}>
                        <BookFrame book={{
                            title: "The Great Gatsby",
                            author: "F. Scott Fitzgerald",
                            availability: "Available",
                            image: imgSrc
                        }} />
                    </div>

                    <div className={styles.bookFrame}>
                        <BookFrame book={{
                            title: "The Great Gatsby",
                            author: "F. Scott Fitzgerald",
                            availability: "Available",
                            image: imgSrc
                        }} />
                    </div>

                    <div className={styles.bookFrame}>
                        <BookFrame book={{
                            title: "The Great Gatsby",
                            author: "F. Scott Fitzgerald",
                            availability: "Available",
                            image: imgSrc
                        }} />
                    </div>

                    <div className={styles.bookFrame}>
                        <BookFrame book={{
                            title: "The Great Gatsby",
                            author: "F. Scott Fitzgerald",
                            availability: "Available",
                            image: imgSrc
                        }} />
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
}

export default UserHome;
