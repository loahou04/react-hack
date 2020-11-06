import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';

const host = "https://hungfirsthttptrigger.azurewebsites.net";
// const host = "http://localhost:7071"
const fetch = window.fetch;
const headers = {
  "Access-Control-Allow-Origin": '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, OPTION',
  'Access-Control-Allow-Headers': 'Content-Type'
};

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
    if (firstName && lastName && email) {
      fetch(`${host}/api/HungHttpTrigger`, {
        mode: 'cors',
        headers
      })
      .then(response => response.json())
      .then(data => console.log(data));
    }

  };

  return (
    <div className="App">
      <div><TextField type="text" label="first name" value={firstName} onChange={handleFirstNameChange} /> </div>
      <div><TextField type="text" label="last name" value={lastName} onChange={handleLastNameChange} />  </div>
      <div><TextField type="text" label="email" value={email} onChange={handleEmailChange} /> </div>
      <div className="button-form">
        <Button color="primary" onClick={clickHandler}>Submit</Button>
      </div>
    </div>
  );
}

export default App;
