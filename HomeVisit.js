import React, { useState, useEffect } from "react";
const HomeVisit = () => {
  const [data, setData] = useState([]);
// comst [item, setItem]=useState([])
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9090/prava/all");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
    // try {
    //   const response = await fetch("http://localhost:9090/api/signup/all");
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
    //   const data = await response.json();
    //   setItem(item);
    // } catch (error) {
    //   console.error("Fetch error:", error);
    // }
  
  };
  
  
   

  return (
    <center>
      <div className="hsptl">
        <form>
          <table>
            <thead>
              <tr>
                <th colSpan={9}>
                  <h2> HomeVisit</h2>
                </th>
              </tr>
              <tr>
                <th>Customer Id</th>
                <th>Customer Name</th>
                <th>Customer Email</th>
                <th>Customer Contact</th>
                <th>Date</th>
                <th>Time</th>
                <th>Description</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((datas) => (
                <tr key={datas.id}>
                  <td>{datas.firstName}</td>
                  <td>{datas.lastName}</td>
                  <td>{datas.email}</td>
                  <td>{datas.mobileNumber}</td>
                  <td>{datas.country}</td>
                  <td>{datas.state}</td>
                  <td>{datas.address}</td>
                    
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </center>
  );
};

export default HomeVisit;
