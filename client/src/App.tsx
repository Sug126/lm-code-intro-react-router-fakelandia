import {useState} from 'react';
import './App.css';
import Router from "./Router"
import { BrowserRouter } from 'react-router-dom';
import Home from "./Home"

function App() {
  return (
    <><div className="App">
      <Home />
    </div><>
        <BrowserRouter>
          <Router />

        </BrowserRouter>

      </></>
  );
}

export default App;
