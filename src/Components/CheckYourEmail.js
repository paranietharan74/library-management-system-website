import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import styles from './style/CheckYourEmail.module.css'; // Import the CSS module file

function CheckYourEmail() {
    return (
        <div className={styles['check-email-container']}>
            <div className={styles['check-email-icon']}><FontAwesomeIcon icon={faEnvelopeOpenText} /></div>
            <p className={styles['check-email-title']}>Check Your Email or Phone</p>
            <p className={styles['check-email-content']}>We have sent a password recovery link to your email & phone</p>
        </div>
    );
}

export default CheckYourEmail;