// import React, { useState } from 'react';
// import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

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


// import vendor from './images/vendorimage5.jpg';








function Daycare() {




    // const [email, setEmail] = useState('');
    // const [subscribed, setSubscribed] = useState(false);
  
    // const handleSubscription = () => {
    //   setSubscribed(true);
    // };

  return (
    <>

<Router>
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
  <img src={img1}  alt="..."/>
</div>

    <h2 style={{fontWeight:'bolder'}}>-----------WHY CHOOSE US------------</h2>
    <div style={{justifyContent:'center', color :'skyblue',marginLeft:'380px'}}><p>
     We Understand That Your Pets Are More Than Just Pets, They’re Family</p></div>
    <div class="mycontainer">

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
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
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
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
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
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
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
   {/* from here to footerpart  */}

{/* 
  <div className="footer">
      <div className="footer-container">
       
        <div className="footer-column">
          <h3 style={{color:"white", marginTop: "20px"}}>LEARN MORE</h3>
          <ul style={{marginLeft:"-30px"}}>
            <li><a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/" style={{textDecoration:"none", color:"white"}}>Contact Us</a></li>
            <li><a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/" style={{textDecoration:"none", color:"white"}}>FAQs & Return policy</a></li>
            <li><a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/" style={{textDecoration:"none", color:"white"}}>Promotion Cashback</a></li>
            <li><a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/" style={{textDecoration:"none", color:"white"}}>Track your order</a></li>
            <li><a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/" style={{textDecoration:"none", color:"white"}}>Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 style={{color:"white", marginTop: "20px"}}>EXPLORE</h3>
          <ul style={{marginLeft:"-30px"}}>
          <li><a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/" style={{textDecoration:"none", color:"white"}}>About Us</a></li>
          <li><a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/" style={{textDecoration:"none", color:"white"}}>Experience Center</a></li>
          <li><a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/" style={{textDecoration:"none", color:"white"}}>Knowledge Center</a></li>
          <li><a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/" style={{textDecoration:"none", color:"white"}}>In the news</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 style={{color:"white", marginTop: "20px"}}>SERVICES</h3>
          <ul style={{marginLeft:"-30px"}}>
            <li><a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/" style={{textDecoration:"none", color:"white"}}>Pet Grooming</a></li>
            <li><a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/" style={{textDecoration:"none", color:"white"}}>Vet Consultation</a></li>
            <li><a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/" style={{textDecoration:"none", color:"white"}}>Training</a></li>
          </ul>
        </div> 
      </div>

      <div className='row' style={{ marginLeft: "57%" }}>
  <div className='col-md-6'>
    <div>
      <h6 style={{ color: 'white', marginLeft: '-500px', marginTop: '10px' }}>
        SUBSCRIBE TO GET UPDATES
      </h6>
      <input
        type='text'
        placeholder='Enter your email'
        style={{ height: '30px', width: '250px', marginLeft: '-500px', marginTop: '10px' }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type='submit'
        style={{ backgroundColor: 'red', borderRadius: '5px', marginLeft: '10px', borderColor: 'transparent' }}
        onClick={handleSubscription}
      >
        Send
      </button>
      {subscribed && <p style={{ color: 'white', marginLeft: '-500px' }}>You are successfully subscribed!</p>}
      <p style={{ color: 'white', marginLeft: '-500px' }}>Reach us: mailto:support@petex.com</p>
    </div>
  </div>
  <div className='col-md-6'>
    <div>
      <h3 style={{ color: "white", marginLeft: "-250px", fontStyle: "italic" }}>CONNECT WITH US</h3>
      <a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/"><img src={vendor} alt="Whatsapp" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "-250px" }} /></a>
      <a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/"><img src={vendor} alt="Instagram" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
      <a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/"><img src={vendor} alt="Facebook" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
      <a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/"><img src={vendor} alt="Twitter" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
      <a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/"><img src={vendor} alt="linkedin" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
      <a href="https://www.searchenginejournal.com/examples-contact-us-pages/378518/"><img src={vendor} alt="youtube" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
      <p style={{ color: "white", marginLeft: "-250px", marginTop:"10px" }}>&copy; 2024 Petex.com. All rights reserved.</p>
    </div>
  </div>
</div>


    </div>
  */}
</Router>
    </>
  );
}

export default Daycare;
