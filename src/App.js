// App.js
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Navbar'; // Fix: Correct file name
import HomePage from './pages/Home';
import ContactPage from './pages/Contactpage'; // Fix: Correct file name

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
