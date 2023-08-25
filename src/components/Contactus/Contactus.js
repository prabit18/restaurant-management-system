import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Contactus.css"
import { Link } from "react-router-dom";


const Contactus = () => {
    const Peoples = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const [peopleCount, setPeopleCount] = useState(Peoples[0]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const[showCalender,setShowCalender] = useState(false)
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSelect = (event) => {
    setPeopleCount(event.target.value);
  };
  return (
    <div className='contact'>
          {/* <Link className="btn btn-light mx-1" to="/Home" role="button">
            Back
          </Link> */}
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Welcome to Daily Delight</h2>
                </div>
            </div>
            <div className="row" style={{marginTop:"-90px"}}>
                <div className="col-lg-12">
                    <form name="sentMessage" id="contactForm" novalidate="">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Full Name :</label>
                                    <input type="text" className="form-control" placeholder="Your Name *" id="name" required="" data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <label>Email Address :</label>
                                    <input type="email" className="form-control" placeholder="Your Email *" id="email" required="" data-validation-required-message="Please enter your email address."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <label>Mobile No. :</label>
                                    <input type="tel" className="form-control" placeholder="Your Phone *" id="phone" required="" data-validation-required-message="Please enter your phone number."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group" style={{marginLeft:"100px"}}>
                                        <label>Total Peoples: </label>
                                        <select value={peopleCount} onChange={handleSelect}>
                                        {Peoples.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                        ))}
                                    </select>
                                    <div>
                                        <label>Select Date:</label>
                                        <Calendar onChange={handleDateChange} value={selectedDate} />
                                        <p>Selected Date: {selectedDate.toDateString()}</p>
                                    </div>
                                    {/* <textarea className="form-control-msg" placeholder="Your Message" id="message" required="" data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p> */}
                                </div>
                            </div>
                            <div className="col-lg-12 text-center">
                                <button type="submit" style={{backgroundColor:"cornflowerblue",marginTop:"-22px"}}>Book Table</button>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Contactus
