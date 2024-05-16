
import React, { useState , useEffect} from 'react';
// import { Link } from 'react-router-dom';
import "./Bookfordaycare.css"
import axios from 'axios';

// const Bookfordaycare = ({ userId }) => {
  // Your component code here


   const Bookfordaycare = () => {
   const [newErrors, setErrors] = useState({});
   const [formData, setFormData] = useState({
    
    petName: '',
    petBreed: '', 
    petAge: '',   
    formDate:'',
    toDate:'',
    address: '',
    city: '',
    state: '',
    userName: '',  
    phoneNunber: '',  
    email: '',  
  });
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails) {
      setFormData(prevFormData => ({
        ...prevFormData,
        userName: userDetails.fullname || '',
        phoneNunber: userDetails.phno || '',
        email: userDetails.email || ''
      }));
    }
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };
  

const inputDate = new Date(formData.formDate);
const currentDate = new Date();

// i removed  the time component from both dates
const inputDateWithoutTime = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());
const currentDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};


  const  petNameRegex = /^[a-zA-Z]+$/;
  if (!formData.petName.trim()) {
    newErrors.petName ="PetName is required";
  } else if (!petNameRegex.test(formData.petName)) {
    newErrors.petName ="Pet Name should be letters (a-z, A-Z)";
  }
  

  const  petBreedRegex = /^[a-zA-Z]+$/;
  if (!formData.petBreed.trim()) {
    newErrors.petBreed ="PetBreed is required";
  } else if (!petBreedRegex.test(formData.petBreed)) {
    newErrors.petBreed ="Pet Breed should be letters (a-z, A-Z)";
  }


  if (!formData.petAge) {
    newErrors.petAge = 'Pet Age is required';
  
  } else if (formData.petAge <= 0) {
    newErrors.petAge = 'Pet Age must be greater than 0';
    
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



  const  cityRegex = /^[a-zA-Z]+$/;
  if (!formData.city.trim()) {
    newErrors.city ="Enter city Name ";
  } else if(!cityRegex.test(formData.city)){
    newErrors.city="Enter city Name here"
  }
   

  
  const stateRegex = /^[a-zA-Z]+$/;
  if (!formData.state.trim()) {
    newErrors.state ="Enter State Name ";
  } else if(!stateRegex.test(formData.state)){
    newErrors.state="Enter State Name here"
  }

 
  setErrors(newErrors);
  if (Object.keys(newErrors).length === 0) {
      try {
          const userDetails = JSON.parse(localStorage.getItem('userDetails'));
          if (!userDetails || !userDetails.userId) {
              throw new Error('User details not found');
          }
      
          const userId = userDetails.userId;
      
          const response = await axios.post(
            `http://localhost:1114/book/save/${userId}`, 
            formData
        );
        console.log(response.data); 
        alert('Booking successful');
          setFormData({
            petName: '',
            formDate: '',
            toDate: '',
            address: '',
            city: '',
            state: '',
          });
      } catch (error) {
          console.error('Error saving data:', error);
      }
  }
  };
  
  
  


    return(
        <>

<div className="boat" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

    <div className="got" style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
    <div className="form-container" style={{ marginLeft:"500px", backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', marginTop:"200px"}}>
   <form className="hed" onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
          <h4 style={{textAlign: 'center'}}>Book for Day care</h4>
          <table style={{width: '80%'}}>
            <tbody>

               
            <tr>
  <td>
    <label className="lables" style={{display: 'block', marginBottom: '5px'}}>User Name </label>
  </td>
  <td style={{width: '50%'}}>
    <input 
      type="text"
      name="userName"
      value={formData.userName}
      onChange={handleInputChange} 
      style={{ padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
    />
  </td>
</tr>

<tr>
  <td style={{width: '50%'}}>
    <label className="lables" style={{display: 'block', marginBottom: '5px', }}>Contact No:</label>
  </td>
  <td style={{width: '50%',}}>
    <input
      type="number"
      id="contact"
      name="phoneNunber"
      value={formData.phoneNunber}
      onChange={handleInputChange}  
      style={{ padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
    />
  </td>
</tr>

<tr>
  <td style={{width: '50%'}}>
    <label className="lables" style={{display: 'block', marginBottom: '5px', }}>Email Id:</label>
  </td>
  <td style={{width: '50%',}}>
    <input
      type="text"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}  
      style={{ padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
    />
  </td>
</tr>

               
              <tr>
                <td style={{width: '50%'}}>
                  <label className="lables" style={{display: 'block', marginBottom: '5px'}}>Address</label></td>
                <td style={{width: '50%'}}>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    style={{ padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                  />
                  {newErrors.address&& <span className='error-message' style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.address}</span>}
                </td>
              </tr>



              <tr>
                <td style={{width: '50%'}}>
                  <label className="lables" style={{display: 'block', marginBottom: '5px', }}>Pet Name</label></td>
                <td style={{width: '50%',}}>
                  <input
                    type ="text"
                    id ="petName"
                    name="petName"
                    placeholder="Enter yout PetName" 
                    value={formData.petName}
                    onChange={handleInputChange}
                    style={{ padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                  />
                  {newErrors.petName && <span className="error-message" style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.petName}</span>}
                </td>
              </tr>



              
              <tr>
                <td style={{width: '50%'}}>
                  <label className="lables" style={{display: 'block', marginBottom: '5px', }}>Pet Breed</label></td>
                <td style={{width: '50%',}}>
                  <input
                    type ="text"
                    id ="petBreed"
                    name="petBreed"
                    placeholder="Enter yout BreedName" 
                    value={formData.petBreed}
                    onChange={handleInputChange}
                    style={{ padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                  />
                  {newErrors.petBreed && <span className="error-message" style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.petBreed}</span>}
                </td>
              </tr>


                
              <tr>
                <td style={{width: '50%'}}>
                  <label className="lables" style={{display: 'block', marginBottom: '5px', }}>Pet Age</label></td>
                <td style={{width: '50%',}}>
                  <input
                    type ="number"
                    id ="petAge"
                    name="petAge"
                    placeholder="Enter your pet age" 
                    value={formData.petAge}
                    onChange={handleInputChange}
                    style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                  />
                  {newErrors.petAge && <span className="error-message" style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.petAge}</span>}
                </td>
              </tr>




              <tr>
                <td style={{width: '50%'}}>
                  <label className="lables" style={{display: 'block', marginBottom: '5px'}}>From Date</label>
                </td>
                <td style={{width: '50%'}}>
                  <input
                    type="date"
                    name="formDate"  
                    value={formData.formDate}
                    onChange={handleInputChange}
                    style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                  />
                  {newErrors.formDate&& <span className='error-message' style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.formDate}</span>}
                </td>
              </tr>
              <tr>
                <td style={{width: '50%'}}>
                  <label className="lables" style={{display: 'block', marginBottom: '5px'}}>To Date</label>
                </td>
                <td style={{width: '50%'}}>
                  <input
                    type="date"
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleInputChange}
                    style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                  />
                  {newErrors.toDate&& <span className='error-message' style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.toDate}</span>}
                </td>
              </tr>
              
   <tr>
  <td>
    <label className="lables" style={{display: 'block', marginBottom: '5px'}}>City </label></td>
    <td style={{width: '50%'}}>
    <input 
    type=" text"
     placeholder="Enter city name here" 
     name="city"
      value={formData.city}
      onChange={handleInputChange}
      style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
    /><div>
    {newErrors.city&& <span className='error-message'style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.city}</span>}</div>
    </td>
    </tr>

<tr>
  <td style={{width: '50%'}}>
    <label className="lables" style={{display: 'block', marginBottom: '5px'}}> State:</label></td>
    <td>
    <input 
    type=" text" 
    placeholder="Enter your State" 
     name="state"
      value={formData.state}
      onChange={handleInputChange} 
      style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
    />
    {newErrors.state&& <span className='error-message'style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.state}</span>}

    </td></tr>

<tr>
  <td style={{width: '50%'}}></td>
  <td style={{width: '50%'}}>
    <button type =" submit" >submit</button><br/>
     {/* <Link to="/"> click here </Link> to go home page  */}
    </td>
    </tr>

    

</tbody>
</table>
</form>
</div>
</div>
</div>


    


</>
    )
}
export default Bookfordaycare;



