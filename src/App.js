import './App.css';
import React, { useState } from 'react';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstNameChange = (e) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
  }
  const handleLastNameChange = (e) => {
    const newLastName = e.target.value;
    setLastName(newLastName);
  }
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  }

  const clickHandler = (e) => {
    console.log(firstName);
    console.log(lastName);
    console.log(email);

  };

  return (
    <div className="App">
      <div>first name <input type="text" value={firstName} onChange={handleFirstNameChange} /> </div> 
      <div>last name <input type="text" value={lastName} onChange={handleLastNameChange} /> </div> 
      <div>email name <input type="text" value={email} onChange={handleEmailChange} /> </div> 
      <button onClick={clickHandler}>Submit</button>
    </div>
  );
}

export default App;
