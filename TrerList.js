import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import "./Trn.css";

function TrerList() {
  const [trainers, setTrainers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    fetchTrainers();
    const dropdownElement = document.getElementById('courseDropdown');
    if (dropdownElement) {
      new bootstrap.Dropdown(dropdownElement);
    }
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get('http://localhost:1117/employees/getall');
      setTrainers(response.data); 
    } catch (error) {
      console.error('Error fetching trainers:', error);
    }
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newCheckedItems = {};
    for (const trainer of trainers) {
      newCheckedItems[trainer.id] = newSelectAll;
    }
    setCheckedItems(newCheckedItems);
  };

  const handleAddSlot = () => {
    // Implement your logic for adding a slot here
  };

  return (
    <div className="container">
      <div className="p-2 mb-2 bg-black text-white rounded">
        <h2 className="animate__animated animate__slow animate__backInRight">List of Trainers</h2>
      </div>
      <div className='tables'>
        <table className="table">
          <thead>
            <tr>
              <th  style={{}}className="animate__animated animate__slow animate__backInLeft">CheckBox</th>
              <th className="animate__animated animate__slow animate__backInLeft">Emp ID</th>
              <th className="animate__animated animate__slow animate__backInLeft">Emp Name</th>
              <th className="animate__animated animate__slow animate__backInLeft">Designation</th>
              <th className="animate__animated animate__slow animate__backInLeft">SlotBooking</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer) => (
              <tr key={trainer.id}>
                <td>
                  <input
                    type="checkbox"
                    id={`checkbox-${trainer.id}`}
                    checked={checkedItems[trainer.id] || false}
                    onChange={() => handleCheckboxChange(trainer.id)}
                  />
                  <label htmlFor={`checkbox-${trainer.id}`} className="visually-hidden">
                    Select Trainer
                  </label>
                </td>
                <td>{trainer.id}</td>
                <td>{trainer.name}</td>
                <td>{trainer.designation}</td>
                <td>
                  <button className="btn btn-primary" onClick={handleAddSlot}>
                    Add Slot
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
            <label htmlFor="select-all-checkbox-bottom" className="form-check-label">
              Select All
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-end">
            <Link to="/Addslot">
              <button className="btn btn-primary" onClick={handleAddSlot}>
                Add Slot
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default TrerList;
