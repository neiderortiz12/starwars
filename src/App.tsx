import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Person from './pages/Person';
import AppRouter from './routes/AppRouter';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRouter/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Home/>
      <Person/> */}
    </div>
  );
}

export default App;
