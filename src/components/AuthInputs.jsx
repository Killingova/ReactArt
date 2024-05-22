import React, { useState } from 'react';
import styled from 'styled-components';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6b7280;
`;

const AuthInputs = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (identifier, value) => {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  };

  const handleLogin = () => {
    setSubmitted(true);
  };

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <div>
          <Label className={emailNotValid ? 'invalid' : ''}>Email</Label>
          <input
            type="email"
            className={emailNotValid ? 'invalid' : ''}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </div>
        
        <div>
          <Label className={passwordNotValid ? 'invalid' : ''}>Password</Label>
          <input
            type="password"
            className={passwordNotValid ? 'invalid' : ''}
            onChange={(event) => handleInputChange('password', event.target.value)}
          />
        </div>
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className="button" onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
};

export default AuthInputs;
