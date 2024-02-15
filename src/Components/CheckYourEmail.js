import './style/CheckYourEmail.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

function CheckYourEmail() {
    return (
        <div className='check-email-container'>
            <div className='check-email-icon'><FontAwesomeIcon icon={faEnvelopeOpenText} /></div>
            <p className='check-email-title'>Check Your Email or Phone</p>
            <p className='check-email-content'>We have send password recovery link to your email & phone</p>
        </div>
    );
}

export default CheckYourEmail;