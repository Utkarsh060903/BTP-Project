import React, { useState } from 'react';
import "./form.css"
import { useEffect } from 'react';
import { useFormik } from 'formik';

const GuestHouseBookingForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentRollNumber: '',
    studentDepartment: '',
    studentMobileNumber: '',
    numberOfMales: '',
    numberOfFemales: '',
    numberOfChildren: '',
    guestMobileNumber: '',
    guestName: '',
    numberOfRooms: '',
    arrivalDate: '',
    departureDate: '',
    guestRelation: '',
    gender: '',
    guestPurpose: ''
  });

  const [nameError, setNameError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "studentName") {
      if (value.length < 3 || value.length > 10) {
        setNameError('Student name should be between 3 to 10 characters');
      } else {
        setNameError('');
      }
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    const form = document.querySelector("form");
    const nextBtn = form.querySelector(".nextBtn");
    const backBtn = form.querySelector(".backBtn");
    const allInput = form.querySelectorAll(".first input");

    const handleNextClick = () => {
      allInput.forEach(input => {
        if (input.value !== "") {
          form.classList.add('secActive');
        } else {
          form.classList.remove('secActive');
        }
      })
    };

    const handleBackClick = () => {
      form.classList.remove('secActive');
    };

    nextBtn.addEventListener("click", () => {
      allInput.forEach(input => {
        if (input.value !== "") {
          form.classList.add('secActive');
        } else {
          form.classList.remove('secActive');
        }
      })
    });

    backBtn.addEventListener("click", () => form.classList.remove('secActive'));

    return () => {
      nextBtn.removeEventListener("click", handleNextClick);
      backBtn.removeEventListener("click", handleBackClick);
    };
  }, []);

  return (
    <>
      <div className="bodyy">
        <div className="container">
          <header>Room Booking</header>

          <form onSubmit={handleSubmit}>
            <div className="form first">
              <div className="details personal">
                <span className="title">Student Details</span>

                <div className="fields">
                  <div className="input-field">
                    <label>Full Name</label>
                    <input type="text" name="studentName" placeholder="Enter your name" value={formData.studentName} onChange={handleChange} />
                    {nameError && <p className="error">{nameError}</p>}
                  </div>

                  {/* Other input fields */}
                </div>
              </div>

              {/* Guest Details and other sections */}
            </div>

            {/* Buttons and other form sections */}
          </form>
        </div>
      </div>
    </>
  );
};

export default GuestHouseBookingForm;
