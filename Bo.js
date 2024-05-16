import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import "./Bookfordaycare.css"
import axios from 'axios';

const Bo = () => { 
    const [newErrors, setErrors] = useState({});
    const [formData, setFormData] = useState({
    
    petName: '',
    formDate:'',
    toDate:'',
    address: '',
    city: '',
    state: '',
    });


    // const [userId, setUserId] = useState();              

  const inputDate = new Date(formData.formDate);
  const currentDate = new Date();                            
  const inputDateWithoutTime = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());
  const currentDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    }
  
    const handleFormSubmit = (e) => {
      
      e.preventDefault();
  
  
  
      const newErrors = {};
  
      const petNameRegex = /^[a-zA-Z]+$/;
      if (!formData.petName.trim()) {
        newErrors.petName ="Pet name is required";
      } else if (!petNameRegex.test(formData.petName)) {
        newErrors.petName ="Pet name should be letters (a-z, A-Z)";
      }
  
      if (!formData.formDate || isNaN(inputDate) || inputDateWithoutTime < currentDateWithoutTime) {
        newErrors.formDate = "Please enter a valid From date, including today";
      }
  
      if (!formData.toDate || isNaN(new Date(formData.toDate))) {
        newErrors.toDate = "Please enter a valid To date";
      } else if (new Date(formData.toDate) < new Date(formData.formDate)) {
        newErrors.toDate = "To date cannot be before From date";
      }
  
      const addressRegex = /^[a-zA-Z0-9\s,.'-:/]+$/;
      if (!formData.address.trim()) {
        newErrors.address = "Address is required";
      } else if (!addressRegex.test(formData.address)) {
        newErrors.address = "Invalid characters in the address";
      }
  
      const cityRegex = /^[a-zA-Z]+$/;
      if (!formData.city.trim()) {
        newErrors.city ="Enter city Name ";
      } else if(!cityRegex.test(formData.city)){
        newErrors.city="Enter city Name here"
      }
  
      const stateRegex = /^[a-zA-Z]+$/;
      if (!formData.state.trim()) {
        newErrors.state ="Enter state name ";
      } else if(!stateRegex.test(formData.state)){
        newErrors.state="Enter state name here"
      }
  


    
      setErrors(newErrors);
  
      
      if (Object.keys(newErrors).length === 0) {
          alert("Form submitted successfully");
        console.log('Form submitted successfully:',formData);
  
        setFormData({
  
  
          customerName: '',
          customerEmail: '',
          customerPhno: '',
          breedName: '',
          date: '',
          time: '',
          description: '',
        
        });
  
  
      }
  
      console.log('FormData:',formData);
      
      axios.post('http://localhost:1301/book/save/{userId}', formData)

      .then(response => {
        console.log(response.data);
      
      })
      .catch(error => {
        console.error('Error saving data:', error);
        
      });
  
  
  
    };




    return(
        <>
       <div className="boat">
        <div className="head">
    
          <div className="got">
          <div className="form-container">
        <form className="hed"onSubmit={handleFormSubmit}>
        <h4>Book for Day care</h4>
          <table>
            <tbody> 
{/* <tr>
  <td><label className="lables">userId</label></td>
  <td><input
  type='text'
  name='userId'
  value={userId}
  onChange={handleUserId}
  /></td>
</tr> */}


        <tr>
          <td>
             <label className="lables">Pet Name</label></td>
             <td>
            <input
             type ="text"
             id ="petName"
             name="petName"
             placeholder="Enter yout PetName" 
             value={formData.petName}
             onChange={handleInputChange}
            /> 
            {newErrors.petName && <span className="error-message">{newErrors.petName}</span>}
          
             </td></tr>
  

        <tr>
                  <td>
                    <label className="lables">From Date</label>
                  </td>
                  <td>
                  <input
                   type="date"
                     name="formDate"  
                       value={formData.formDate}
                        onChange={handleInputChange}
                    />
                    
                    {newErrors.formDate&& <span className='error-message'>{newErrors.formDate}</span>}
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <label className="lables">To Date</label>
                  </td>
                  <td>
                    <input
                      type="date"
                      name="toDate"
                      value={formData.toDate}
                      onChange={handleInputChange}
                    />
                    {newErrors.toDate&& <span className='error-message'>{newErrors.toDate}</span>}
                  </td>
                </tr>


       <tr>
        <td>
          <label className="lables">Address</label></td>
        
        <td><input
          type="text"
          placeholder="Enter your address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          />

          {newErrors.address&& <span className='error-message' >{newErrors.address}</span>}
          
          </td></tr>
<tr>
  <td>

    <label className="lables">City </label></td>
    <td>
    <input 
    type=" text"
     placeholder="Enter city name here" 
     name="city"
      value={formData.city}
      onChange={handleInputChange}
    /><div>
    {newErrors.city&& <span className='error-message'>{newErrors.city}</span>}</div>
    </td>
    </tr>

<tr>
  <td>
    <label className="lables"> State:</label></td>
    <td>
    <input 
    type=" text" 
    placeholder="Enter your State" 
     name="state"
      value={formData.state}
      onChange={handleInputChange} 
    />
    {newErrors.state&& <span className='error-message'>{newErrors.state}</span>}

    </td></tr>

<tr>
  <td></td>
  <td>
    <button type =" submit" >submit</button><br/>
    {/* <Link to="/"> click here </Link> to go home page */}
    </td>
    </tr>

    

</tbody>
</table>
</form>
</div>
</div>
</div>
</div>

</>
    )
}
export default Bo;