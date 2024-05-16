import React, { useState } from 'react';

const MyForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [filterBy, setFilterBy] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFilterByChange = (event) => {
    setFilterBy(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Construct the request body
    const requestBody = {
      selectedOption,
      filterBy
    };

    fetch('http://localhost:3000/api/endpoint', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (response.ok) {
          // Handle successful response
          console.log('Filter request sent successfully');
        } else {
          // Handle error response
          console.error('Failed to send filter request');
        }
      })
      .catch(error => {
        // Handle network error
        console.error('Error sending filter request:', error);
      });
  };

  return (
    <div className="">
      <div className="">
        <h5 className="card-title">Filter Form</h5>
        <form onSubmit={handleSubmit} className="d-flex">
          <div className="form-group flex-grow-1 mr-2">
            <label>Select a category:</label>
            <select value={selectedOption} onChange={handleDropdownChange} className="form-control">
              <option value="">Choose...</option>
              <option value="Teachers">Teachers</option>
              <option value="Religious Teachers">Religious Teachers</option>
              <option value="Skilled Teachers">Skilled Teachers</option>
              <option value="Institutes">Institutes</option>
            </select>
          </div>
          <div className="form-group flex-grow-1" style={{marginLeft:20}}>
            <label>Filter By:</label>
            <select value={filterBy} onChange={handleFilterByChange} className="form-control">
              <option value="">Choose...</option>
              <option value="Location">Location</option>
              <option value="Current Salary">Current Salary</option>
              <option value="Experience">Experience</option>
            </select>
          </div>
          <br/>
          <button type="submit" className="btn btn-primary ">Apply Filter</button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
