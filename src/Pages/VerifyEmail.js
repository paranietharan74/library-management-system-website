import CheckYourEmail from '../Components/CheckYourEmail';
import './style/VerifyEmail.css';
import { Link } from 'react-router-dom';
import VerticalProgressBar from '../Components/VerticalProgressBar';
import { useState } from 'react';

function VerifyEmail() {
    // for vertical ststus bar
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
            <div className='background-image-container'></div>

            <div className="container">
                <div className='sign-in'>
                    <p>Already a member?<Link to='/login'>Log in</Link></p>
                </div>

                <div className='verify-email-container'>
                    <CheckYourEmail />
                </div>

                <form className='verify-email-form'>
                    <div className='form-group'>
                        <input type='text' id='code' name='code' placeholder='Verification Code' onChange={setVerificationCode}/>
                    </div>

                    <div className='form-group'>
                        <button type='button' onClick={SubmitCode}>Verify</button>
                    </div>
                </form>

                <div className='progress-bar'>
                    <VerticalProgressBar currentStep={currentStep} />
                </div>
            </div>
        </div>
    );
}

export default VerifyEmail;