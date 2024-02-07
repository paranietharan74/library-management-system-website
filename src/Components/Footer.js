import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>©2024 Innovate Coders</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#f4f4f4',
    color: '#333',
    textAlign: 'center',
    padding: '0.2rem',
    marginTop: 'auto', // Set margin-top to push footer to the bottom of the page
};

export default Footer;
