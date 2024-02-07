import React, { useState } from 'react';
import './style/PublishArticlesStyle.css';
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
        <div className='PublishArticles'>
            <ArticleNavBar />

            <div className="article-form-container">
                <form onSubmit={handleSubmit}>
                    <div className='button-container'>
                        <button type="submit" className='submit-button'>Publish</button>
                    </div>

                    <div className='input-data-container' style={{backgroundColor: 'rgba(255, 255, 255, 0.4)',}}>
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
                            className='image-input'
                            style={{ width: '20vw' }}
                        />

                        {image && (
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                className="image-preview"
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
        </div>
    );
}

export default ArticleForm;