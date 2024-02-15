import React from 'react';
import './style/VerificationSuccessMessage.css';

function VerificationSuccessMessage() {
    return (
        <div className="success-msg-box">
            <div className="success-icon">
                <i className="fa fa-check-circle" aria-hidden="true"></i>
            </div>
            <p className="success-msg-title">Congratulations!</p>
            <p className="-success-message-body">Your account is ready to use. You will be redirected to the home page in a few seconds.</p>
        </div>
    );
}

export default VerificationSuccessMessage;