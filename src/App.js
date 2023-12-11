import React, { useState } from 'react';
import FetchVideoSection from './components/FetchVideoSection';
import './App.css';

function App() {
  const [videoId, setVideoId] = useState('');

  const handleInputChange = (event) => {
    setVideoId(event.target.value);
  };

  return (
    <div className="app">
      <h1 id='head'>Search YouTube Video's By Just Pasting ID</h1> 
      <div id='searchPanel'>
        <input id='inputBox' type="text" placeholder="Paste YouTube Video ID" value={videoId} onChange={handleInputChange} />
      </div>
      <div id='playerCont'>
      {videoId && <FetchVideoSection videoId={videoId} />}
      </div>
      
    </div>
  );
}

export default App;
