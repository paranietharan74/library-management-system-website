import React from 'react';
import ContactElement from '../Components/ContactElement';

function Test() {
  return (
    <div>
      <ContactElement
        name="John Doe"
        message="Hey there! How are you?"
        imgSrc="https://example.com/avatar.jpg"
      />
      <ContactElement
        name="Alice Smith"
        message="Hi, I'm doing great. Thanks for asking!"
        imgSrc="https://example.com/avatar2.jpg"
      />
    </div>
  );
}

export default Test;