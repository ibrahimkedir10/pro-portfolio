// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Navbar';
import HomePage from './pages/Home';
import ContactUs from './components/form';
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
          <Route path="/ContactUs" element={<ContactUs />} />
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
