import './style/DetailsConfirmation.css';
import VerticalProgressBar from '../Components/VerticalProgressBar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function DetailsConfirmation() {
    const [currentStep, setCurrentStep] = useState(2);

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const formValues = {
        firstName: 'Shobikan',
        lastName: 'Vigneshwaran',
        dob: '29/08/2001',
        classDetails: '12C'
    };

    return (
        <div>
            <div className='background-image-container'></div>

            <div className="container">
                <div className='sign-in'>
                    <p>Already a member?<Link to='/login'>Log in</Link></p>
                </div>

                <div className='confirmation-form-container'>
                    {/* <div className='confirmation-details'>
                        <p className='first-name'>Shobikan</p>
                        <p className='last-name'>Vigneshwaran</p>
                        <p className='dob'>29/08/2001</p>
                        <p className='class-details'>Class: 12C</p>
                    </div> */}
                    <div className='confirmation-details'>
                        <p className='first-name'>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                defaultValue={formValues.firstName}
                                disabled // Make the input disabled to prevent editing
                            />
                        </p>
                        <p className='last-name'>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                defaultValue={formValues.lastName}
                                disabled // Make the input disabled to prevent editing
                            />
                        </p>
                        <p className='dob'>
                            Date of Birth:
                            <input
                                type="text"
                                name="dob"
                                defaultValue={formValues.dob}
                                disabled // Make the input disabled to prevent editing
                            />
                        </p>
                        <p className='class-details'>
                            Class Details:
                            <input
                                type="text"
                                name="classDetails"
                                defaultValue={formValues.classDetails}
                                disabled // Make the input disabled to prevent editing
                            />
                        </p>
                    </div>
                <button type='submit' className='confirm-details-next-button'>Next</button>
            </div>

            <div className='progress-bar'>
                <VerticalProgressBar currentStep={currentStep} />
            </div>
        </div>
        </div >
    );
}

export default DetailsConfirmation;