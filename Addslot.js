
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useLocation ,useNavigate} from 'react-router-dom';
import 'animate.css';



const Addslot = () => {
  
 
  const location = useLocation();
  const selectedEmployees = location.state?.selectedEmployees || [];
  const selectedCount = location.state?.selectedCount || 0;

  const navigate = useNavigate();
  

   const [newErrors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    selectedEmployee: '',
    batchName:'',
    courseName: '',
    startDate:'',
    toDate:'',
    duration:'',
    trainerName:'',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
      selectedEmployee: selectedCount+"" 
    }));
  };
  

  const currentDate = new Date();
  const currentDateWithoutTime = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );






  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};




    const batchNameRegex = /^[a-zA-Z0-9\s,.'-:/]+$/;
    if (!formData.batchName.trim()) {
      newErrors.batchName = " Batch Name is required";
    } else if (!batchNameRegex.test(formData.batchName)) {
      newErrors.batchName = "Batch Name should be letters (a-z, A-Z)";
    }

  
    const courseNameRegex = /^[a-zA-Z0-9\s,.'-:/]+$/;
    if (!formData.courseName.trim()) {
      newErrors.courseName = "Course Name is required";
    } else if (!courseNameRegex.test(formData.courseName)) {
      newErrors.courseName = "Course Name should be letters (a-z, A-Z)";
    }
  
    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.toDate);
  
    if (!formData.startDate || isNaN(startDate) || startDate < currentDateWithoutTime) {
      newErrors.startDate = "Please enter a valid start date, should be today or future";
    }
  
    if (!formData.toDate || isNaN(endDate) || endDate < startDate) {
      newErrors.toDate = "Please enter a valid end date, should be after start date";
    }
  
    const durationRegex = /^[a-zA-Z]+[0-9]+$/;
    if (!formData.duration.trim()) {
      newErrors.duration = "Duration is required";
    }
  
    const trainerNameRegex = /^[a-zA-Z]+$/;
    if (!formData.trainerName.trim()) {
      newErrors.trainerName = "Enter Trainer Name";
    } else if (!trainerNameRegex.test(formData.trainerName)) {
      newErrors.trainerName = "Enter Trainer Name here";
    }

    setErrors(newErrors);


      if (Object.keys(newErrors).length === 0) {
        const storedIds = JSON.parse(localStorage.getItem('checkedItems'));
      

        if (!storedIds) {
          console.error('No IDs found in local storage');
          return;
        }
      
         const employeeIds = Object.keys(storedIds).filter(key => storedIds[key]);
        // const employeeIds = Object.keys(storedIds).filter(key=> storedIds[key]=== true);
        if (employeeIds.length === 0) {
          console.error('No employee IDs selected');
          return;
        }
         console.log('Employee IDs:', employeeIds);
 
    
    const requestData = {
      selectedEmployee: selectedCount,
      batchName: formData.batchName,
      courseName: formData.courseName,
      startDate: formData.startDate,
      toDate: formData.toDate,
      duration: formData.duration,
      trainerName: formData.trainerName,
      // Convert employeeIds array to comma-separated string
      employeeIds: employeeIds.join(','),
    };
    // Construct the API URL
    const apiUrl = `http://localhost:1214/api/addslots/CreateSlot/${employeeIds.join(',')}`;
    // Send POST request
    axios.post(apiUrl, requestData)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        // Clear form data
        setFormData({
          selectedEmployee: '',
          batchName: '',
          courseName: '',
          startDate: '',
          toDate: '',
          duration: '',
          trainerName: '',
        });
        alert("Form submitted successfully");
        // Redirect to another page
        navigate('/AllDetailsPage', { state: { selectedEmployees, formData } });
      })
      .catch(error => {
        console.error('Error saving data:', error);
        console.log('Axios Response:', error.response);
      });
  }
  setErrors(newErrors);
};
  return (
    <>
      <div className="boat" style={{ margin: 'auto', backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: 'center', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:"150px" }}>

           
        <div className="form-container animate__animated animate__fadeInDown " style={{ marginLeft: "150px", border: '3px solid #af87f8', borderRadius: '20px', overflow: 'hidden', padding: '20px', boxSizing: 'border-box', maxWidth: '460px', width: '100%', boxShadow: '10px  8px 20px rgb(24, 23, 23)', backdropFilter: 'blur(0.5px)', backgroundColor: 'rgb(228, 228, 228)' }}>
          <form className="hed" onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ textAlign: 'center', fontWeight: "bold", fontSize: '30px', color: 'rgb(5, 5, 5)' }}>ADD SLOT</h4>
            <p className="animate__animated animate__fadeInRightBig" style={{ fontWeight: 'bold', fontSize: '1em', marginTop:"20px" }}>Selected Employees: {selectedCount}</p>
            <table style={{ width: '80%' }}>


              
              <tbody>


              <tr>
                  <td>
                    <label style={{ color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>Batch Name : </label>
                  </td>
                  <td style={{ width: '50%' }}>
                    <input
                      type="text"
                      placeholder="Enter Batch Name "
                      name="batchName"
                      value={formData.batchName}
                      onChange={handleInputChange}
                      style={{width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black' }}
                    />
                    {newErrors.batchName && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.batchName}</span>}
                  </td>
                </tr>


                <tr>
                  <td>
                    <label style={{ color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>Course Name </label>
                  </td>
                  <td style={{ width: '50%' }}>
                    <input
                      type="text"
                      placeholder="Enter Course Name "
                      name="courseName"
                      value={formData.courseName}
                      onChange={handleInputChange}
                      style={{width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black' }}
                    />
                    {newErrors.courseName && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.courseName}</span>}
                  </td>
                </tr>

                <tr>
                  <td style={{ width: '50%' }}>
                    <label style={{ color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>Start Date </label>
                  </td>
                  <td style={{ width: '50%' }}>
                    <input
                      type="date"
                      placeholder='Enter date here'
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black' }}
                    />
                    {newErrors.startDate && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.startDate}</span>}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '50%' }}>
                    <label style={{ color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>End Date</label>
                  </td>
                  <td style={{ width: '50%' }}>
                    <input
                      type="date"
                      name="toDate"
                      value={formData.toDate}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black'}}
                    />
                    {newErrors.toDate && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.toDate}</span>}
                  </td>
                </tr>




                <tr>
                  <td>
                    <label style={{color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>Duration </label></td>
                  <td style={{ width: '50%' }}>

                    <input
                      type="text"
                      placeholder="Hrs or days"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black' }}
                    />
                    <div>
                      {newErrors.duration && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.duration}</span>}</div>
                  </td>
                </tr>




                <tr>
                  <td>
                    <label style={{color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>Trainer Name </label></td>
                  <td style={{ width: '50%' }}>

                    <input
                      type="text"
                      placeholder="Enter Trainer Name "
                      name="trainerName"
                      value={formData.trainerName}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black' }}
                    />
                    <div>
                      {newErrors.trainerName && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.trainerName}</span>}</div>
                  </td>
                </tr>

                <tr>
                  <td style={{ display: "inline-block" }}></td>
                  <td style={{ width: '50%' }}>
                  <div className="button-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
  <div className="button-group" style={{   display: 'flex',  width: '280px' }}>
    <button type="submit" style={{ marginLeft:"65px",backgroundColor: 'rgb(34, 10, 248)', padding: '3px', width: '60px', borderRadius: '5px', color: 'azure' }}>Submit</button>   <span><Link to="."><button type="button" style={{marginLeft:"4px", backgroundColor: 'rgb(34, 10, 248)', padding: '3px', width: '60px', borderRadius: '5px', color: 'azure' }}>Back</button></Link></span>
  </div>
  
  </div> 
 


                       
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default Addslot;




















