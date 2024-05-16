
import React, { useState, useEffect } from 'react';
import './Doctornav.css';

const Doctornav = () => {
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
      <div className="builder">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#023157" }}>
          <div className='first' style={{ display: 'flex', padding: "24px" }}>
            <i className="fa fa-home" style={{ fontSize: '48px', color: 'yellow', marginRight: '20px' }}></i>
            <a href="#h"><h3 style={{ color: 'white', paddingLeft: "5px" }}>Home</h3></a>
          </div>
          <div className="datetime" style={{ color: 'white' }}>
           <p><i className="fa fa-user-md" style={{fontSize: '50px',color:"white", marginRight: '20px'}}></i></p>
            <p>Date: {formattedDate} <span style={{ marginLeft: '20px' }}>Time: {formattedTime}</span></p>
          </div>
        </div>
      </div>

      <div className="doctorsidebar" style={{ width: sidebarOpen ? '165px' : '58px'}}>
        <a href="#we" onClick={toggleSidebar}>
          <i className="fa fa-bars"></i>
        </a>
        <div className="iconic">
        <a href="#Ho"><i className="fa fa-home"></i> Home visit</a>
           <a href="#ss"><i className="fa fa-hospital"></i> Hospitalize</a>
           <a href="#cl"><i className="fa fa-syringe"></i> Vaccination <span style={{ marginRight: '10px' }}></span>Request</a>
           <a href="#Re"><i className="fa fa-file-alt"></i> Report</a>
           <a href="#App"><i className="fa fa-calendar"></i> Appointments</a>
          <a href="#Log"><i className="fa fa-sign-out-alt"></i> Logout</a>
          
        </div>
      </div>
    </>
  );
};

export default Doctornav;
