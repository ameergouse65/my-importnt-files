import React from 'react'



const Side = () => {
  return (
    <div className='side' style={{ backgroundColor:'black' ,width:"150px",height:"800px"}}>
    <div>
        <h1 className="siden" style={{  color:"yellow"}} >Admin Dashboard</h1>
        </div>    
        <hr/>
        <ul className='suden' style={{color:"wheat"}}>
            <li>
                <a href="" className='ash' style={{padding :"20px",color: 'white',fontSize:"20px"}}>
                    Home
                </a>
            </li>

            <li>
                <a href=""className='ash' style={{padding :"20px",color: 'white',fontSize:"20px"}}>
                    machine
                </a>
            </li>

            <li>
                <a href="" className='ash' style={{padding :"20px",color: 'white',fontSize:"20px"}}>
                    settings
                </a>
            </li>

            <li>
                <a href="" className='ash' style={{padding :"20px",color: 'white',fontSize:"20px"}}>
                    History
                </a>
            </li>

            <li>
                <a href="" className='ash' style={{padding :"20px",color: 'white',fontSize:"20px"}}>
                    Logout
                </a>
            </li>
        </ul>
        </div>


  )
}

export default Side