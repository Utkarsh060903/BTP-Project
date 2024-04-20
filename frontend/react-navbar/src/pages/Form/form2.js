import React, { useState } from 'react';
import "./form.css"
import { useEffect } from 'react';
import {useFormik} from 'formik';
import { useForm } from 'react-hook-form';
// import handleNextClick from

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

  const handleChange = (e) => {
    const { name, value } = e.target;
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
          if(input.value !== ""){
            form.classList.add('secActive');
          } else {
            form.classList.remove('secActive');
          }
        })
      };
  
      const handleBackClick = () => {
        form.classList.remove('secActive');
      };

    nextBtn.addEventListener("click", ()=> {
      allInput.forEach(input => {
        if(input.value !== ""){
          form.classList.add('secActive');
        } else {
          form.classList.remove('secActive');
        }
      })
    });

    backBtn.addEventListener("click", () => form.classList.remove('secActive'));

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      nextBtn.removeEventListener("click", handleNextClick);
      backBtn.removeEventListener("click", handleBackClick);
    };
  }, []); 

  return (
    <>
    <div class="bodyy">                                                         
    <div class="container">
    <header>Room Booking</header>

    <form onSubmit={handleSubmit}>
        <div class="form first">
            <div class="details personal">
                <span class="title">Student Details</span>

                <div class="fields">
                    <div class="input-field">
                        <label>Full Name</label>
                        <input type="text" name="studentName" placeholder="Enter your name" value={formData.studentName} onChange={handleChange} />
                    </div>

                    <div class="input-field">
                        <label>Roll Number</label>
                        <input type="number" name="studentRollNumber" placeholder="Enter roll number" value={formData.studentRollNumber} onChange={handleChange}/>
                    </div>

                    <div class="input-field">
                        <label>Department</label>
                        <input type="text" name="studentDepartment" placeholder="Enter your branch"  value={formData.studentDepartment} onChange={handleChange} />
                    </div>

                    <div class="input-field">
                        <label>Mobile Number</label>
                        <input type="number" name="studentMobileNumber" placeholder="Enter mobile number" value={formData.studentMobileNumber} onChange={handleChange}/>
                    </div>

                    <div class="input-field">
                        <label>Gender</label>
                        <select  name="gender" value={formData.gender} onChange={handleChange}>
                            <option disabled selected>Select gender</option>
                            <option value={"Male"}>Male</option>
                            <option value={"Female"}>Female</option>
                            <option value={"Others"}>Others</option>
                        </select>
                    </div>

                    {/* <div class="input-field">
                        <label>Occupation</label>
                        <input type="text" placeholder="Enter your ccupation" />
                    </div> */}
                </div>
            </div>

            <div class="details ID">
                <span class="title">Guest Details</span>

                <div class="fields">
                    <div class="input-field">
                        <label>Number of Rooms Required</label>
                        <input type="number" placeholder="Enter no. of rooms"  name="numberOfRooms" value={formData.numberOfRooms} onChange={handleChange}/>
                    </div>

                    <div class="input-field">
                        <label>Number of Males</label>
                        <input type="number" name="numberOfMales" placeholder="Enter no. of males" value={formData.numberOfMales} onChange={handleChange} />
                    </div>

                    <div class="input-field">
                        <label>Number of Females</label>
                        <input type="number" name="numberOfFemales" placeholder="Enter no. of females" value={formData.numberOfFemales} onChange={handleChange} />
                    </div>

                    <div class="input-field">
                        <label>Number of Children</label>
                        <input type="number" name="numberOfChildren" placeholder="Enter  no. of children"  value={formData.numberOfChildren} onChange={handleChange}/>
                    </div>

                    <div class="input-field">
                        <label>Guest Name</label>
                        <input type="text" placeholder="Enter guest name"  name="guestName" value={formData.guestName} onChange={handleChange} />
                    </div>

                    <div class="input-field">
                        <label>Mobile Number</label>
                        <input type="number" name="guestMobileNumber" placeholder="Enter mobile number" value={formData.guestMobileNumber} onChange={handleChange}/>
                    </div>   
                </div>

                <button class="nextBtn">
                    <span class="btnText">Next</span>
                    <i class="uil uil-navigator"></i>
                </button>
            </div> 
        </div>

        <div class="form second">
            <div class="details address">
                <span class="title">Guest Details</span>

                <div class="fields">
                    <div class="input-field">
                        <label>Relation</label>
                        <input type="text" name="guestRelation" placeholder="Enter relation with guest" value={formData.guestRelation} onChange={handleChange}/>
                    </div>

                    <div class="input-field">
                        <label>Check-In Date</label>
                        <input type="date"  />
                    </div>

                    <div class="input-field">
                        <label>Check-Out Date</label>
                        <input type="date" />
                    </div>

                    <div class="input-field">
                        <label>Purpose Of Visit</label>
                        <input type="text" name="guestPurpose" placeholder="Enter purpose" value={formData.guestPurpose} onChange={handleChange}/>
                    </div>

                    {/* <div class="input-field">
                        <label>Block Number</label>
                        <input type="number" placeholder="Enter block number" />
                    </div>

                    <div class="input-field">
                        <label>Ward Number</label>
                        <input type="number" placeholder="Enter ward number" />
                    </div> */}
                </div>
            </div>

            <div class="details family">
                {/* <span class="title">Family Details</span>

                <div class="fields">
                    <div class="input-field">
                        <label>Father Name</label>
                        <input type="text" placeholder="Enter father name" />
                    </div>

                    <div class="input-field">
                        <label>Mother Name</label>
                        <input type="text" placeholder="Enter mother name" />
                    </div>

                    <div class="input-field">
                        <label>Grandfather</label>
                        <input type="text" placeholder="Enter grandfther name" />
                    </div>

                    <div class="input-field">
                        <label>Spouse Name</label>
                        <input type="text" placeholder="Enter spouse name" />
                    </div>

                    <div class="input-field">
                        <label>Father in Law</label>
                        <input type="text" placeholder="Father in law name" />
                    </div>

                    <div class="input-field">
                        <label>Mother in Law</label>
                        <input type="text" placeholder="Mother in law name" />
                    </div> */}
                {/* </div> */}

                <div class="buttons">
                    <div class="backBtn">
                        <i class="uil uil-navigator"></i>
                        <span class="btnText">Back</span>
                    </div>
                    
                    <button class="sumbit">
                        <span class="btnText">Submit</span>
                        <i class="uil uil-navigator"></i>
                    </button>
                </div>
            </div> 
        </div>
    </form>
</div>
</div>

</>
      
    
  );
};

export default GuestHouseBookingForm;
