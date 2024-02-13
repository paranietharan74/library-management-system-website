import React from 'react';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './style/PageMessageStyle.css';

function PageMessage({ heading, message }) {
  return (
    <div className='container'>
      <div className='message-container'>
        <div className='heading' style={{ display: 'flex', alignItems: 'center' }}>
          <LibraryAddCheckIcon style={{ color: 'green' }} />
          <h1 style={{ marginLeft: '5px' }}>{heading}</h1>
        </div>
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