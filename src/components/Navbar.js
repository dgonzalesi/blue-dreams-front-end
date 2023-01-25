import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Ships from './Ships';
import Reservations from './Reservations';
import Home from './Home';
import Login from './Login';

// eslint-disable-next-line no-console
const MyTest = () => console.log('Sign Out');

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ships">Ships</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><button type="submit" onClick={MyTest}>Sign Out</button></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ships" element={<Ships />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}