import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClassCards = () => {
  const navigate = useNavigate();

  const navg = () => {
    navigate('/ae');
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-sm-6 my-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Class 1</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <button onClick={navg} className="btn btn-primary">Take Action</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Class 2</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <button onClick={navg} className="btn btn-primary">Take Action</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Class 3</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <button onClick={navg} className="btn btn-primary">Take Action</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Class 4</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <button onClick={navg} className="btn btn-primary">Take Action</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Class 5</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <button onClick={navg} className="btn btn-primary">Take Action</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassCards;
