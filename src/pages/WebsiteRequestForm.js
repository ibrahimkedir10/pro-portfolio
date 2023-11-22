import React, { useState } from 'react';
import axios from 'axios';
import '../style/websiteRequest.css';

const WebsiteRequestForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    websiteType: '',
    websiteDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the server
      const response = await axios.post('/send-email', formData);
      console.log(response.data); // Log server response
      onSubmit(formData); // Optional: Callback function for additional handling on the client side
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="about4">
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <br />

        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Choose Website Type:
          <select name="websiteType" value={formData.websiteType} onChange={handleChange}>
            <option value="business">Business</option>
            <option value="personal">Personal</option>
            <option value="someoneElse">For Someone Else</option>
          </select>
        </label>
        <br />
        <div>
          <label>
            Website Description (100 words):
            <textarea
              name="websiteDescription"
              value={formData.websiteDescription}
              onChange={handleChange}
              rows="4"
              cols="50"
            />
          </label>
          <br />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default WebsiteRequestForm;
