import React, { useState } from 'react';
import styles from './style/PublishArticlesStyle.module.css'; // Import CSS module file
import ArticleNavBar from '../Components/ArticleNavBar';
import Footer from '../Components/Footer';

function ArticleForm() {
    const [image, setImage] = useState(null);
    const [heading, setHeading] = useState('');
    const [bodyText, setBodyText] = useState('');

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { image, heading, bodyText });

        // Reset form fields after submission
        setImage(null);
        setHeading('');
        setBodyText('');
    };

    return (
        <div className={styles.PublishArticles}> {/* Use the correct class name */}
            <ArticleNavBar />

            <div className={styles['article-form-container']}> {/* Use the correct class name */}
                <form onSubmit={handleSubmit}>
                    <div className={styles['button-container']}> {/* Use the correct class name */}
                        <button type="submit" className={styles['submit-button']}>Publish</button> {/* Use the correct class name */}
                    </div>

                    <div className={styles['input-data-container']} style={{backgroundColor: 'rgba(255, 255, 255, 0.4)'}}> {/* Use the correct class name */}
                        <label htmlFor="heading">Title...</label>
                        <input
                            type="text"
                            id="heading"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                            style={{ width: '60vw' }}
                        />

                        <label htmlFor="image">Image:</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className={styles['image-input']}
                            style={{ width: '20vw' }}
                        />

                        {image && (
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                className={styles['image-preview']}
                            />
                        )}

                        <textarea
                            id="bodyText"
                            value={bodyText}
                            onChange={(e) => setBodyText(e.target.value)}
                            placeholder="Edit your articles..."
                            style={{ height: '300px', marginTop: '20px', width: '70vw'}}
                        ></textarea>
                    </div>
                </form>
            </div>

            <Footer />
        </div >
    );
}

export default ArticleForm;
