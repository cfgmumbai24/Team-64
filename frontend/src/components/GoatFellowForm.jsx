import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const GoatFellowForm = ({ setFormData }) => {
  const [formState, setFormState] = useState({
    Milk: '',
    Age: '',
    Height: '',
    Weight: '',
    PregnancyStatus: 'No',
    Behaviour: 'Docile',
    Gender: 'Male',
    Intake: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setFormData(formState);
    navigate('/gramupadhaymanagement', {state: {formData: formState}});
  };

  return (
    <div>
      <div className="container my-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className="display-4 fw-normal text-body-emphasis font-weight-bold">Enter the Information For Goat</h1>
      </div>

      <div className="container mx-auto mt-2">
        <form onSubmit={handleSubmit} action='/gramupadhayanagement' style={{ border: '1px dotted gray' }} className="px-5 py-5">
          {[
            { label: 'Milk In Litres', name: 'Milk', type: 'number' },
            { label: 'Age of Goat', name: 'Age', type: 'number' },
            { label: 'Height (cm)', name: 'Height', type: 'number' },
            { label: 'Weight (kg)', name: 'Weight', type: 'number' },
            { label: 'HayGrass Intake (kg\'s)', name: 'Intake', type: 'number' }
          ].map(({ label, name, type }) => (
            <div className="form-group" key={name}>
              <label htmlFor={name}>{label}</label>
              <input
                type={type}
                className="form-control"
                id={name}
                name={name}
                value={formState[name]}
                onChange={handleChange}
                placeholder={`Enter ${label}`}
              />
              <br />
            </div>
          ))}

          {[
            { label: 'Select Pregnancy Status', name: 'PregnancyStatus', options: ['No', 'Yes'] },
            { label: 'Select Behaviour', name: 'Behaviour', options: ['Docile', 'Normal', 'Aggressive'] },
            { label: 'Select Gender', name: 'Gender', options: ['Male', 'Female'] }
          ].map(({ label, name, options }) => (
            <div className="form-group" key={name}>
              <label htmlFor={name}>{label}</label>
              <select
                className="form-control"
                id={name}
                name={name}
                value={formState[name]}
                onChange={handleChange}
              >
                {options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <br />
            </div>
          ))}

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GoatFellowForm;
