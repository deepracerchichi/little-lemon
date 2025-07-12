import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import HomePage from './component/HomePage';
import BookingPage from './component/BookingPage';
import About from './component/About';
import Menu from './component/Menu';
import OrderOnline from './component/OrderOnline';
import Login from './component/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<BookingPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/order" element={<OrderOnline />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
