"use client"
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok){
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <form className="contact_form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="name"
              name="name"
              className="form-control"
              required="required"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="email"
              name="email"
              className="form-control required email"
              required="required"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="phone"
              name="phone"
              className="form-control required phone"
              required="required"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="subject"
              name="subject"
              className="form-control required"
              required="required"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-12">
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              className="form-control required"
              rows="8"
              required="required"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          {/* End .col */}

          <div className="form-group mb0">
            <button type="submit" className="btn btn-lg btn-thm">
              Send Message
            </button>
          </div>
          {/* End button submit */}
        </div>
      </div>
    </form>
  );
};

export default Form;
