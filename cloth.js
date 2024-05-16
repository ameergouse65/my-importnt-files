import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Cloth() {
  const [itemName, setItemName] = useState("");
  const [cost, setCost] = useState(0);
  const [availability, setAvailability] = useState("");
  const [image, setImage] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("productName", itemName);
    formData.append("price", cost);
    formData.append("stock", availability);

    axios
      .post("http://localhost:1113/api/cloth/save", formData)
      headers: {
        "Content-Type": "multipart/form-data",
      }
      .then((response) => {
        console.log("Data saved successfully", response.data);
        setSubmitStatus("success");
      })
      .catch((error) => {
        console.error("Error saving data", error);
        setSubmitStatus("error");
      });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="container">
      <form className="items-form" onSubmit={handleSubmit}>
        <table className="items-table">
          <thead>
            <tr>
              <th colSpan={2} className="text-center title">
                ADDING CLOTHING LIST FORM
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label className="label">Item Name</label>
              </td>
              <td>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="input-text"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">Cost</label>
              </td>
              <td>
                <input
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  className="input-number"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">Availability</label>
              </td>
              <td>
                <input
                  type="text"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="input-text"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">Image</label>
              </td>
              <td>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="input-file"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="button-container">
                <button type="submit" className="btn btn-primary submit-button">
                  Submit
                </button>
                <Link to="/cloth">
                  <button className="btn btn-primary submit-button">
                    Back
                  </button>
                </Link>
              </td>
            </tr>
            {submitStatus === "success" && (
              <tr>
                <td colSpan={2}>
                  <div className="alert alert-success" role="alert">
                    Data submitted successfully!
                  </div>
                </td>
              </tr>
            )}
            {submitStatus === "error" && (
              <tr>
                <td colSpan={2}>
                  <div className="alert alert-danger" role="alert">
                    Error submitting data. Please try again.
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>z
      </form>
    </div>
  );
}

export default Cloth;
