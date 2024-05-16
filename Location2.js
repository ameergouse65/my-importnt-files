import React from "react";
// import "./Location.css"


function Location() {
  return (
    <>
       
      <section>
      <div className="contact-right" style={{ marginLeft: "20%", marginTop: "5%", padding: "20px", backgroundColor:"#e6ccff", width:"550px", borderRadius: "15px" }}>       <h3> Reach Us </h3>
          <table className="data">
          <tbody>
            <tr>
              <td> Email : </td>
              <td> <a href="mailto:contactus@anarghyacomm.in">contactpetsheaven@gmail.com</a> </td>
            </tr>

            <tr>
              <td> Phone : </td>
              <td> +91-040-675432 7878 </td>
            </tr>

            <tr>
              <td> Address :</td>
              <td>
              20-2-472/10 near Sairam Colony, <br/> 
              Vijaya Nagar Colony, Kukatpalli,<br/>
                Telangana 500024

              </td>
            </tr>
            </tbody>
          </table>
          
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6348748700343!2d78.40744631037225!3d17.429301601528007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9136803f0a3d%3A0xfb8568429bd0eeb6!2sRegus%20-%20Hyderabad%2C%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1697133355644!5m2!1sen!2sin"
            width="450"
            height="200"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Location;
