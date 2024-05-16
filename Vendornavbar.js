
import React, { useState, useEffect } from 'react';
import './Vendornavbar.css';
// import React, { useState } from 'react';
// import React from "react";
import"./Daycare.css"
import"./footerstyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./images/pet1.png";
import vendorimage from "./images/vendorimage2.jpg";
import vendorimage1 from "./images/vendorimages3.jpg";
import vendorimage2 from "./images/vendorimages4.jpg";
import vendorimage3  from "./images/vendorlionimage.jpg";
import vendorimage4 from "./images/vendorimage5.jpg";
import vendorimage5 from "./images/vendorimage6.webp";
// import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from "react-router-dom";

// import vendor from './images/vendorimage5.jpg';


const Vendornavbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.getDate().toString().padStart(2, '0') + '-' + (currentTime.getMonth() + 1).toString().padStart(2, '0') + '-' + currentTime.getFullYear();
  const formattedTime = currentTime.getHours().toString().padStart(2, '0') + ':' + currentTime.getMinutes().toString().padStart(2, '0') + ':' + currentTime.getSeconds().toString().padStart(2, '0');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
 
  return (
    <>
      <div className="build" style={{ position: "fixed", top: 0, left: 0, right: 0, backgroundColor: "black" }}>
        <div style={{  marginLeft:"200px",display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black' }}>
          <div className='builder' style={{ display: 'flex', padding: "24px" }}>
            <i className="fa fa-home" style={{ fontSize: '48px', color: 'yellow', marginRight: '20px' }}></i>
            <a href="#h"><h3 style={{ color: 'white', paddingLeft: "5px" }}>Home</h3></a>
          </div>
          <div className="datetime" style={{ color: 'white' }}>
            <p><i className="fa fa-handshake" style={{ fontSize: '50px', marginRight: '20px', color: 'gold' }}></i></p><p>Date: {formattedDate} <span style={{ marginLeft: '20px' }}>Time: {formattedTime}</span></p>
          </div>
        </div>
      </div>

      <div className="vendorsidebar" >
        <div className="icons" >
          <a href="#Ho"><i className="fa fa-percent"></i> Offers</a>
          <a href="#ss"><i className="fa fa-cube"></i> Items</a>
          <a href="#cl"><i className="fa fa-chart-bar"></i> Selling Report</a>
          <a href="#Re"><i className="fa fa-building"></i> Housing Boarding</a>
          <a href="#fap"><i className="fa fa-handshake"></i> Breeding</a>
          <a href="#Ap"><i className="fa fa-cut"></i> Grooming</a>
          <a href="#App"><i className="fa fa-graduation-cap"></i> Training</a>
          <a href="#Log"><i className="fa fa-sign-out-alt"></i> Logout</a>
        </div>
      </div>


      {/* from here content of the body dayacare */}


      <div className="daycare-wrapper">

      <div className="pet">
      <div style={{ display:'flex', justifyContent:'space-around',backgroundColor :'skyblue',padding :'15px', }}>
        <img src="https://branition.com/assets/img/users/logos/7707-TVtrVNf.webp?v2" style={{height:'100px',width :'150px', borderRadius:'50%'}} alt= ""/>
        <h1 style={{ fontWeight:'bolder',justifyContent: 'start', marginRight:"1000px" }}>DayCare</h1>

    {/* <div style={{display:'flex', alignItems:'center', padding:'10px'}}>
        <h5>Bording</h5>
        <h5>Housing</h5>
        <h5>Grooming</h5>
        <h5>Training</h5>
        <h5>Breeding</h5>
        
      </div>   */}
     </div>      
    </div>


<div className="cord mb-3">
  <img src={img1} style={{ width:"1292px"}} alt="..."/>
</div>

    <h2 style={{fontWeight:'bolder'}}>-----------WHY CHOOSE US------------</h2>
    <div style={{justifyContent:'center', color :'skyblue',marginLeft:'380px'}}><p>
     We Understand That Your Pets Are More Than Just Pets, They’re Family</p></div>
    <div className="mycontainer">

     <p  style={{color: 'rgb(26, 111, 25)', paddingLeft:'50px', paddingRight:'50px' ,marginBottom :'10px'}}>Day Care for pets is a great way for pet owners to provide their furry friends with a safe and fun environment while they are away from home. Day Care is a great option for busy pet owners who don't have the time to provide their pets with the care they need on a daily basis. Day Care typically consists of supervised activities and playtime that can help keep pets active and healthy while owners are away</p>
</div> 


  
  <div style={{backgroundColor:'  #8ae6a3'}}>
            <div style={{marginLeft:'200px', marginRight:'200px'}}>

                <div style={{display:'flex'}}>
                    <div style={{padding:'20px'}}>
                        <div className="Dcards" style={{height:'535px', backgroundColor:'white',borderRadius:'30px'}}>
                            <img src={vendorimage} style={{height:"300px", width:'300px',backgroundColor:'bisque',borderRadius:'20px'}} alt=""/>
                             <div style={{padding:'30px', fontFamily:'sans-serif', fontWeight:'bolder'}}>
                             
                             <h4> PETS HEAVEN</h4>
                             <h6> city : secundarabad</h6>
                             <h6> Price : 570/day</h6>
                             <h6> Location <Link to="/Location2" style={{ color: 'blue' }}>secundarabad</Link> </h6>

                                <div >
                                    <h6>Rating:
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    </h6>
                                </div>
                               
                             <Link to="/Bookfordaycare"> <button class="styled-button">Book Now</button></Link>
                             </div>
                        </div>
                    </div>

                    <div style={{padding:'20px'}}>
                        <div className="Dcards" style={{height:'535px', backgroundColor:'white', borderRadius:'30px'}}>
                            <img src={vendorimage1} style={{height:"300px", width:'300px',backgroundColor:'bisque',borderRadius:'30px'}} alt=""/>
                            <div style={{padding:'30px', fontFamily:'sans-serif',fontWeight:'bolder'}}>
                            <h4> CARE PETS</h4>
                             <h6> city : Tirupati</h6>
                             <h6> Price : 700/day</h6>
                             <h6>Location : <Link to = "/Location2" style={{ color: 'blue' }}>Tirupati</Link> </h6>
                             <div >
                                    <h6>Rating: 
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span classNamen="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    </h6>
                                </div>
                            
                             <Link to="/Bookfordaycare"> <button class="styled-button">Book Now</button></Link>
                             </div>
                             </div>
                             </div>
                    <div style={{padding:'20px'}}>
                        <div className="Dcards" style={{height:'535px', backgroundColor:'white', borderRadius:' 30px'}}>
                            <img src={vendorimage2} style={{height:"300px", width:'300px',backgroundColor:'bisque', borderRadius:'30px'}} alt=""/>
                            <div style={{padding:'30px', fontFamily:'sans-serif',fontWeight:'bolder'}}>
                            <h4>  PETS CARE</h4>
                             <h6> city :Kukatpalli</h6>
                             <h6> Price : 570/day</h6>
                             <h6> Location <Link to="/Location2"style={{ color: 'blue' }}>secundarabad</Link> </h6>
                              <div >
                                    <h6>Rating:
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    </h6>
                                </div>
                                
                             <Link to="/Bookfordaycare"> <button class="styled-button">Book Now</button></Link>
                             </div>
                        
                        </div>
                    </div>
                </div>
            </div>  
            
            
            <div style={{backgroundColor:' #8ae6a3'}}>
            <div style={{marginLeft:'200px', marginRight:'200px'}}>
              
                <div style={{display:'flex'}}>
                    <div style={{padding:'20px'}}>
                        <div className="Dcards" style={{height:'535px', backgroundColor:'white',borderRadius:'30px',}}>
                            <img src={vendorimage3} style={{height:"300px", width:'300px',backgroundColor:'bisque',borderRadius:'30px'}} alt=""/>
                            <div style={{padding:'30px', fontFamily:'sans-serif',fontWeight:'bolder'}}>
                             <h5> PETS HEAVEN</h5>
                             <h6> City : Tirupati</h6>
                             <h6> Price : 570/day</h6>
                             <h6> Location <Link to="/Location3" style={{ color: 'blue' }}>Hitec city</Link> </h6>
                             <div >
                                    <h6>Rating:
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    </h6>
                                </div>
                             
                             <Link to="/Bookfordaycare"> <button class="styled-button">Book Now</button></Link>
                              </div>
                        </div>
                    </div>
                    <div style={{padding:'20px'}}>
                        <div className="Dcards" style={{height:'535px', backgroundColor:'white',borderRadius:'30px'}}>
                            <img src={vendorimage4 } style={{height:"300px", width:'300px',backgroundColor:'bisque',borderRadius:'30px'}} alt=""/>
                            <div style={{padding:'30px', fontFamily:'sans-serif',fontWeight:'bolder'}}>
                            <h5> CARE PETS</h5>
                             <h6> City :Hyderabad</h6>
                             <h6> Price : 570/day</h6>
                             <h6> Location <Link to="/Location4"style={{ color: 'blue' }}>Hyderabadbad</Link> </h6>
                             <div >
                                    <h6>Rating:
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    </h6>
                                </div>
                               
                           <Link to="/Bookfordaycare"> <button class="styled-button">Book Now</button></Link>
                              </div>
                        </div>
                    </div>
                    <div style={{padding:'20px'}}>
                        <div className="Dcards" style={{height:'535px', backgroundColor:'white',borderRadius:'30px'}}>
                            <img src={vendorimage5} style={{height:"300px", width:'300px',backgroundColor:'bisque', borderRadius:'30px'}} alt=""/>
                            <div style={{padding:'30px', fontFamily:'sans-serif',fontWeight:'bolder'}}>
                            <h5>  PETS CARE</h5>
                             <h6> City : secundarabad</h6>
                             <h6> Price : 570/day</h6>
                             <h6> Location <Link to="/Location5" style={{ color: 'blue' }}>Secundarabad</Link> </h6>
                             <div >
                                    <h6>Rating:
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star "></span>
                                    <span class="fa fa-star"></span>
                                    </h6>
                                </div>
                              
                             <Link to="/Bookfordaycare"> <button class="styled-button">Book Now</button></Link>
                                   </div>
                        </div>
                    </div>
                </div>
            </div>  
            </div>
            </div>
            </div>
    </>
  );
};

export default Vendornavbar;
