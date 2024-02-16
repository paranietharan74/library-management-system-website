import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchBar.module.css'; // Import CSS module file

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
        // Trigger search if the Enter key is pressed
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className={styles.searchBar}>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className={styles.input}
                />
                <button onClick={handleSearch} className={styles.button}>
                    <SearchIcon />
                </button>
            </div>
        </div>
    );
}

export default SearchBar;