import React, { useState } from 'react';

const GuestHouseBookingForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentRollNumber: '',
    studentDepartment: '',
    studentMobileNumber: '',
    numberOfGuests: '',
    guestMobileNumber: '',
    numberOfRooms: '',
    arrivalDate: '',
    departureDate: ''
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
    // Perform form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Student Name:
        <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} />
      </label>
      <label>
        Student Roll Number:
        <input type="text" name="studentRollNumber" value={formData.studentRollNumber} onChange={handleChange} />
      </label>
      <label>
        Student Department:
        <input type="text" name="studentDepartment" value={formData.studentDepartment} onChange={handleChange} />
      </label>
      <label>
        Student Mobile Number:
        <input type="text" name="studentMobileNumber" value={formData.studentMobileNumber} onChange={handleChange} />
      </label>
      <label>
        Number of Guests:
        <input type="number" name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange} />
      </label>
      <label>
        Guest Mobile Number:
        <input type="text" name="guestMobileNumber" value={formData.guestMobileNumber} onChange={handleChange} />
      </label>
      <label>
        Number of Rooms Required:
        <input type="number" name="numberOfRooms" value={formData.numberOfRooms} onChange={handleChange} />
      </label>
      <label>
        Arrival Date:
        <input type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} />
      </label>
      <label>
        Departure Date:
        <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default GuestHouseBookingForm;
