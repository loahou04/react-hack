import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';

const host = "https://document-receiver.azurewebsites.net";
// const host = "http://localhost:7071"
const fetch = window.fetch;
const headers = {
  "Access-Control-Allow-Origin": '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, OPTION',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': "application/json"
};

function App() {

  const [userId, setUserId] = useState('');
  const [content, setContent] = useState('');

  const handleUserId = (e) => {
    const userId = e.target.value;
    setUserId(userId);
  }
  const handleContent = (e) => {
    const content = e.target.value;
    setContent(content);
  }

  const clickHandler = (e) => {
    if (userId && content) {
      fetch(`${host}/api/DocumentReceiver`, {
        method: 'POST',
        mode: 'cors',
        headers,
        body: JSON.stringify({userId, content})
      })
      .then(data => console.log('success', data.status));
    }

  };

  return (
    <div className="App">
      <img src="innovationjam.png" alt="background" className="background-image"/>
      <div><TextField type="text" label="userId" value={userId} onChange={handleUserId} /> </div>
      <div><TextField type="text" label="content" value={content} onChange={handleContent} />  </div>
      <div className="button-form">
        <Button color="primary" onClick={clickHandler}>Submit</Button>
      </div>
    </div>
  );
}

export default App;
