import React, { useState, useRef } from 'react';

const OtpInput = ({ length = 6 }) => {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputRefs = useRef([]);

    // Function to handle input change
    const handleChange = (index, value) => {
        // Update OTP array with new value at the specified index
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to the next input field if available
        if (value !== '' && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Function to handle input focus
    const handleFocus = index => {
        // Clear the input field when focused
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
    };

    return (
        <div>
            {otp.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={e => handleChange(index, e.target.value)}
                    onFocus={() => handleFocus(index)}
                    ref={ref => (inputRefs.current[index] = ref)}
                    style={{
                        width: '30px',
                        height: '30px',
                        marginRight: '5px',
                        fontSize: '20px',
                        textAlign: 'center',
                    }}
                />
            ))}
        </div>
    );
};

export default OtpInput;
