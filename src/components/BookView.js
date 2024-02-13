import React from 'react';
import './style/BookView.css';

function BookView({ imgSrc, description, borrowedDate }) {
    return (
        <div className='BookView'>
            <div className="book-img">
                {/* Use the image */}
                <img src={imgSrc} alt="Book Cover" />
            </div>

            <div className="book-info">
                <h1>Description</h1>
                <p>{description}</p>
            </div>

            <div className="borrowed-info">
                <p>Borrowed {borrowedDate}</p>
            </div>
        </div>
    );
}

export default BookView;