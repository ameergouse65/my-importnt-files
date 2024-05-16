import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function DoctorSlotBooking() {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(""); 
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [formData, setFormData] = useState({
    petName: "",
    petBreed: "",
    userEmail: "",
    userMobileNumber: "",
    typeOfService: "",
    petDescription: ""
  });
  const navigate = useNavigate();

  const availableTimeSlots = ['10:00 AM', '10:30 AM', '11:00 AM','11:30 AM','12:00 PM','12:30 PM','01:00 PM','01:30 PM','02:00 PM','02:30 PM',
  '03:00 PM','03:30 PM','04:00 PM','04:30 PM','05:00 PM','05:30 PM','06:00 PM','06:30 PM','07:00 PM'];

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const storedDoctorDetails = JSON.parse(localStorage.getItem('doctorDetails'));
        const response = await fetch(`http://localhost:9005/petex/doctor/${storedDoctorDetails.doctId}`);
        if (response.ok) {
          const doctorDetails = await response.json();
          console.log('Fetched Doctor Details:', doctorDetails);
          setDoctorDetails(doctorDetails);
        } else {
          console.error('Failed to fetch doctor details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      }
    };

    fetchDoctorDetails();
  }, []);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        if (selectedDate && doctorDetails) {
          const response = await fetch(`http://localhost:9009/api/v1/doctor/${doctorDetails.doctId}/${selectedDate}`);
          if (response.ok) {
            const result = await response.json();
            setAppointments(result);
          } else {
            console.error('Failed to fetch appointments:', response.statusText);
          }
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [selectedDate, doctorDetails]);

  const isTimeSlotAvailable = (timeSlot) => {
    const matchingAppointment = appointments.find(appointment => appointment.bookingTime === timeSlot);
    return !matchingAppointment;
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setSelectedDate(selectedDate);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };
  const handleBackToDoctors = () => {
    navigate('/doctordetails');
  };
  const validateForm = () => {
    const { petName, petBreed, userEmail, userMobileNumber, petDescription } = formData; // Destructure formData
    if (!petName || !petBreed || !userEmail || !userMobileNumber || !petDescription) {
      alert("All fields are required");
      return false;
    }

    if (!validateEmail(userEmail)) {
      alert("Invalid email format");
      return false;
    }

    if (!validateMobileNumber(userMobileNumber)) {
      alert("Invalid mobile number format");
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateMobileNumber = (mobileNumber) => {
    const re = /^\d{10}$/;
    return re.test(mobileNumber);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));
      const response = await fetch(`http://localhost:9009/api/v1/save/${userDetails.userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          bookingDate: selectedDate,
          bookingTime: selectedTimeSlot, 
          doctId: doctorDetails.doctId
        })
      });
      if (response.ok) {
        console.log('Appointment booked successfully!');
        alert('Booking successful');
        window.location.reload();
      } else {
        console.error('Failed to book appointment:', response.statusText);
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
    <button 
      onClick={handleBackToDoctors} 
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: '#ccc',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Back to doctors
    </button>

    {/* Doctor Image and Details */}
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px',justifyContent: 'flex-start' }}>
      {doctorDetails && (
        <div style={{ marginRight: '20px' }}>
          {doctorDetails.image && (
            <img
              src={`data:image/jpeg;base64,${doctorDetails.image}`}
              alt="Doctor"
              style={{ width: '250px', height: '250px', objectFit: 'cover', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}
            />
          )}
        </div>
      )}
      {/* Doctor Details */}
      <div>
        {doctorDetails && (
          <div>
            <h1 style={{ marginBottom: '10px' }}>Doctor Details</h1>
            <p><strong>Doctor Name:</strong> {doctorDetails.doctorName}</p>
            <p><strong>Qualification and Specialization:</strong> {doctorDetails.qualificationAndSpecialization}</p>
            <p><strong>Overall Experience:</strong> {doctorDetails.overAllExperience}</p>
            <p><strong>Registration Body:</strong> {doctorDetails.registrationBody}</p>
            <p><strong>Medical Board:</strong> {doctorDetails.medicalBoard}</p>
            <p><strong>Description:</strong> {doctorDetails.discription}</p>
            <p><strong>Clinic Name:</strong> {doctorDetails.clinicName}</p>
          </div>
        )}
      </div>
    </div>

    {/* Date Selection */}
    <div style={{ display: 'flex', marginLeft:'300px', alignItems: 'flex-start', marginBottom: '20px', width: '100%' }}>
      <div>
        <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <label htmlFor="dateInput" style={{ marginRight: '10px' }}>Select Date:</label>
          <input type="date" id="dateInput" value={selectedDate} onChange={handleDateChange} />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '10px', width:'400px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ width: '100%', textAlign: 'center', marginBottom: '10px' }}>Available Time Slots:</h1>
          {availableTimeSlots.map((timeSlot, index) => (
            <button
              key={index}
              style={{
                backgroundColor: selectedTimeSlot === timeSlot ? 'blue' : (isTimeSlotAvailable(timeSlot) ? 'green' : 'red'),
                margin: '3px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '8px',
                cursor: 'pointer'
              }}
              disabled={!isTimeSlotAvailable(timeSlot)}
              onClick={() => handleTimeSlotSelect(timeSlot)}
            >
              {timeSlot}
            </button>
          ))}
        </div>
      </div>

      <div style={{ width: '40%' }}>
        <div className="appointment-form" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Book Appointment</h2>
          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '15px' }}> 
              <label htmlFor="petName" style={{ display: 'block', marginBottom: '5px' }}>Pet Name:</label> 
              <input type="text" id="petName" name="petName" value={formData.petName} onChange={handleInputChange} style={{ padding: '8px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div> 
            <div style={{ marginBottom: '15px' }}> 
              <label htmlFor="petBreed" style={{ display: 'block', marginBottom: '5px' }}>Pet Breed:</label> 
              <input type="text" id="petBreed" name="petBreed" value={formData.petBreed} onChange={handleInputChange} style={{ padding: '8px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div> 
            <div style={{ marginBottom: '15px' }}> 
              <label htmlFor="userEmail" style={{ display: 'block', marginBottom: '5px' }}>Your Email:</label> 
              <input type="email" id="userEmail" name="userEmail" value={formData.userEmail} onChange={handleInputChange} style={{ padding: '8px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div> 
            <div style={{ marginBottom: '15px' }}> 
              <label htmlFor="userMobileNumber" style={{ display: 'block', marginBottom: '5px' }}>Your Mobile Number:</label> 
              <input type="tel" id="userMobileNumber" name="userMobileNumber" value={formData.userMobileNumber} onChange={handleInputChange} style={{ padding: '8px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div> 
            <div style={{ marginBottom: '15px' }}> 
              <label htmlFor="typeOfService" style={{ display: 'block', marginBottom: '5px' }}>Type of Service:</label> 
              <select 
                id="typeOfService" 
                name="typeOfService" 
                value={formData.typeOfService} 
                onChange={handleInputChange} 
                style={{ padding: '8px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
              >
                <option value="">Select Type of Service</option>
                <option value="Service 1">Appointment</option>
                <option value="Service 2">HomeVisit</option>
                <option value="Service 3">Vaccination</option>
              </select>
            </div> 
            <div style={{ marginBottom: '15px' }}> 
              <label htmlFor="petDescription" style={{ display: 'block', marginBottom: '5px' }}>Pet Description:</label> 
              <textarea id="petDescription" name="petDescription" value={formData.petDescription} onChange={handleInputChange} style={{ padding: '8px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
            </div> 
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Book Appointment</button> 
          </form> 
        </div> 
      </div>
    </div>
  </div>
  );
}

export default DoctorSlotBooking;
