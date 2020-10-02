import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  useEffect(() => {
    const pusher = new Pusher('3eb645d6628131c667e0', {
      cluster: 'ap3'
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__body"> 
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
