import React from 'react';
import './style/BookFrame.css'; // Import the CSS file

function BookFrame({ book }) {
    return (
        <div className="book-frame">
            <img className="book-image" src={book.image} alt={book.title} />
            <div className="book-info">
                <p>{book.title}</p>
                <p>{book.author}</p>
            </div>
            <div className="availability-status">
                <p>{book.availability}</p>
            </div>
        </div>
    );
}

export default BookFrame;