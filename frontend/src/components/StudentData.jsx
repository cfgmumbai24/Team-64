// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useHistory hook for navigation
// import './StudentData.css'; // Import the CSS file

// const StudentData = () => {
//   const [rollNo, setRollNo] = useState('');
//   const navigate = useNavigate(); // Get access to navigation function

//   const handleChange = (event) => {
//     setRollNo(event.target.value);
//   };

//   const handleNavigate = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     if (rollNo === '1') {
//       navigate('/studentone'); // Navigate to '/studentone' if rollNo is '1'
//     }
//     // You can add more conditions or logic for different roll numbers here
//   };

//   return (
//     <div className="container">
//       <h1 className="title">Student Data</h1>
//       <form className="form" onSubmit={handleNavigate}>
//         <label className="label">
//           Roll Number:
//           <input
//             className="input"
//             type="text"
//             value={rollNo}
//             onChange={handleChange}
//             placeholder="Enter Roll Number"
//           />
//         </label>
//         <button className="button" type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default StudentData;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import "./StudentData.css"; // Import the CSS file

const StudentData = () => {
  const [rollNo, setRollNo] = useState("");
  const navigate = useNavigate(); // Get access to navigation function

  const handleChange = (event) => {
    setRollNo(event.target.value);
  };

  const handleNavigate = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (rollNo) {
      navigate(`/studentone`); // Navigate to '/studentone/{rollNo}' if rollNo is entered
    }
  };

  return (
    <div className="container">
      <h1 className="title">Student Data</h1>
      <form className="form" onSubmit={handleNavigate}>
        <label className="label">
          Roll Number:
          <input
            className="input"
            type="text"
            value={rollNo}
            onChange={handleChange}
            placeholder="Enter Roll Number"
          />
        </label>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentData;
