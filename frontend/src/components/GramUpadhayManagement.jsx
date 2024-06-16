import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const GramUpadhayManagement = ({ formData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {state} = location;

  return (
    <div className="container my-4">
      <h1 className="display-4 fw-normal text-body-emphasis font-weight-bold">Goat Information</h1>
      <div className="mt-3">
        {Object.keys(state.formData).length === 0 ? (
          <p>No data available. Please fill the form first.</p>
        ) : (
          <div>
            <ul className="list-group">
              {Object.entries(state.formData).map(([key, value]) => (
                <li className="list-group-item" key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
            <button className="btn btn-secondary mt-3" onClick={() => navigate('/goatfellowform')}>Return to Contact Form</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GramUpadhayManagement;
