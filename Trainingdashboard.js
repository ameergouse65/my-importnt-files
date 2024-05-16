import React, { useState, useEffect } from 'react';
import './Trainingdashboard.css';
import 'animate.css';
// import backgroundimage from "./images/featured-2.png";

const Trainingdashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navbarOpen, setNavbarrOpen] = useState(false);
  const [homeVisitOpen, setHomeVisitOpen] = useState(false);
  const [additionalFieldsOpen, setAdditionalFieldsOpen] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate =
    currentTime.getDate().toString().padStart(2, '0') +
    '-' +
    (currentTime.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    currentTime.getFullYear();
  const formattedTime =
    currentTime.getHours().toString().padStart(2, '0') +
    ':' +
    currentTime.getMinutes().toString().padStart(2, '0') +
    ':' +
    currentTime.getSeconds().toString().padStart(2, '0');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const toggleNavbar = () => {
    setNavbarrOpen(!navbarOpen);
  };
  const toggleHomeVisit = () => {
    setHomeVisitOpen(!homeVisitOpen);
  };

  const toggleAdditionalFields = () => { 
    setAdditionalFieldsOpen(!additionalFieldsOpen);
  };

  return (
    <div className="training-dashboard">
       <div className={`navbar ${sidebarOpen ? 'collapsed' : ''}`}>
        <div className="navbar-content">

          <div className="brand" style={{display:"flex"}}>
          <div className="navbar-toggle-icon" style={{ color: "white", cursor: "pointer", fontSize: "20px", marginBottom: "50px" }} onClick={toggleSidebar}>
            <i className={sidebarOpen ? "fa fa-bars" : "fa fa-bars"}></i>
          </div>
        
            <i className="fa fa-chalkboard-teacher" style={{ fontSize: "40px", color: "yellow", marginLeft: "10px",marginTop:"20px" }}></i>
             <h3  className ="animate__animated animate__bounceInDown" style={{ marginLeft:"10px",color: "white" , fontSize: "25px", marginTop:"20px"}}>Internal Training</h3>
           
          </div>
          <div className="datetime" style={{ color: "gold" , top: "20px", right: "20px" , fontSize:"medium"}}>
            
                        <p>Date: {formattedDate} </p>
                        <p>Time: {formattedTime}</p>
                        
                        {/* <a href="#Log" style={{color:"yellow", textDecoration:"none",fontSize:"bold"}}>
              <i className="fa fa-sign-out-alt" style={{color:"yellow" }}></i> Logout
            </a> */}
          </div>
           
        </div>
      </div>

        <div className='main-content'>
        <div className="sidebar" style={{ width: sidebarOpen ? '200px' : '70px' ,position:"sticky" }}>
          <div className="sidebar-toggle-icon" style={{marginTop:"15px",alignItems: "center"}} >
            {/* <i className="fa fa-bars" style={{ fontSize:"30px" , marginLeft:"30px"}}></i> */}

           {/* <a href="#profile"   style={{ alignItems: "center", textDecoration: "none" }}>
            <p><i className="fa fa-user" style={{ marginLeft:"20px",display:"block", fontSize: "50px", color: "yellowgreen", marginRight: "10px" }}></i></p>
            <p style={{ color: "white", marginLeft: "20px" }}></p>
           </a> */}
             
            <div className="sidebar-toggle-icon" style={{  visibility: sidebarOpen ? 'visible' : 'hidden',marginTop: "15px", display: "flex", alignItems: "center" }} >
            <a href="#profile" style={{  alignItems: "center",display: "flex", textDecoration: "none" ,marginBottom:"20px",marginLeft:"30px"}}>
             <i className="fa fa-user" style={{  fontSize: "50px", color: "yellowgreen", marginRight: "10px" }}></i>
            <p style={{   color: "white", margin: "0", }}>User</p>
            
           </a>
         
         </div> 
         </div>
          

         
         
          <div className="iconic" style={{ visibility: sidebarOpen ? 'visible' : 'hidden' }}>
            <a href="#Us" onClick={toggleHomeVisit}>
              <i className= "fa fa-store" style={{ visibility: sidebarOpen || 'visible' , padding:"5px"}}></i>Forms
            </a>
            {homeVisitOpen && ( 
              <div className='subfields'>
                <a href="#field3" style={{color :"white" , fontSize:"20px",}}> 
                  <i className="fa fa-user-plus" aria-hidden="true" style={{}}></i> one
                </a>
                <a href="#field4" style={{color :"white" , fontSize:"20px",}}> 
                  <i className="fa fa-building" aria-hidden="true"></i> two
                </a>
              </div>
            )}
             <a href= "#Re">
              <i className="fa fa-calendar-check animate__animated animate__bounceInDown" style={{ visibility: sidebarOpen || 'visible',padding :"5px" }}></i> Appointments
            </a>
            <a href="popup">
              <i className="fa fa-chart-line animate__animated animate__bounceInDown" style={{ visibility: sidebarOpen || 'visible' ,padding :"5px"}}></i> Reports
            </a>
            <a href="addrestable">
              <i className="fa fa-calendar animate__animated animate__bounceInDown" style={{ visibility: sidebarOpen || 'visible',padding :"5px" }}></i> History
            </a>
            <a href="#Log">
              <i className="fa fa-sign-out-alt animate__animated animate__bounceInDown" style={{ visibility: sidebarOpen || 'visible',padding :"5px" }}></i> Logout
            </a>
          </div>
        </div>

        <div className="content">
          {/* Add dummy paragraphs */}
          <p>This is a dummy paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mauris euismod, aliquam magna at, ultrices lorem. Integer vel lorem id nisi rutrum finibus. In sodales dapibus nunc, sed fringilla lorem aliquet non.</p>
          <p>This is another dummy paragraph. Proin in mi sit amet nisi tempor vehicula. Ut suscipit sagittis metus, vel feugiat nulla. Phasellus et odio vel elit sodales gravida. Quisque quis aliquam dolor.</p>
          <p>This is yet another dummy paragraph. Duis ullamcorper viverra libero, ac sagittis risus lacinia nec. Nam sodales ex vitae lectus maximus, sed rhoncus nisi rhoncus.</p>

          {/* Add dummy cards */}
          <div className="cards">
            {[...Array(6)].map((_, index) => (
              <div className="card" key={index}>
                <h3>Card {index + 1}</h3>
                <p>This is a dummy card content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>

        
       
      </div>
      </div>
    



    
    
  );
};

export default Trainingdashboard;
