import React, { useState } from 'react';
import '../App.css'; 

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Here you would typically send the data to a server or perform other actions
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <div className="booking-header">
          <div className="logo-container">
            <svg width="100" height="100" viewBox="0 0 100 100" xmlns="../images/Logo.svg">
              <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
            </svg>
            <h1>Little Lemon Restaurant</h1>
          </div>
          <div className="booking-intro">
            <h2 className="reserve-title">Reserve a Table</h2>
            <p className="experience-text">
              Experience culinary excellence. <br/>
              Book your table now and prepare for an unforgettable dining experience.
            </p>
          </div>
        </div>

        <div className="booking-form-container">
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="submit-button">
              Reserve Table
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;