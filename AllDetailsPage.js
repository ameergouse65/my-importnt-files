import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'animate.css';

const AllDetailsPage = () => {
  const location = useLocation();
  const selectedEmployees = location.state?.selectedEmployees || [];
  const formData = location.state?.formData || {};
  const selectedCount = selectedEmployees.length;

  return (
    <div style={containerStyle}>
      <h1 style={{backgroundColor:"wheat", width:"118%"}}>Selected Employees</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Emp ID</th>
            <th style={tableHeaderStyle}>Emp Name</th>
            {/* <th style={tableHeaderStyle}>DOB</th> */}
            <th style={tableHeaderStyle}>Gender</th>
            <th style={tableHeaderStyle}>Phone Number</th>
            <th style={tableHeaderStyle}>Email</th>
            {/* <th style={tableHeaderStyle}>PAN</th>
            <th style={tableHeaderStyle}>Adhar Number</th>
            <th style={tableHeaderStyle}>Address</th> */}
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
          </tr>
        </thead>
        <tbody>
          {selectedEmployees.map((employee, index) => (
            <tr key={employee.employeeId} style={index % 2 === 0 ? tableRowOddStyle : tableRowEvenStyle}>
              <td style={tableCellStyle}>{employee.employeeId}</td>
              <td style={tableCellStyle}>{employee.employeeName}</td>
              {/* <td style={tableCellStyle}>{employee.dob}</td> */}
              <td style={tableCellStyle}>{employee.gender}</td>
              <td style={tableCellStyle}>{employee.phoneNumber}</td>
              <td style={tableCellStyle}>{employee.email}</td>
              {/* <td style={tableCellStyle}>{employee.pan}</td>
              <td style={tableCellStyle}>{employee.adharNumber}</td>
              <td style={tableCellStyle}>{employee.address}</td> */}
              <td style={tableCellStyle}>{employee.experience}</td>
              <td style={tableCellStyle}>{employee.qualification}</td>
              <td style={tableCellStyle}>{employee.skill}</td>
              <td style={tableCellStyle}>{employee.designation}</td>
              {/* <td style={tableCellStyle}>{employee.bloodGroup}</td> */}
              <td style={tableCellStyle}>{employee.dateofJoining}</td>
              {/* <td style={tableCellStyle}>{employee.ctc}</td>
              <td style={tableCellStyle}>{employee.accountNumber}</td>
              <td style={tableCellStyle}>{employee.ifscCode}</td>
              <td style={tableCellStyle}>{employee.branch}</td>
              <td style={tableCellStyle}>{employee.socialId}</td> */}
              <td style={tableCellStyle}>
                {employee.image && (
                  <img 
                    src={`data:image/png;base64,${employee.image}`} 
                    alt="Employee" 
                    width="50" 
                    height="50" 
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{marginLeft:"1400px"}}>
        <Link to="../Employslot">
          <button type="button" style={{ marginLeft: "4px", backgroundColor: '#4CAF50', padding: '3px', width: '90px', borderRadius: '5px', color: 'azure' }}>View SlotIds</button>
        </Link>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
 
  padding: '0px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
  border: '5px solid #ddd', 
};

const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

const tableCellStyle = {
  border: '2px solid #ddd',
 
};

const tableRowOddStyle = {
  backgroundColor: '#f5f5f5',
};

const tableRowEvenStyle = {};

export default AllDetailsPage;





// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import 'animate.css';

// const AllDetailsPage = () => {
//   const location = useLocation();
//   const [selectedEmployees, setSelectedEmployees] = useState([]);
//   const [formData, setFormData] = useState({});
//   const [selectedSlotDetails, setSelectedSlotDetails] = useState(null); // State to hold selected slot details

//   useEffect(() => {
//     // Fetch data when component mounts
//     const fetchData = async () => {
//       const { state } = location;
//       if (state) {
//         const { selectedEmployees: employees, formData: form } = state;
//         setSelectedEmployees(employees);
//         setFormData(form);
//         // Fetch slot details if slot ID is provided in state
//         if (state.slotId) {
//           try {
//             const response = await axios.get(`http://localhost:1212/api/addslots/GetSlotDetails/${state.slotId}`);
//             setSelectedSlotDetails(response.data);
//           } catch (error) {
//             console.error('Error fetching slot details:', error);
//           }
//         }
//       }
//     };
//     fetchData();
//   }, [location]);

//   const handleSave = () => {
//     // Handle saving data to CSV
//   };

//   return (
//     <div style={containerStyle}>
//       <div>
//       <h1 className="animate__animated animate__fadeInUpBig" style={{ backgroundColor: "wheat", textAlign: "center" }}>LIST Of TRAINEES</h1>
     
//       </div>
//       <p style={{ fontWeight: "bold" }}>Selected Employees Count: {selectedEmployees.length}</p>
//       {/* Display form data */}
//       <div style={formDataContainerStyle}>
//         <p style={{ fontWeight: "bold" }}>Course Name: {formData.courseName}</p>
//         <p style={{ fontWeight: "bold" }}>Start Date: {formData.startDate}</p>
//         <p style={{ fontWeight: "bold" }}>End Date: {formData.toDate}</p>
//         <p style={{ fontWeight: "bold" }}>Duration: {formData.duration}</p>
//         <p style={{ fontWeight: "bold" }}>Trainer Name: {formData.trainerName}</p>
//       </div>
//       {/* Display selected slot details if available */}
//       {selectedSlotDetails && (
//         <div style={slotDetailsContainerStyle}>
//           <h2>Slot Details</h2>
//           <p><strong>Slot ID:</strong> {selectedSlotDetails.slotId}</p>
//           {/* Display other slot details here */}
//         </div>
//       )}
//       {/* Display selected employees */}
//       <h1 className="animate__animated animate__fadeInUpBig" style={{ backgroundColor: "wheat", textAlign: "center" }}>Selected Employees</h1>
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th>Employee ID</th>
//             <th>Employee Name</th>
//             <th>Phone Number</th>
//             <th>Email</th>
//             <th>Experience</th>
//             <th>Qualification</th>
//             <th>Skill</th>
//             <th>Designation</th>
//             <th>Date of Joining</th>
//             <th>CTC</th>
//             <th>Branch</th>
//           </tr>
//         </thead>
//         <tbody>
//           {selectedEmployees.map((employee, index) => (
//             <tr key={employee.employeeId} style={index % 2 === 0 ? tableRowOddStyle : tableRowEvenStyle}>
//               <td>{employee.employeeId}</td>
//               <td>{employee.employeeName}</td>
//               <td>{employee.phoneNumber}</td>
//               <td>{employee.email}</td>
//               <td>{employee.experience}</td>
//               <td>{employee.qualification}</td>
//               <td>{employee.skill}</td>
//               <td>{employee.designation}</td>
//               <td>{employee.dateofJoining}</td>
//               <td>{employee.ctc}</td>
//               <td>{employee.branch}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div style={{ marginLeft: "1200px" }}>
//         <button style={{ backgroundColor: 'rgb(34, 10, 248)', padding: '3px', width: '80px', borderRadius: '5px', color: 'azure' }} onClick={handleSave}>Download</button>
//       </div>
//     </div>
//   );
// };

// // Styles
// const containerStyle = {
//   maxWidth: '100%',
//   padding: '20px',
// };

// const formDataContainerStyle = {
//   marginBottom: '10px',
// };

// const slotDetailsContainerStyle = {
//   marginBottom: '20px',
// };

// const tableStyle = {
//   width: '100%',
//   borderCollapse: 'collapse',
//   marginBottom: '20px',
//   border: '5px solid #ddd', // Add border
// };

// const tableRowOddStyle = {
//   backgroundColor: '#f5f5f5',
//   border: '5px solid #ddd', // Add border
// };

// const tableRowEvenStyle = {
//   border: '5px solid #ddd', // Add border
// };

// export default AllDetailsPage;
