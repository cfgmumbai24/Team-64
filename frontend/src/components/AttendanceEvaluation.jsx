import React from 'react';
import {Link} from 'react-router-dom' ;

const AttendanceEvaluation = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <div className="card" style={{ width: '18rem' }}>
        <img src="/Attend.jpeg" className="card-img-top" alt="Attendance" height={250} />
        <hr />
        <div className="card-body">
          <h5 className="card-title">Attendance</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/attendancetable" className="btn btn-primary">Mark Attendance</Link>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img src="/eva.jpg" className="card-img-top" alt="Evaluation" height={250} />
        <hr />
        <div className="card-body">
          <h5 className="card-title">Evaluation</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/evaluationtable" className="btn btn-primary">Evaluate Students</Link>
        </div>
      </div>
    </div>
  );
}

export default AttendanceEvaluation;
