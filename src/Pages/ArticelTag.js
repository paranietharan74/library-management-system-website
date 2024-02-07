import ArticleNavBar from "../Components/ArticleNavBar";
import Footer from "../Components/Footer";
import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import './style/ArticleTag.css';

function ArticleTag() {
    const [searchResults, setSearchResults] = useState([]);

    // Function to handle search
    const handleSearch = (searchText) => {
        setSearchResults([searchText]);
        console.log(searchResults);
    };

    return (
        <div className="article-tag-page-container">
            <ArticleNavBar />

            <div className="article-tag-page-content">
                <SearchBar onSearch={handleSearch} className='search-bar' />

                <div className="article-tags-container">
                    <div className="tag">#medical</div>
                    <div className="tag">#maths</div>
                    <div className="tag">#science</div>
                    <div className="tag">#technology</div>
                    <div className="tag">#engineering</div>
                    <div className="tag">#arts</div>
                    <div className="tag">#humanities</div>
                    <div className="tag">#business</div>
                    <div className="tag">#law</div>
                    <div className="tag">#social</div>
                    <div className="tag">#psychology</div>
                    <div className="tag">#education</div>
                    <div className="tag">#health</div>
                    <div className="tag">#environment</div>
                    <div className="tag">#agriculture</div>
                    <div className="tag">#food</div>
                    <div className="tag">#nutrition</div>
                    <div className="tag">#sports</div>
                    <div className="tag">#fitness</div>
                    <div className="tag">#lifestyle</div>
                    <div className="tag">#fashion</div>
                    <div className="tag">#beauty</div>
                    <div className="tag">#travel</div>
                    <div className="tag">#tourism</div>
                    <div className="tag">#hospitality</div>
                </div>
            </div>

            <div className="footer-container" style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
                <Footer />
            </div>

        </div >
    );
}

export default ArticleTag;