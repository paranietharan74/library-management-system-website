import CheckYourEmail from '../Components/CheckYourEmail';
import styles from './style/VerifyEmail.module.css';
import { Link } from 'react-router-dom';
import VerticalProgressBar from '../Components/VerticalProgressBar';
import { useState } from 'react';

function VerifyEmail() {
    // for vertical status bar
    const [currentStep, setCurrentStep] = useState(3);

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const SubmitCode = () => {
        console.log('Code submitted');
        console.log();
    }

    // 4 verification code
    const setVerificationCode = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <div className={styles['background-image-container']}></div>

            <div className={styles['container']}>
                <div className={styles['sign-in']}>
                    <p>Already a member?<Link to='/login'>Log in</Link></p>
                </div>


                <div className={styles['verify-email-contents']}>
                    <div className={styles['verify-email-container']}>
                        <CheckYourEmail />
                    </div>

                    <form className={styles['verify-email-form']}>
                        <div className={styles['form-group']}>
                            <input type='text' id='code' name='code' placeholder='Verification Code' onChange={setVerificationCode} />
                        </div>

                        <div className={styles['form-group']}>
                            <button type='button' onClick={SubmitCode}>Verify</button>
                        </div>
                    </form>

                    <div className={styles['progress-bar']}>
                        <VerticalProgressBar currentStep={currentStep} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default VerifyEmail;