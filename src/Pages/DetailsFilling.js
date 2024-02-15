import { Link } from 'react-router-dom';
import './style/DetailsFillingStyle.css';
import VerticalProgressBar from '../Components/VerticalProgressBar';
import { useState } from 'react';

import 'font-awesome/css/font-awesome.min.css';

function DetailsFilling() {
    // for vertical ststus bar
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    // for password checking
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [hasMinLength, setHasMinLength] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecialChar, setHasSpecialChar] = useState(false);

    const [passwordMatch, setPasswordMatch] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleConfirmPasswordChange = (event) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);
        setPasswordMatch(newConfirmPassword === password);
        setIsValid(checkPassword(password, newConfirmPassword));
    };

    const handleChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    
        setHasMinLength(checkMinLength(newPassword));
        setHasNumber(checkNumber(newPassword));
        setHasSpecialChar(checkSpecialChar(newPassword));
        
        setIsValid(checkPassword(newPassword));
    };

    const checkMinLength = (password) => {
        return password.length >= 8;
    };

    const checkNumber = (password) => {
        return /\d/.test(password);
    };

    const checkSpecialChar = (password) => {
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    };

    const checkPassword = (password) => {
        return hasMinLength && hasNumber && hasSpecialChar;
    };

    return (
        <div>
            <div className='background-image-container'></div>

            <div className="container">
                <div className='sign-in'>
                    <p>Already a member?<Link to='/login'>Log in</Link></p>
                </div>

                <div className='form'>
                    <form>
                        <input
                            type='text'
                            placeholder='First Name'
                            required
                        />

                        <input
                            type='text'
                            placeholder='Last Name'
                            required
                        />

                        <input
                            type="text"
                            placeholder="&#xf0e0; Example@Email.com"
                            style={{ fontFamily: 'fontAwesome', width: '100%' }}
                            required
                        />

                        <input
                            type='text'
                            placeholder='&#xf095; Phone Number'
                            style={{ fontFamily: 'fontAwesome', width: '100%' }}
                            required
                        />

                        <input
                            type='password'
                            placeholder='&#xf023; Password'
                            style={{ fontFamily: 'fontAwesome', width: '100%' }}
                            value={password}
                            onChange={handleChange}
                            required
                        />
                        <div className='password-requirements'>
                            <ul>
                                <li>At least 8 characters: {hasMinLength ? '✓' : '✗'}</li>
                                <li>At least 1 number: {hasNumber ? '✓' : '✗'}</li>
                                <li>At least 1 special character: {hasSpecialChar ? '✓' : '✗'}</li>
                                <li>Passwords match: {passwordMatch ? '✓' : '✗'}</li>
                            </ul>
                        </div>

                        <input
                            type='password'
                            placeholder='&#xf023; Confirm Password'
                            style={{ fontFamily: 'fontAwesome', width: '100%' }}
                            onChange={handleConfirmPasswordChange}
                            required
                        />

                        <button type='submit' className='next-button'>Next</button>
                    </form>

                    <div className='terms'>
                        <p>By creating an account you agree to our <Link to='/terms'>Terms & Privacy</Link></p>
                    </div>
                </div>

                <div className='progress-bar'>
                    <VerticalProgressBar currentStep={currentStep} />
                </div>
            </div>
        </div>
    );
}

export default DetailsFilling;