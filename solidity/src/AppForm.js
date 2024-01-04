import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AppForm = ({ onSubmit }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    licensor: "",
    licensee: "",
    fee: "",
    expiryDate: "",
    musicalWork: "",
  });

  // Function to handle navigation
  function handleNavigation(to) {
    navigate(to);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
    toast.success("Transaction successfull");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Licensor:
        <input
          type="text"
          name="licensor"
          value={formData.licensor}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Licensee:
        <input
          type="text"
          name="licensee"
          value={formData.licensee}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Fee (ETH):
        <input
          type="text"
          name="fee"
          value={formData.fee}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Expiry Date:
        <input
          type="text"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Musical Work:
        <input
          type="text"
          name="musicalWork"
          value={formData.musicalWork}
          onChange={handleChange}
        />
      </label>
      <br />
      <button onClick={() => handleNavigation("/success")} type="submit">
        Submit
      </button>
    </form>
  );
};

export default AppForm;
