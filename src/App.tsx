import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';
import './App.css';
import Home from './page/Home/Home.tsx';
import Header from './components/Header/Header.tsx';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
