import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

function SearchBar(props) {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        // Pass the search text to the parent component
        props.onSearch(searchText);
    };

    const handleKeyDown = (event) => {
        // Trigger search if Enter key is pressed
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>
                <SearchIcon />
            </button>
        </div>
    );
}

export default SearchBar;