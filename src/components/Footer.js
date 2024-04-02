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
    padding: '20px',
    marginTop: 'auto',
    height: '5vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2px',
    borderColor: '#666666',
    borderStyle: 'solid',
    borderWidth: '1.5px',
    fontWeight: 'bold',
    marginBottom: '5px',
    marginLeft: '5px',
    marginRight: '5px',
};

export default Footer;
