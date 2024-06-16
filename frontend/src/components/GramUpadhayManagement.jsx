import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const GramUpadhayManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  return (
    <div className="container my-4">
      <h1 className="display-4 fw-normal text-body-emphasis font-weight-bold">Goat Information</h1>
      <div className="mt-3">
        {state && state.formData && Object.keys(state.formData).length === 0 ? (
          <p>No data available. Please fill the form first.</p>
        ) : (
          <div>
            <ul className="list-group">
              {state && state.formData && Object.entries(state.formData).map(([key, value]) => (
                <li className="list-group-item" key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
            <div className='my-3'></div>
            <button className="btn btn-secondary ms-3" onClick={() => navigate('/goatfellowform')}>Return to Contact Form</button>
            <a href="https://goat-vision-diagnosis.onrender.com/" className="btn btn-secondary ms-3">Click here to Check Goat Quality using Images</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default GramUpadhayManagement;
