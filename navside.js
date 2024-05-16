import React, { useState, useEffect } from 'react';
import "./navside.css";
// import "./Sidebar.js";




const Navside = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [homeVisitOpen, setHomeVisitOpen] = useState(false); 
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();
    const formattedDate = currentTime.toDateString();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    const toggleHomeVisit = () => {
        setHomeVisitOpen(!homeVisitOpen);
    }

    return (
        <>
  
             <div className='background'>
            <div className='builder'>
                <div style={{ backgroundColor: "black"}}>
                    <div className='first' style={{ display: 'flex', padding: "2px" }}>
                        <i className="fa fa-home" style={{ marginTop: "9px", fontSize: '48px', color: 'yellow', marginRight: '20px' }}></i>
                        <a href="#h"><h2 style={{ color: 'white', paddingLeft: "5px" }}>Home</h2></a>
                    </div>
                    <div className="datetime" style={{ color: 'white', position: 'absolute', top: 0, right: 0, padding: '35px' }}>
                        <p>Date: {formattedDate} <span style={{ marginLeft: '20px' }}>Time: {formattedTime}</span></p>
                        <a href="#Log" style={{ color: 'yellow', marginLeft:"8px", marginTop:"15px" }}><i className="fa fa-sign-out-alt"></i> Logout</a>

                    </div>
                </div>
            </div>

      
            </div>
        </>
    );
};

export default Navside;
