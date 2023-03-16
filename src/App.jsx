import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './components/error/Error';
import Login from './components/login/Login';
import Admin from './pages/Admin';
import Teacher from './pages/Teacher';
import Parent from './pages/Parent';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
