import React, { useState } from 'react';
import  "./footerstyle.css";

// import x from '../assets/x.png';
// import fb from '../assets/fb.png';
// import whatsap  from '../assets/whatsap.png';
// import instagram from '../assets/instagram.png';
// import youtube from '../assets/youtube.png';
// import linkedin from '../assets/linkedin.png';
import vendor from './images/vendorimage5.jpg';


const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscription = () => {
    // Here you can implement the logic for subscribing the user
    // For now, let's just set subscribed to true
    setSubscribed(true);
    // You can also add logic to refresh the footer section here
  };

  return (
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
      <a href="#"><img src={vendor} alt="Whatsapp" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "-250px" }} /></a>
      <a href="#"><img src={vendor} alt="Instagram" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
      <a href="#"><img src={vendor} alt="Facebook" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
      <a href="#"><img src={vendor} alt="Twitter" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
      <a href="#"><img src={vendor} alt="linkedin" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
      <a href="#"><img src={vendor} alt="youtube" style={{ height: "35px", width: "35px", borderRadius: "50%", marginLeft: "20px" }} /></a>
      <p style={{ color: "white", marginLeft: "-250px", marginTop:"10px" }}>&copy; 2024 Petex.com. All rights reserved.</p>
    </div>
  </div>
</div>


    </div>
  
  );
}

export default Footer;
