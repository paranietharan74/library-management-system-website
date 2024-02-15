import './style/loginStyle.css';
import imgSrc from '../resources/login-background-img.jpg';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='login-container'>
            <div className='join-now'>
                <p>Not a member yet?  <Link to='/details-fill'>Join Now</Link></p>
            </div>

            <div className='container'>
                <div className='login-form'>
                    <form style={{ fontFamily: 'FontAwesome'}} className='form'>

                        <input type="text" placeholder="&#xf0e0; Example@Email.com" style={{ fontFamily: 'fontAwesome',  width: '100%'}} />

                        <div style={{ display: 'flex',  width: '98%' }}>
                            <input
                                style={{ fontFamily: 'fontAwesome' }}
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='&#xf023; Password'
                            />

                            <button type="button" onClick={togglePasswordVisibility} className='eye-icon-button'>
                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                            </button>
                        </div>
                        <button type='submit' className='login-form-submit-button'>Proceed to my Account</button>
                    </form>
                </div>

                <div className='forgot-password'>
                    <Link to='/forgot-password'>Having issues with your password</Link>
                </div>
            </div >

            <div className="img-container">
                <img src={imgSrc} alt='background' className='background-img' />
            </div>
        </div >
    )
}

export default Login;