import React from 'react';
import "./form.css"
import { useForm } from 'react-hook-form';

function GuestHouseBookingForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
    };

    return (
        <>
            <div className="bodyy">
                <div className="container">
                    <header>Room Booking</header>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form first">
                            <div className="details personal">
                                <span className="title">Student Details</span>

                                <div className="fields">
                                    <div className="input-field">
                                        <label>Full Name</label>
                                        <input type="text" {...register("studentName")} placeholder="Enter your name" />
                                    </div>

                                    <div className="input-field">
                                        <label>Roll Number</label>
                                        <input type="number" {...register("studentRollNumber")} placeholder="Enter roll number" />
                                    </div>

                                    <div className="input-field">
                                        <label>Department</label>
                                        <input type="text" {...register("studentDepartment")} placeholder="Enter your branch" />
                                    </div>

                                    <div className="input-field">
                                        <label>Mobile Number</label>
                                        <input type="number" {...register("studentMobileNumber")} placeholder="Enter mobile number" />
                                    </div>

                                    <div className="input-field">
                                        <label>Gender</label>
                                        <select {...register("gender")}>
                                            <option disabled selected>Select gender</option>
                                            <option value={"Male"}>Male</option>
                                            <option value={"Female"}>Female</option>
                                            <option value={"Others"}>Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="details ID">
                                <span className="title">Guest Details</span>

                                <div className="fields">
                                    <div className="input-field">
                                        <label>Number of Rooms Required</label>
                                        <input type="number" {...register("numberOfRooms")} placeholder="Enter no. of rooms" />
                                    </div>

                                    {/* Add more fields similarly */}
                                    <div class="input-field">
                                        <label>Number of Males</label>
                                        <input type="number" name="numberOfMales"  {...register("numberOfMales")}   placeholder="Enter no. of males"  />
                                    </div>

                                    <div class="input-field">
                                        <label>Number of Females</label>
                                        <input type="number" name="numberOfFemales"  {...register("numberOfFemales")}  placeholder="Enter no. of females"  />
                                    </div>

                                    <div class="input-field">
                                        <label>Number of Children</label>
                                        <input type="number" name="numberOfChildren"  {...register("numberOfChildren")}   placeholder="Enter  no. of children" value={formData.numberOfChildren} onChange={handleChange} />
                                    </div>

                                    <div class="input-field">
                                        <label>Guest Name</label>
                                        <input type="text" placeholder="Enter guest name" name="guestName" {...register("guestName")}    />
                                    </div>

                                    <div class="input-field">
                                        <label>Mobile Number</label>
                                        <input type="number" name="guestMobileNumber"  {...register("guestMobileNumber")}   placeholder="Enter mobile number"  />
                                    </div>

                                </div>

                                <button type="submit" className="nextBtn">
                                    <span className="btnText">Next</span>
                                    <i className="uil uil-navigator"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default GuestHouseBookingForm;
