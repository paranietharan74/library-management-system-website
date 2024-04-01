import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from './style/UserTopBackButton.module.css';

function UserTopBackButton({ content }) {
  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className={styles.topButtonContainer}>
      <button onClick={goBack} className={styles.button}>
        <ArrowBackIosIcon />
      </button>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default UserTopBackButton;