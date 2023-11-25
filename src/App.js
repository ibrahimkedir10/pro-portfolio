// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Navbar';
import HomePage from './pages/Home';
import FormpPage from './components/form'
import WebsiteRequestForm from './pages/WebsiteRequestForm'; // Fix: Correct file name
import axios from 'axios';



const App = () => {
  const [submissionData, setSubmissionData] = useState(null);

  const handleFormSubmit = (data) => {
    // Handle form submission data if needed
  };

  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/WebsiteRequestForm" element={<WebsiteRequestForm onSubmit={handleFormSubmit} />} />
        </Routes>
        {submissionData && (
          <div className="submission-popup">
            <p>Thank you for submitting! We'll get in touch with you soon.</p>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
