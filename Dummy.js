

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useLocation } from 'react-router-dom';
// import 'animate.css';

// const Addslot = () => {
  
//   const location = useLocation(); 
//   const selectedCount = location.state?.selectedCount || []; 
//    const [newErrors, setErrors] = useState({});
//   const [formData, setFormData] = useState({
//     selectedEmployee: '',
//     courseName: '',
//     startDate:'',
//     toDate:'',
//     duration:'',
//     trainerName:'',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevFormData => ({

//       ...prevFormData,
//       selectedEmployee: location.state.selectedEmployee,  //disply count in dtstge
//       [name]: value

//     }));
//   };

//   const currentDate = new Date();
//   const currentDateWithoutTime = new Date(
//     currentDate.getFullYear(),
//     currentDate.getMonth(),
//     currentDate.getDate()
//   );

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     const courseNameRegex = /^[a-zA-Z0-9\s,.'-:/]+$/;
//     if (!formData.courseName.trim()) {
//       newErrors.courseName = "Course Name is required";
//     } else if (!courseNameRegex.test(formData.courseName)) {
//       newErrors.courseName = "Course Name should be letters (a-z, A-Z)";
//     }

//     const startDate = new Date(formData.startDate);
//     const endDate = new Date(formData.toDate);

//     if (!formData.startDate || isNaN(startDate) || startDate < currentDateWithoutTime) {
//       newErrors.startDate = "Please enter a valid start date, should be today or future";
//     }

//     if (!formData.toDate || isNaN(endDate) || endDate < startDate) {
//       newErrors.toDate = "Please enter a valid end date, should be after start date";
//     }


//     const durationRegex = /^[a-zA-Z]+[0-9]+$/;
//   if (!formData.duration.trim()) {
//     newErrors.duration = "Duration is required";
  
//   }

//     const trainerNameRegex = /^[a-zA-Z]+$/;
//     if (!formData.trainerName.trim()) {
//       newErrors.trainerName = "Enter Trainer Name";
//     } else if (!trainerNameRegex.test(formData.trainerName)) {
//       newErrors.trainerName = "Enter Trainer Name here";
//     }

//     setErrors(newErrors);
  
//     if (Object.keys(newErrors).length === 0) {


//       const formDataWithSelectedCount = {
//         ...formData,
//         selectedEmployee: selectedCount 


//       };
//       alert("Form submitted successfully");

//       axios.post(`http://localhost:1212/ADDSLOT/Save`, formDataWithSelectedCount)
//         .then(response => {
//           console.log("---" + formData);
//           console.log('Form submitted successfully:', response.data);
//         })
//         .catch(error => {
//           console.error('Error saving data:', error);
//           console.log('Axios Response:', error.response);
//         });

//       setFormData({
//         selectedEmployee:'',
//         courseName: '',
//         startDate: '',
//         toDate: '',
//         duration:"",
//         trainerName: '',
//       });
//     }

//   };

  


//   const handleViewSelectedEmployees = () => {
//     // Implement logic to view selected employees
//     console.log("Viewing selected employees...");
//   };

//   return (
//     <>
//       <div className="boat" style={{ margin: 'auto', height: '700px', backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: 'center', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:"150px" }}>
//         <div className="form-container animate__animated animate__fadeInDown " style={{ marginLeft: "150px", border: '3px solid #af87f8', borderRadius: '20px', overflow: 'hidden', padding: '20px', boxSizing: 'border-box', maxWidth: '460px', width: '100%', boxShadow: '10px  8px 20px rgb(24, 23, 23)', backdropFilter: 'blur(0.5px)', backgroundColor: 'rgb(228, 228, 228)' }}>
//           <form className="hed" onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//             <h4 style={{ textAlign: 'center', fontWeight: "bold", fontSize: '30px', color: 'rgb(5, 5, 5)' }}>ADD SLOT</h4>
//             <p className="animate__animated animate__fadeInRightBig" style={{ fontWeight: 'bold', fontSize: '1em', marginTop:"20px" }}>Selected Employees: {selectedCount}</p>
//             <table style={{ width: '80%' }}>
//               <tbody>
//                 <tr>
//                   <td>
//                     <label style={{ color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>Course Name </label>
//                   </td>
//                   <td style={{ width: '50%' }}>
//                     <input
//                       type="text"
//                       placeholder="Enter Course Name "
//                       name="courseName"
//                       value={formData.courseName}
//                       onChange={handleInputChange}
//                       style={{width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black' }}
//                     />
//                     {newErrors.courseName && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.courseName}</span>}
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style={{ width: '50%' }}>
//                     <label style={{ color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>Start Date </label>
//                   </td>
//                   <td style={{ width: '50%' }}>
//                     <input
//                       type="date"
//                       placeholder='Enter date here'
//                       name="startDate"
//                       value={formData.startDate}
//                       onChange={handleInputChange}
//                       style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black' }}
//                     />
//                     {newErrors.startDate && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.startDate}</span>}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style={{ width: '50%' }}>
//                     <label style={{ color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>End Date</label>
//                   </td>
//                   <td style={{ width: '50%' }}>
//                     <input
//                       type="date"
//                       name="toDate"
//                       value={formData.toDate}
//                       onChange={handleInputChange}
//                       style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black'}}
//                     />
//                     {newErrors.toDate && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.toDate}</span>}
//                   </td>
//                 </tr>




//                 <tr>
//                   <td>
//                     <label style={{color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>Duration </label></td>
//                   <td style={{ width: '50%' }}>

//                     <input
//                       type="text"
//                       placeholder="Hrs or days"
//                       name="duration"
//                       value={formData.duration}
//                       onChange={handleInputChange}
//                       style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black' }}
//                     />
//                     <div>
//                       {newErrors.duration && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.duration}</span>}</div>
//                   </td>
//                 </tr>




//                 <tr>
//                   <td>
//                     <label style={{color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>Trainer Name </label></td>
//                   <td style={{ width: '50%' }}>

//                     <input
//                       type="text"
//                       placeholder="Enter Trainer Name "
//                       name="trainerName"
//                       value={formData.trainerName}
//                       onChange={handleInputChange}
//                       style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black' }}
//                     />
//                     <div>
//                       {newErrors.trainerName && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.trainerName}</span>}</div>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style={{ display: "inline-block" }}></td>
//                   <td style={{ width: '50%' }}>
//                   <div className="button-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
//   <div className="button-group" style={{   display: 'flex',  width: '280px' }}>
//     <button type="submit" style={{ marginLeft:"65px",backgroundColor: 'rgb(34, 10, 248)', padding: '3px', width: '60px', borderRadius: '5px', color: 'azure' }}>Submit</button>   <span><Link to="."><button type="button" style={{marginLeft:"4px", backgroundColor: 'rgb(34, 10, 248)', padding: '3px', width: '60px', borderRadius: '5px', color: 'azure' }}>Back</button></Link></span>
//   </div>
//    {/* <Link to ="./Tviewselectedemployee" ><button type="button" style={{ backgroundColor: 'rgb(34, 10, 248)', padding: '8px', width: '280px', borderRadius: '5px', color: 'azure', marginTop: '10px' }} onClick={handleViewSelectedEmployees}>View Selected Employees</button>
//   </Link> */}
//   </div> 


                       
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Addslot;









// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useLocation } from 'react-router-dom';
// import 'animate.css';

// const Addslot = () => {
  
//   // const location = useLocation(); 
//   // const selectedCount = location.state?.selectedCount || []; 
//   const location = useLocation();
//   const selectedEmployees = location.state?.selectedEmployees || [];
//   const selectedCount = location.state?.selectedCount || 0;
  

//    const [newErrors, setErrors] = useState({});
//   const [formData, setFormData] = useState({
//     selectedEmployee: '',
//     courseName: '',
//     startDate:'',
//     toDate:'',
//     duration:'',
//     trainerName:'',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevFormData => ({
//       ...prevFormData,
//       [name]: value,
//       selectedEmployee: selectedCount // Update selectedEmployee with selectedCount
//     }));
//   };
  

//   const currentDate = new Date();
//   const currentDateWithoutTime = new Date(
//     currentDate.getFullYear(),
//     currentDate.getMonth(),
//     currentDate.getDate()
//   );

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
  
//     const courseNameRegex = /^[a-zA-Z0-9\s,.'-:/]+$/;
//     if (!formData.courseName.trim()) {
//       newErrors.courseName = "Course Name is required";
//     } else if (!courseNameRegex.test(formData.courseName)) {
//       newErrors.courseName = "Course Name should be letters (a-z, A-Z)";
//     }
  
//     const startDate = new Date(formData.startDate);
//     const endDate = new Date(formData.toDate);
  
//     if (!formData.startDate || isNaN(startDate) || startDate < currentDateWithoutTime) {
//       newErrors.startDate = "Please enter a valid start date, should be today or future";
//     }
  
//     if (!formData.toDate || isNaN(endDate) || endDate < startDate) {
//       newErrors.toDate = "Please enter a valid end date, should be after start date";
//     }
  
//     const durationRegex = /^[a-zA-Z]+[0-9]+$/;
//     if (!formData.duration.trim()) {
//       newErrors.duration = "Duration is required";
//     }
  
//     const trainerNameRegex = /^[a-zA-Z]+$/;
//     if (!formData.trainerName.trim()) {
//       newErrors.trainerName = "Enter Trainer Name";
//     } else if (!trainerNameRegex.test(formData.trainerName)) {
//       newErrors.trainerName = "Enter Trainer Name here";
//     }
  
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       const formDataWithSelectedEmployees = {
//         ...formData,
//         selectedCount: selectedCount 
//       };
  
//       alert("Form submitted successfully");
  
//       axios.post(`http://localhost:1212/ADDSLOT/Save`, formDataWithSelectedEmployees)
    
      
//         .then(response => {
//           console.log('Form submitted successfully:', response.data);
//           // Optionally reset form data after successful submission
//           setFormData({
//             selectedEmployee:'',
//             courseName: '',
//             startDate: '',
//             toDate: '',
//             duration:"",
//             trainerName: '',
//           });
//         })
//         .catch(error => {
//           console.error('Error saving data:', error);
//           console.log('Axios Response:', error.response);
//         });
//     }
//   };

//   return (
//     <>
//       <div className="boat" style={{ margin: 'auto', backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: 'center', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        
//       <tr>
//                   <td colSpan="2">
//                     <h1 style={{ color: 'rgb(10, 10, 12)', fontWeight: 'bold', fontFamily: 'Calibri', display: 'block', marginBottom: '20px' }}>Selected Employees</h1>
//                     <table style={{ width: '100%' }}>
//                       <thead>
//                       <tr>
//       <th style={{ padding: '10px' }}>Employee ID</th>
//       <th style={{ padding: '10px' }}>Employee Name</th>
//       <th style={{ padding: '10px' }}>Phone Number</th>
//       <th style={{ padding: '10px' }}>Email</th>
//       <th style={{ padding: '10px' }}>Experience</th>
//       <th style={{ padding: '10px' }}>Qualification</th>
//       <th style={{ padding: '10px' }}>Skill</th>
//       <th style={{ padding: '10px' }}>Designation</th>
//       <th style={{ padding: '10px' }}>Date of Joining</th>
//       <th style={{ padding: '10px' }}>CTC</th>
//       <th style={{ padding: '10px' }}>Branch</th>
//     </tr>
//                       </thead>
//                       <tbody>
//                         {selectedEmployees.map(employee => (
//                           <tr key={employee.employeeId}>
//                              <td style={{ padding: '10px' }}>{employee.employeeId}</td>
//         <td style={{ padding: '10px' }}>{employee.employeeName}</td>
//         <td style={{ padding: '10px' }}>{employee.phoneNumber}</td>
//         <td style={{ padding: '10px' }}>{employee.email}</td>
//         <td style={{ padding: '10px' }}>{employee.experience}</td>
//         <td style={{ padding: '10px' }}>{employee.qualification}</td>
//         <td style={{ padding: '10px' }}>{employee.skill}</td>
//         <td style={{ padding: '10px' }}>{employee.designation}</td>
//         <td style={{ padding: '10px' }}>{employee.dateofJoining}</td>
//         <td style={{ padding: '10px' }}>{employee.ctc}</td>
//         <td style={{ padding: '10px' }}>{employee.branch}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>


           
//         <div className="form-container animate__animated animate__fadeInDown " style={{ marginLeft: "150px", border: '3px solid #af87f8', borderRadius: '20px', overflow: 'hidden', padding: '20px', boxSizing: 'border-box', maxWidth: '460px', width: '100%', boxShadow: '10px  8px 20px rgb(24, 23, 23)', backdropFilter: 'blur(0.5px)', backgroundColor: 'rgb(228, 228, 228)' }}>
//           <form className="hed" onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//             <h4 style={{ textAlign: 'center', fontWeight: "bold", fontSize: '30px', color: 'rgb(5, 5, 5)' }}>ADD SLOT</h4>
//             <p className="animate__animated animate__fadeInRightBig" style={{ fontWeight: 'bold', fontSize: '1em', marginTop:"20px" }}>Selected Employees: {selectedCount}</p>
//             <table style={{ width: '80%' }}>


              
//               <tbody>



//                 <tr>
//                   <td>
//                     <label style={{ color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>Course Name </label>
//                   </td>
//                   <td style={{ width: '50%' }}>
//                     <input
//                       type="text"
//                       placeholder="Enter Course Name "
//                       name="courseName"
//                       value={formData.courseName}
//                       onChange={handleInputChange}
//                       style={{width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black' }}
//                     />
//                     {newErrors.courseName && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.courseName}</span>}
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style={{ width: '50%' }}>
//                     <label style={{ color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>Start Date </label>
//                   </td>
//                   <td style={{ width: '50%' }}>
//                     <input
//                       type="date"
//                       placeholder='Enter date here'
//                       name="startDate"
//                       value={formData.startDate}
//                       onChange={handleInputChange}
//                       style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black' }}
//                     />
//                     {newErrors.startDate && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.startDate}</span>}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style={{ width: '50%' }}>
//                     <label style={{ color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>End Date</label>
//                   </td>
//                   <td style={{ width: '50%' }}>
//                     <input
//                       type="date"
//                       name="toDate"
//                       value={formData.toDate}
//                       onChange={handleInputChange}
//                       style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black'}}
//                     />
//                     {newErrors.toDate && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.toDate}</span>}
//                   </td>
//                 </tr>




//                 <tr>
//                   <td>
//                     <label style={{color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>Duration </label></td>
//                   <td style={{ width: '50%' }}>

//                     <input
//                       type="text"
//                       placeholder="Hrs or days"
//                       name="duration"
//                       value={formData.duration}
//                       onChange={handleInputChange}
//                       style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black' }}
//                     />
//                     <div>
//                       {newErrors.duration && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.duration}</span>}</div>
//                   </td>
//                 </tr>




//                 <tr>
//                   <td>
//                     <label style={{color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>Trainer Name </label></td>
//                   <td style={{ width: '50%' }}>

//                     <input
//                       type="text"
//                       placeholder="Enter Trainer Name "
//                       name="trainerName"
//                       value={formData.trainerName}
//                       onChange={handleInputChange}
//                       style={{ width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black' }}
//                     />
//                     <div>
//                       {newErrors.trainerName && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.trainerName}</span>}</div>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style={{ display: "inline-block" }}></td>
//                   <td style={{ width: '50%' }}>
//                   <div className="button-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
//   <div className="button-group" style={{   display: 'flex',  width: '280px' }}>
//     <button type="submit" style={{ marginLeft:"65px",backgroundColor: 'rgb(34, 10, 248)', padding: '3px', width: '60px', borderRadius: '5px', color: 'azure' }}>Submit</button>   <span><Link to="."><button type="button" style={{marginLeft:"4px", backgroundColor: 'rgb(34, 10, 248)', padding: '3px', width: '60px', borderRadius: '5px', color: 'azure' }}>Back</button></Link></span>
//   </div>
//    {/* <Link to ="./Tviewselectedemployee" ><button type="button" style={{ backgroundColor: 'rgb(34, 10, 248)', padding: '8px', width: '280px', borderRadius: '5px', color: 'azure', marginTop: '10px' }} onClick={handleViewSelectedEmployees}>View Selected Employees</button>
//   </Link> */}
//   </div> 


                       
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Addslot;

















import React, { useState } from 'react';
import axios from 'axios';
import { Link, useLocation ,useNavigate} from 'react-router-dom';
import 'animate.css';



const Addslot = () => {
  
  // const location = useLocation(); 
  // const selectedCount = location.state?.selectedCount || []; 
  const location = useLocation();
  const selectedEmployees = location.state?.selectedEmployees || [];
  const selectedCount = location.state?.selectedCount || 0;
  // const selectedEmployeeIds = location.state?.selectedEmployeeIds || [];
  const navigate = useNavigate();
  

   const [newErrors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    selectedEmployee: '',
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
      selectedEmployee: selectedCount // Update selectedEmployee with selectedCount
    }));
  };
  

  const currentDate = new Date();
  const currentDateWithoutTime = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );




//   const formDataWithSelectedEmployees = {
//     ...formData,
//     employeeIds: selectedEmployeeIds.join('1,2,3,4,') // Convert selectedEmployeeIds to comma-separated string
// };




  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
  
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
  


    if (Object.keys(newErrors).length === 0) {
      // Form submission successful
      // Navigate to SlotDetailsPage with selectedEmployees and formData as props
      navigate('/AllDetailsPage', { state: { selectedEmployees, formData } });
      // navigate('/Employslot', { state: { selectedEmployees, formData } });
    }
  

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formDataWithSelectedEmployees = {
        ...formData,
        selectedCount: selectedCount // Include selectedCount in formData
      };
  
      alert("Form submitted successfully");
  
      axios.post(`http://localhost:1212/api/addslots/save`, formDataWithSelectedEmployees)
      // axios.post(`http://localhost:1212/api/addslots/CreateSlot/${formData.employeeIds}`, formDataWithSelectedEmployees)
      
        .then(response => {
          console.log('Form submitted successfully:', response.data);
          // Optionally reset form data after successful submission
          setFormData({
            selectedEmployee:'',
            courseName: '',
            startDate: '',
            toDate: '',
            duration:"",
            trainerName: '',
          });
        })
        .catch(error => {
          console.error('Error saving data:', error);
          console.log('Axios Response:', error.response);
        });
    }
  };

  return (
    <>
      <div className="boat" style={{ margin: 'auto', backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: 'center', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:"150px" }}>

        
      {/* <tr>
                  <td colSpan="2">
                    <h1 style={{ color: 'rgb(10, 10, 12)', fontWeight: 'bold', fontFamily: 'Calibri', display: 'block', marginBottom: '20px' }}>Selected Employees</h1>
                    <table style={{ width: '100%' }}>
                      <thead>
                      <tr>
      <th style={{ padding: '10px' }}>Employee ID</th>
      <th style={{ padding: '10px' }}>Employee Name</th>
      <th style={{ padding: '10px' }}>Phone Number</th>
      <th style={{ padding: '10px' }}>Email</th>
      <th style={{ padding: '10px' }}>Experience</th>
      <th style={{ padding: '10px' }}>Qualification</th>
      <th style={{ padding: '10px' }}>Skill</th>
      <th style={{ padding: '10px' }}>Designation</th>
      <th style={{ padding: '10px' }}>Date of Joining</th>
      <th style={{ padding: '10px' }}>CTC</th>
      <th style={{ padding: '10px' }}>Branch</th>
    </tr>
                      </thead>
                      <tbody>
                        {selectedEmployees.map(employee => (
                          <tr key={employee.employeeId}>
                             <td style={{ padding: '10px' }}>{employee.employeeId}</td>
        <td style={{ padding: '10px' }}>{employee.employeeName}</td>
        <td style={{ padding: '10px' }}>{employee.phoneNumber}</td>
        <td style={{ padding: '10px' }}>{employee.email}</td>
        <td style={{ padding: '10px' }}>{employee.experience}</td>
        <td style={{ padding: '10px' }}>{employee.qualification}</td>
        <td style={{ padding: '10px' }}>{employee.skill}</td>
        <td style={{ padding: '10px' }}>{employee.designation}</td>
        <td style={{ padding: '10px' }}>{employee.dateofJoining}</td>
        <td style={{ padding: '10px' }}>{employee.ctc}</td>
        <td style={{ padding: '10px' }}>{employee.branch}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr> */}


           
        <div className="form-container animate__animated animate__fadeInDown " style={{ marginLeft: "150px", border: '3px solid #af87f8', borderRadius: '20px', overflow: 'hidden', padding: '20px', boxSizing: 'border-box', maxWidth: '460px', width: '100%', boxShadow: '10px  8px 20px rgb(24, 23, 23)', backdropFilter: 'blur(0.5px)', backgroundColor: 'rgb(228, 228, 228)' }}>
          <form className="hed" onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ textAlign: 'center', fontWeight: "bold", fontSize: '30px', color: 'rgb(5, 5, 5)' }}>ADD SLOT</h4>
            <p className="animate__animated animate__fadeInRightBig" style={{ fontWeight: 'bold', fontSize: '1em', marginTop:"20px" }}>Selected Employees: {selectedCount}</p>
            <table style={{ width: '80%' }}>


              
              <tbody>
{/* 
             
              <tr>
                  <td>
                    <label style={{ color: 'rgb(10, 10, 12)', fontWeight: '700', width: '100px', fontSize: '15px', fontFamily: 'Calibri', display: 'block', marginBottom: '5px' }}>Month</label>
                  </td>
                  <td style={{ width: '50%' }}>
                    <input
                      type="text"
                      placeholder="Enter Month Name "
                      name="monthName"
                      value={formData.monthName}
                      onChange={handleInputChange}
                      style={{width: '100%', padding: '5px', marginBottom: '10px', borderRadius: '3px', border: '1px solid black' }}
                    />
                    {newErrors.monthName && <span className='error-message' style={{ color: 'red', fontSize: '12px', marginBottom: '5px' }}>{newErrors.monthName}</span>}
                  </td>
                </tr>
 */}




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













// trainee list start from here 





// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Trainer from './Trainer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

// function TrainerList() {
//     const navigate = useNavigate(); 
//     useEffect(() => {
//         const dropdownElement = document.getElementById('courseDropdown');
//         if (dropdownElement) {
//             new bootstrap.Dropdown(dropdownElement);
//         }
//         fetchAllEntities(); 
//     }, []);

//     const [selectAll, setSelectAll] = useState(false);
//     const [checkedItems, setCheckedItems] = useState({});
//     const [entities, setEntities] = useState([]);
//     const [selectedEmployees, setSelectedEmployees] = useState([]);
//     const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);


//     const fetchAllEntities = () => {
//         fetch('http://localhost:8081/employees/getall')

//             .then(response => response.json())
//             .then(data => setEntities(data))
//             .catch(error => console.error('Error fetching entities:', error));
//     };

//     const fetchEntitiesBySkill = (skill) => {
//         fetch(`http://localhost:8081/employees/search?skill=${skill}`)
       
//             .then(response => response.json())
//             .then(data => setEntities(data))
//             .catch(error => console.error('Error fetching entities by skill:', error));
//     };
//     const handleCheckboxChange = (id) => {
//         setCheckedItems(prevState => {
//             const newState = {
//                 ...prevState,
//                 [id]: !prevState[id]
//             };
//             localStorage.setItem('checkedItems', JSON.stringify(newState));
//             return newState;
//         });
//     };
    

    

//     const handleSelectAllChange = () => {
//         const newSelectAll = !selectAll;
//         setSelectAll(newSelectAll);

//         const newCheckedItems = {};
//         for (const entity of entities) {
//             newCheckedItems[entity.employeeId] = newSelectAll;
//         }
//         setCheckedItems(newCheckedItems);
//     };

//     const handleAddSlot = () => {
//         const selectedEmployees = entities.filter(entity => checkedItems[entity.employeeId]);
//         setSelectedEmployees(selectedEmployees);
//         navigate('/Addslot', { state: { selectedEmployees, selectedCount: selectedEmployees.length } });
  
          
//     };

//     const handleCourseSelection = (skill) => {
//         fetchEntitiesBySkill(skill);
//     };

//     return (
//         <>
//            <div className="p-2 mb-2 bg-black text-white rounded" style={{ width: '100%' }}>

//                 <h2 className="display-6" >Trainers</h2>
//             </div>
//             <div className="row mb-2">
//                 <div className="col">
//                     <div className="dropdown">
//                         <button className="btn btn-secondary dropdown-toggle" type="button" id="courseDropdown" data-bs-toggle="dropdown" aria-expanded="false">
//                             Course Name
//                         </button>
//                         <ul className="dropdown-menu" aria-labelledby="courseDropdown">
//                             <li><button className="dropdown-item" onClick={() => handleCourseSelection('Java')}>Java</button></li>
//                             <li><button className="dropdown-item" onClick={() => handleCourseSelection('Python')}>Python</button></li>
//                             <li><button className="dropdown-item" onClick={() => handleCourseSelection('AWS')}>AWS</button></li>
//                             <li><button className="dropdown-item" onClick={() => handleCourseSelection('Testing')}>Testing</button></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>
//                             <input
//                                 type="checkbox"
//                                 id="select-all-checkbox"
//                                 checked={selectAll}
//                                 onChange={handleSelectAllChange}
//                             />
//                         </th>
//                         <th style={tableHeaderStyle}>Emp ID</th>
//             <th style={tableHeaderStyle}>Emp Name</th>
          
//             <th style={tableHeaderStyle}>Gender</th>
//             <th style={tableHeaderStyle}>Phone Number</th>
//             <th style={tableHeaderStyle}>Email</th>
          
          
           
//             <th style={tableHeaderStyle}>Experience</th>
//             <th style={tableHeaderStyle}>Qualification</th>
//             <th style={tableHeaderStyle}>Skill</th>
//             <th style={tableHeaderStyle}>Designation</th>
           
//             <th style={tableHeaderStyle}>Date of Joining</th>
//             {/* <th style={tableHeaderStyle}>CTC</th>
//             <th style={tableHeaderStyle}>Account Number</th>
//             <th style={tableHeaderStyle}>IFSC Code</th>
//             <th style={tableHeaderStyle}>Branch</th>
//             <th style={tableHeaderStyle}>Social ID</th> */}
//             <th style={tableHeaderStyle}>Image</th>
         
//                         {/ Add more headers if needed /}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {entities.map(entity => (
//                         <Trainer 
//                             key={entity.employeeId}
//                             id={entity.employeeId}
//                             name={entity.employeeName}
//                             dob={entity.dob}
//                             gender={entity.gender}
//                             phoneNumber={entity.phoneNumber}
//                             email={entity.email}
//                             pan={entity.pan}
//                             adharNumber={entity.adharNumber}
//                             address={entity.adress}
//                             experience={entity.experience}
//                             qualification={entity.qualification}
//                             skill={entity.skill}
//                             designation={entity.designation}
//                             bloodGroup={entity.bloodGroup}
//                             dateofJoining={entity.dateofJoining}
//                             ctc={entity.ctc}
//                             accountNumber={entity.accountNumber}
//                             ifscCode={entity.ifscCode}
//                             branch={entity.branch}
//                             socialId={entity.socialId}
                          
                            
//                             checked={checkedItems[entity.employeeId] || false}
//                             handleCheckboxChange={handleCheckboxChange}
//                               image={entity.image} 
//                         />
//                     ))}
//                 </tbody>
//             </table>
//             <div className="row">
//                 <div className="col-md-6">
//                     <div className="form-check">
//                         <input
//                             type="checkbox"
//                             id="select-all-checkbox-bottom"
//                             className="form-check-input"
//                             checked={selectAll}
//                             onChange={handleSelectAllChange}
//                         />
//                         <label htmlFor="select-all-checkbox-bottom" className="form-check-label">Select All</label>
//                     </div>
//                 </div>
//                 <div className="col-md-6 text-end">
//                     {Object.values(checkedItems).includes(true) && (
//                         <button className="btn btn-primary" onClick={handleAddSlot}> ADD Slot </button>
//                     )}
//                 </div>
            
//         </div>
//         </>
//     );
// }
// const tableHeaderStyle = {
//   border: '3px solid #ddd',
//   padding: '8px',
// };

// export default TrainerList;



























// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Trainer from './Trainer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

// function TrainerList() {
//     const navigate = useNavigate(); 
//     useEffect(() => {
//         const dropdownElement = document.getElementById('courseDropdown');
//         if (dropdownElement) {
//             new bootstrap.Dropdown(dropdownElement);
//         }
//         fetchAllEntities(); 
//     }, []);

//     const [selectAll, setSelectAll] = useState(false);
//     const [checkedItems, setCheckedItems] = useState({});
//     const [entities, setEntities] = useState([]);
//     const [selectedEmployees, setSelectedEmployees] = useState([]);

//     const fetchAllEntities = () => {
//         fetch('http://localhost:8081/employees/getall')
//             .then(response => response.json())
//             .then(data => setEntities(data))
//             .catch(error => console.error('Error fetching entities:', error));
//     };

//     const fetchEntitiesBySkill = (skill) => {
//         fetch(`http://localhost:8081/employees/search?skill=${skill}`)
//             .then(response => response.json())
//             .then(data => setEntities(data))
//             .catch(error => console.error('Error fetching entities by skill:', error));
//     };

//     const handleCheckboxChange = (id) => {
//         setCheckedItems(prevState => ({
//             ...prevState,
//             [id]: !prevState[id]
//         }));
//     };

//     const handleSelectAllChange = () => {
//         const newSelectAll = !selectAll;
//         setSelectAll(newSelectAll);

//         const newCheckedItems = {};
//         for (const entity of entities) {
//             newCheckedItems[entity.employeeId] = newSelectAll;
//         }
//         setCheckedItems(newCheckedItems);
//     };

//     const handleAddSlot = () => {
//         const selectedEmployeeIds = Object.keys(checkedItems).filter(id => checkedItems[id]);
//         setSelectedEmployees(selectedEmployeeIds);
//         navigate('/Addslot', { state: { selectedEmployees: selectedEmployeeIds } });
//     };

//     const handleCourseSelection = (skill) => {
//         fetchEntitiesBySkill(skill);
//     };

//     return (
//         <>
//            <div className="p-2 mb-2 bg-black text-white rounded" style={{ width: '100%' }}>

//                 <h2 className="display-6" >Trainers</h2>
//             </div>
//             <div className="row mb-2">
//                 <div className="col">
//                     <div className="dropdown">
//                         <button className="btn btn-secondary dropdown-toggle" type="button" id="courseDropdown" data-bs-toggle="dropdown" aria-expanded="false">
//                             Course Name
//                         </button>
//                         <ul className="dropdown-menu" aria-labelledby="courseDropdown">
//                             <li><button className="dropdown-item" onClick={() => handleCourseSelection('Java')}>Java</button></li>
//                             <li><button className="dropdown-item" onClick={() => handleCourseSelection('Python')}>Python</button></li>
//                             <li><button className="dropdown-item" onClick={() => handleCourseSelection('AWS')}>AWS</button></li>
//                             <li><button className="dropdown-item" onClick={() => handleCourseSelection('Testing')}>Testing</button></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>
//                             <input
//                                 type="checkbox"
//                                 id="select-all-checkbox"
//                                 checked={selectAll}
//                                 onChange={handleSelectAllChange}
//                             />
//                         </th>
//                         <th style={tableHeaderStyle}>Emp ID</th>
//             <th style={tableHeaderStyle}>Emp Name</th>
//             {/* <th style={tableHeaderStyle}>DOB</th> */}
//             <th style={tableHeaderStyle}>Gender</th>
//             <th style={tableHeaderStyle}>Phone Number</th>
//             <th style={tableHeaderStyle}>Email</th>
//             {/* <th style={tableHeaderStyle}>PAN</th> */}
//             {/* <th style={tableHeaderStyle}>Adhar Number</th> */}
//             {/* <th style={tableHeaderStyle}>Address</th> */}
//             <th style={tableHeaderStyle}>Experience</th>
//             <th style={tableHeaderStyle}>Qualification</th>
//             <th style={tableHeaderStyle}>Skill</th>
//             <th style={tableHeaderStyle}>Designation</th>
//             {/* <th style={tableHeaderStyle}>Blood Group</th> */}
//             <th style={tableHeaderStyle}>Date of Joining</th>
//             {/* <th style={tableHeaderStyle}>CTC</th>
//             <th style={tableHeaderStyle}>Account Number</th>
//             <th style={tableHeaderStyle}>IFSC Code</th>
//             <th style={tableHeaderStyle}>Branch</th>
//             <th style={tableHeaderStyle}>Social ID</th> */}
//             <th style={tableHeaderStyle}>Image</th>
         
//                         {/* Add more headers if needed */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {entities.map(entity => (
//                         <Trainer 
//                             key={entity.employeeId}
//                             id={entity.employeeId}
//                             name={entity.employeeName}
//                             dob={entity.dob}
//                             gender={entity.gender}
//                             phoneNumber={entity.phoneNumber}
//                             email={entity.email}
//                             pan={entity.pan}
//                             adharNumber={entity.adharNumber}
//                             address={entity.adress}
//                             experience={entity.experience}
//                             qualification={entity.qualification}
//                             skill={entity.skill}
//                             designation={entity.designation}
//                             bloodGroup={entity.bloodGroup}
//                             dateofJoining={entity.dateofJoining}
//                             ctc={entity.ctc}
//                             accountNumber={entity.accountNumber}
//                             ifscCode={entity.ifscCode}
//                             branch={entity.branch}
//                             socialId={entity.socialId}
                          
                            
//                             checked={checkedItems[entity.employeeId] || false}
//                             handleCheckboxChange={handleCheckboxChange}
//                               image={entity.image} 
//                         />
//                     ))}
//                 </tbody>
//             </table>
//             <div className="row">
//                 <div className="col-md-6">
//                     <div className="form-check">
//                         <input
//                             type="checkbox"
//                             id="select-all-checkbox-bottom"
//                             className="form-check-input"
//                             checked={selectAll}
//                             onChange={handleSelectAllChange}
//                         />
//                         <label htmlFor="select-all-checkbox-bottom" className="form-check-label">Select All</label>
//                     </div>
//                 </div>
//                 <div className="col-md-6 text-end">
//                     {Object.values(checkedItems).includes(true) && (
//                         <button className="btn btn-primary" onClick={handleAddSlot}> ADD Slot </button>
//                     )}
//                 </div>
            
//         </div>
//         </>
//     );
// }
// const tableHeaderStyle = {
//   border: '3px solid #ddd',
//   padding: '8px',
// };

// export default TrainerList;

































import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Trainer from './Trainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

function TrainerList() {
    const navigate = useNavigate(); 
    useEffect(() => {
        const dropdownElement = document.getElementById('courseDropdown');
        if (dropdownElement) {
            new bootstrap.Dropdown(dropdownElement);
        }
        fetchAllEntities(); 
    }, []);

    const [selectAll, setSelectAll] = useState(false);
    const [checkedItems, setCheckedItems] = useState({});
    const [entities, setEntities] = useState([]);
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);


    const fetchAllEntities = () => {
        fetch('http://localhost:8081/employees/getall')
        // fetch('http://localhost:1212/api/employees//GetAllEmployeeDetails')
            .then(response => response.json())
            .then(data => setEntities(data))
            .catch(error => console.error('Error fetching entities:', error));
    };

    const fetchEntitiesBySkill = (skill) => {
        fetch(`http://localhost:8081/employees/search?skill=${skill}`)
        // fetch(`http://localhost:8081/employees/search?skill=${skill}`)
            .then(response => response.json())
            .then(data => setEntities(data))
            .catch(error => console.error('Error fetching entities by skill:', error));
    };

    // const handleCheckboxChange = (id) => {
    //     setCheckedItems(prevState => ({
    //         ...prevState,
    //         [id]: !prevState[id]
    //     }));
    // };


    const handleCheckboxChange = (id) => {
                 setCheckedItems(prevState => {
                     const newState = {
                         ...prevState,
                         [id]: !prevState[id]
                     };
                     localStorage.setItem('checkedItems', JSON.stringify(newState));
                    return newState;
                });
             };


    // const handleCheckboxChange = (id) => {
    //     const newSelectedEmployeeIds = [...selectedEmployeeIds];
    //     if (newSelectedEmployeeIds.includes(id)) {
    //         newSelectedEmployeeIds.splice(newSelectedEmployeeIds.indexOf(id), 1);
    //     } else {
    //         newSelectedEmployeeIds.push(id);
    //     }
    //     setSelectedEmployeeIds(newSelectedEmployeeIds);
    // };
    

    const handleSelectAllChange = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        const newCheckedItems = {};
        for (const entity of entities) {
            newCheckedItems[entity.employeeId] = newSelectAll;
        }
        setCheckedItems(newCheckedItems);
    };

    // const handleAddSlot = () => {
    //     const selectedEmployees = entities.filter(entity => checkedItems[entity.employeeId]);
    //     setSelectedEmployees(selectedEmployees);
    //     navigate('/Addslot', { state: { selectedEmployees, selectedCount: selectedEmployees.length } });
        


    const handleAddSlot = () => {
        const selectedEmployees = entities.filter(entity => checkedItems[entity.employeeId]);
        setSelectedEmployees(selectedEmployees);
        navigate('/Addslot', { state: { selectedEmployees, selectedCount: selectedEmployees.length, selectedEmployeeIds } });
      };
      
        // navigate('/Addslot', { 
        //     state: { 
        //       selectedEmployees, 
        //       selectedCount: selectedEmployees.length,
        //       selectedEmployeeIds 
        //     } 
        //   });
          
  

    const handleCourseSelection = (skill) => {
        fetchEntitiesBySkill(skill);
    };

    return (
        <>
           <div className="p-2 mb-2 bg-black text-white rounded" style={{ width: '100%' }}>

                <h2 className="display-6" >Trainers</h2>
            </div>
            <div className="row mb-2">
                <div className="col">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="courseDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            Course Name
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="courseDropdown">
                            <li><button className="dropdown-item" onClick={() => handleCourseSelection('Java')}>Java</button></li>
                            <li><button className="dropdown-item" onClick={() => handleCourseSelection('Python')}>Python</button></li>
                            <li><button className="dropdown-item" onClick={() => handleCourseSelection('AWS')}>AWS</button></li>
                            <li><button className="dropdown-item" onClick={() => handleCourseSelection('Testing')}>Testing</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                id="select-all-checkbox"
                                checked={selectAll}
                                onChange={handleSelectAllChange}
                            />
                        </th>
                        <th style={tableHeaderStyle}>Emp ID</th>
            <th style={tableHeaderStyle}>Emp Name</th>
            {/* <th style={tableHeaderStyle}>DOB</th> */}
            <th style={tableHeaderStyle}>Gender</th>
            <th style={tableHeaderStyle}>Phone Number</th>
            <th style={tableHeaderStyle}>Email</th>
            {/* <th style={tableHeaderStyle}>PAN</th> */}
            {/* <th style={tableHeaderStyle}>Adhar Number</th> */}
            {/* <th style={tableHeaderStyle}>Address</th> */}
            <th style={tableHeaderStyle}>Experience</th>
            <th style={tableHeaderStyle}>Qualification</th>
            <th style={tableHeaderStyle}>Skill</th>
            <th style={tableHeaderStyle}>Designation</th>
            {/* <th style={tableHeaderStyle}>Blood Group</th> */}
            <th style={tableHeaderStyle}>Date of Joining</th>
            {/* <th style={tableHeaderStyle}>CTC</th>
            <th style={tableHeaderStyle}>Account Number</th>
            <th style={tableHeaderStyle}>IFSC Code</th>
            <th style={tableHeaderStyle}>Branch</th>
            <th style={tableHeaderStyle}>Social ID</th> */}
            <th style={tableHeaderStyle}>Image</th>
         
                        {/* Add more headers if needed */}
                    </tr>
                </thead>
                <tbody>
                    {entities.map(entity => (
                        <Trainer 
                            key={entity.employeeId}
                            id={entity.employeeId}
                            name={entity.employeeName}
                            dob={entity.dob}
                            gender={entity.gender}
                            phoneNumber={entity.phoneNumber}
                            email={entity.email}
                            pan={entity.pan}
                            adharNumber={entity.adharNumber}
                            address={entity.adress}
                            experience={entity.experience}
                            qualification={entity.qualification}
                            skill={entity.skill}
                            designation={entity.designation}
                            bloodGroup={entity.bloodGroup}
                            dateofJoining={entity.dateofJoining}
                            ctc={entity.ctc}
                            accountNumber={entity.accountNumber}
                            ifscCode={entity.ifscCode}
                            branch={entity.branch}
                            socialId={entity.socialId}
                          
                            
                            checked={checkedItems[entity.employeeId] || false}
                            handleCheckboxChange={handleCheckboxChange}
                              image={entity.image} 
                        />
                    ))}
                </tbody>
            </table>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="select-all-checkbox-bottom"
                            className="form-check-input"
                            checked={selectAll}
                            onChange={handleSelectAllChange}
                        />
                        <label htmlFor="select-all-checkbox-bottom" className="form-check-label">Select All</label>
                    </div>
                </div>
                <div className="col-md-6 text-end">
                    {Object.values(checkedItems).includes(true) && (
                        <button className="btn btn-primary" onClick={handleAddSlot}> ADD Slot </button>
                    )}
                </div>
            
        </div>
        </>
    );
}
const tableHeaderStyle = {
  border: '3px solid #ddd',
  padding: '8px',
};

export default TrainerList;




