import React, { useState } from "react";
import toast from 'react-hot-toast'

const AppForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    licensor: "",
    licensee: "",
    fee: "",
    expiryDate: "",
    musicalWork: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);

    toast.success('Transaction successful');
  };

  return (
    <div className="flex items-center justify-center bg-gray-900">
      <div className="bg-opacity-25 bg-blur w-96 p-8 rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-white">
            Licensor:
            <input
              className="text-black mt-1 p-2 w-full border rounded-md"
              type="text"
              name="licensor"
              value={formData.licensor}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="block text-sm font-medium text-white">
            Licensee:
            <input
              className="text-black mt-1 p-2 w-full border rounded-md"
              type="text"
              name="licensee"
              value={formData.licensee}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="block text-sm font-medium text-white">
            Fee (ETH):
            <input
              className="text-black mt-1 p-2 w-full border rounded-md"
              type="text"
              name="fee"
              value={formData.fee}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="block text-sm font-medium text-white">
            Expiry Date:
            <input
              className="text-black mt-1 p-2 w-full border rounded-md"
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="block text-sm font-medium text-white">
            Musical Work:
            <input
              className="text-black mt-1 p-2 w-full border rounded-md"
              type="text"
              name="musicalWork"
              value={formData.musicalWork}
              onChange={handleChange}
            />
          </label>
          <br />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 bg-lavender"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppForm;
