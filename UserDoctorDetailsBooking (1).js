import React, { useState, useEffect } from 'react';
import DoctorSlotBooking from './DoctorSlotBooking';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function DoctorDetails() {
  const [doctors, setDoctors] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [location, setLocation] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const navigate = useNavigate(); 

  const handleOptionClick = async (doctId) => {
    try {
      const response = await fetch(`http://localhost:9005/petex/doctor/${doctId}`);
      if (response.ok) {
        const doctorDetails = await response.json();
        console.log('Doctor Details:', doctorDetails);
        localStorage.setItem('doctorDetails', JSON.stringify(doctorDetails));
        navigate('/slot'); 
      } else {
        console.error('Failed to fetch doctor details:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching doctor details:', error);
    }
  };
  
  
  const handleBackToDoctors = () => {
    setIsOptionSelected(false);
    setSelectedOption(null);
  };

  const renderSelectedOption = () => {
    switch (selectedOption) {
      case 'DoctorSlotBooking':
        return <DoctorSlotBooking handleBackToDoctors={handleBackToDoctors} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    fetchAllDoctors();
  }, []);

  const fetchAllDoctors = () => {
    fetch('http://localhost:9005/petex/getAll')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching doctors:', error));
  };

  const fetchDoctorByName = (name) => {
    fetch(`http://localhost:9005/petex/doctors/${name}`)
      .then(response => response.json())
      .then(data => setFilteredDoctors(data))
      .catch(error => console.error('Error fetching doctor by name:', error));
  };

  const fetchDoctorsByLocation = () => {
    if (location.trim() !== '') {
      fetch(`http://localhost:9005/petex/doctors/location/${location}`)
        .then(response => response.json())
        .then(data => setFilteredDoctors(data))
        .catch(error => console.error('Error fetching doctors by location:', error));
    } else {
      fetchAllDoctors();
    }
  };

  const handleSearch = () => {
    if (searchName.trim() !== '') {
      fetchDoctorByName(searchName);
    } else {
      fetchAllDoctors();
    }
  };

  const handleFetchAllDoctors = () => {
    fetchAllDoctors();
    setFilteredDoctors([]);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'left', 
      justifyContent: 'left', 
      backgroundSize: 'cover', 
      backgroundPosition: 'left', 
      minHeight: '100vh', 
      padding: '20px' 
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'left', 
        justifyContent: 'left', 
        marginBottom: '20px' 
      }}>
        <select 
          value={searchName} 
          onChange={(e) => setSearchName(e.target.value)} 
          style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' , width:"15%"}} 
        >
          <option value="">Select Doctor</option>
          {doctors.map(doctor => (
            <option key={doctor.doctId} value={doctor.doctorName}>{doctor.doctorName}</option>
          ))}
        </select>
        <button 
          onClick={handleSearch} 
          style={{ 
            padding: '5px 10px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
        >
          Search by Doctor Name
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <select 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width:"15%" }} 
        >
          <option value="">Select Location</option>
          {doctors.map(doctor => (
            <option key={doctor.doctId} value={doctor.location}>{doctor.location}</option>
          ))}
        </select>
        <button 
          onClick={fetchDoctorsByLocation} 
          style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' , marginRight:"33px", width:"19%"}}
        >
          Search by Location
        </button>
      </div>
      <div style={{ marginBottom: '20px', alignSelf:'left' }}>
        <button 
          onClick={handleFetchAllDoctors} 
          style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width:"15%" }}
        >
          Fetch All Doctors
        </button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {isOptionSelected ? (
          renderSelectedOption()
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map(doctor => (
                <div key={doctor.doctId} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '250px' }}>
                  {doctor.image && doctor.image.length > 0 && (
                    <img src={`data:image/jpeg;base64,${doctor.image}`} alt={doctor.doctorName} style={{ maxWidth: '100%', marginBottom: '10px' }} />
                  )}
                  <div style={{ fontFamily: 'Arial, sans-serif' }}>
                    <h2><strong>Doctor Name:</strong> {doctor.doctorName}</h2>
                    <p><strong>Specialization:</strong> {doctor.qualificationAndSpecialization}</p>
                    <p><strong>Experience:</strong> {doctor.overAllExperience}</p>
                   
                    <p><strong>Clinic Name:</strong> {doctor.clinicName}</p>
                    <p><strong>Location:</strong> {doctor.location}</p>
                  
                  </div>
                  <button type='submit' onClick={() => handleOptionClick(doctor.doctId)} style={{textDecoration:"none", color:"white"}}>Book Appointment</button>
                </div>
              ))
            ) : (
              doctors.map(doctor => (
                <div key={doctor.doctId} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '250px' }}>
                  {doctor.image && doctor.image.length > 0 && (
                    <img src={`data:image/jpeg;base64,${doctor.image}`} alt={doctor.doctorName} style={{ maxWidth: '100%', marginBottom: '10px' }} />
                  )}
                  <div style={{ fontFamily: 'Arial, sans-serif' }}>
                    <h2><strong>Doctor Name:</strong> {doctor.doctorName}</h2>
                    <p><strong>Specialization:</strong> {doctor.qualificationAndSpecialization}</p>
                    <p><strong>Experience:</strong> {doctor.overAllExperience}</p>
                  
                    <p><strong>Clinic Name:</strong> {doctor.clinicName}</p>
                    <p><strong>Location:</strong> {doctor.location}</p>
                  
                  </div>
                  <button type='submit' onClick={() => handleOptionClick(doctor.doctId)} style={{textDecoration:"none", color:"black"}}>Book Appointment</button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorDetails;
