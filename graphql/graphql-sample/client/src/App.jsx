import React from 'react';
import './App.css';
import Dialog from './components/Dialog'
import Movies from './components/Movies/MoviesList'
import NewMovie from "./components/MovieForm/MovieForm";





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>LOGO_PROTO</div>
      </header>
      <div>
          <h4>Tyler Wyood</h4>
          <NewMovie />
          <Movies />
          <Dialog />
          <p>FLOOOOOWERS</p>

      </div>
    </div>
  );
}

export default App;
