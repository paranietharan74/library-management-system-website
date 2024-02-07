import React from 'react';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './style/PageMessageStyle.css';

function PageMessage({ message }) {
  return (
    <div className='container'>
      <div className='message-container'>
        <LibraryAddCheckIcon style={{color: 'green',}}/>
        <p>{message}</p>
      </div>
    </div>
  );
}

// Define prop types for the component
PageMessage.propTypes = {
  message: PropTypes.string.isRequired, // Ensure message is a required string
};

export default PageMessage;