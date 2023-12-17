import React, { useState } from 'react';

const AppForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    licensor: '',
    licensee: '',
    fee: '',
    expiryDate: '',
    musicalWork: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Licensor:
        <input type="text" name="licensor" value={formData.licensor} onChange={handleChange} />
      </label>
      <br />
      <label>
        Licensee:
        <input type="text" name="licensee" value={formData.licensee} onChange={handleChange} />
      </label>
      <br />
      <label>
        Fee (ETH):
        <input type="text" name="fee" value={formData.fee} onChange={handleChange} />
      </label>
      <br />
      <label>
        Expiry Date:
        <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
      </label>
      <br />
      <label>
        Musical Work:
        <input type="text" name="musicalWork" value={formData.musicalWork} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppForm;
