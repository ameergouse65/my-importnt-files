
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Trainer from './Trainer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';


// function Tviewselectedemployee() {
//   const navigate = useNavigate(); 
//   useEffect(() => {
    
//     const dropdownElement = document.getElementById('courseDropdown');
//     if (dropdownElement) {
//       new bootstrap.Dropdown(dropdownElement);
//     }
//     fetchAllEntities(); 
//   }, []);

//   const [selectAll, setSelectAll] = useState(false);
//   const [checkedItems, setCheckedItems] = useState({});
//   const [entities, setEntities] = useState([]);
  
  

//   const fetchAllEntities = () => {
//     fetch('http://localhost:8081/employees/getall')
//       .then(response => response.json())
//       .then(data => setEntities(data))
//       .catch(error => console.error('Error fetching entities:', error));
//   };

//   const fetchEntitiesBySkill = (skill) => {
//     fetch(`http://localhost:8081/employees/search?skill=${skill}`)
//       .then(response => response.json())
//       .then(data => setEntities(data))
//       .catch(error => console.error('Error fetching entities by skill:', error));
//   };

//   const handleCheckboxChange = (id) => {
//     setCheckedItems(prevState => ({
//       ...prevState,
//       [id]: !prevState[id]
//     }));
//   };

//   const handleSelectAllChange = () => {
//     const newSelectAll = !selectAll;
//     setSelectAll(newSelectAll);
  
//     const newCheckedItems = {};
//     for (const entity of entities) {
//       newCheckedItems[entity.employeeId] = newSelectAll;
//     }
//     setCheckedItems(newCheckedItems);
//   };
  
  


//   const handleAddSlot = () => {
//     const selectedEmployees = entities.filter(entity => checkedItems[entity.employeeId]);
//     const selectedCount = selectedEmployees.length;
//     navigate('/Addslot', { state: { selectedCount } });
//   };
  
  
//   const handleCourseSelection = (skill) => {
//     fetchEntitiesBySkill(skill);
//   };

//   return (
//     <div className="container">
//       <div className="p-2 mb-2 bg-black text-white rounded">
//         <h2 className="display-6">Trainers</h2>
//       </div>
//       <div className="row mb-2">
//         <div className="col">
//           <div className="dropdown">
//             <button className="btn btn-secondary dropdown-toggle" type="button" id="courseDropdown" data-bs-toggle="dropdown" aria-expanded="false">
//               Course Name
//             </button>
//             <ul className="dropdown-menu" aria-labelledby="courseDropdown">
//               <li><button className="dropdown-item" onClick={() => handleCourseSelection('Java')}>Java</button></li>
//               <li><button className="dropdown-item" onClick={() => handleCourseSelection('Python')}>Python</button></li>
//               <li><button className="dropdown-item" onClick={() => handleCourseSelection('AWS')}>AWS</button></li>
//               <li><button className="dropdown-item" onClick={() => handleCourseSelection('Testing')}>Testing</button></li>
//             </ul>

           
//           </div>
//         </div>
//       </div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>
//               <input
//                 type="checkbox"
//                 id="select-all-checkbox"
//                 checked={selectAll}
//                 onChange={handleSelectAllChange}
//               />
//             </th>
//             <th>Emp ID</th>
//             <th>Emp Name</th>
//             <th>Phone Number</th>
//             <th>Email</th>
//             <th>Experience</th>
//             <th>Qualification</th>
//             <th>Skill</th>
//             <th>Designation</th>
//             <th>Date of Joining</th>
//             <th>CTC</th>
//             <th>Branch</th>
//             {/* <th>Slot</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {entities.map(entity => (
//             <Trainer 
//               key={entity.employeeId}
//               id={entity.employeeId}
//               name={entity.employeeName}
//               phoneNumber={entity.phoneNumber}
//               email={entity.email}
//               experience={entity.experience}
//               qualification={entity.qualification}
//               skill={entity.skill}
//               designation={entity.designation}
//               dateofJoining={entity.dateofJoining}
//               ctc={entity.ctc}
//               branch={entity.branch}
//               checked={checkedItems[entity.employeeId] || false}
//               handleCheckboxChange={handleCheckboxChange}
//             />
//           ))}
//         </tbody>
//       </table>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="form-check">
//             <input
//               type="checkbox"
//               id="select-all-checkbox-bottom"
//               className="form-check-input"
//               checked={selectAll}
//               onChange={handleSelectAllChange}
//             />
//             <label htmlFor="select-all-checkbox-bottom" className="form-check-label">Select All</label>
//           </div>
//         </div>
//         <div className="col-md-6 text-end">
          
//           {Object.values(checkedItems).includes(true) && (
//              <button className="btn btn-primary" onClick={handleAddSlot}>Task</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Tviewselectedemployee;






