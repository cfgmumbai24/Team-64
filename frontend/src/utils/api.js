// import { ApiResponse } from './types'; // Replace with your actual types import

export const getStudents = async (
  request,
) => {
  try {
    const accessToken = await getAccessToken(request);
    const res = await fetch("http://localhost:5050/api/students/", {
      headers: {
        "Content-Type": "application/json",
     
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data; // Assuming your API response structure matches ApiResponse<{ user: User }>
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Handle or rethrow the error as needed
  }
};


// Function to add student data
 export const addStudent = async (studentData) => {
    try {
      // Assuming you have a function to get the access token
    //   const accessToken = await getAccessToken(); // Implement getAccessToken() as needed
  
      const response = await fetch('http://localhost:5050/api/students/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
     
        },
        body: JSON.stringify(studentData)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data; // Assuming the response is JSON data from the server
    } catch (error) {
      console.error('Error adding student:', error);
      throw error; // Rethrow or handle the error as needed
    }
  };
  
//   // Example usage:
//   const newStudent = {
//     name: 'John Doe',
//     age: 20,
//     // Add more fields as needed
//   };
  
//   addStudent(newStudent)
//     .then(data => {
//       console.log('Student added successfully:', data);
//     })
//     .catch(error => {
//       console.error('Failed to add student:', error);
//     });
  


export const getUserByGrade = async (request, grade) => {
    try {
      // Assuming you need an access token for authorization
    //   const accessToken = await getAccessToken(request);
  
      const res = await fetch(`http://localhost:5050/api/students/${grade}`, {
        headers: {
          "Content-Type": "application/json",
        
        },
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      return data; // Assuming your API response structure matches ApiResponse<{ user: User }>
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Handle or rethrow the error as needed
    }
  };
  

  export const storeAttendence = async (attendanceData, classNo) => {
    try {
    //   const accessToken = await getAccessToken(); // Retrieve access token
      const url = `http://localhost:5050/api/attendance/${classNo}`; // Adjusted endpoint URL
  
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        //   'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(attendanceData) // Convert data to JSON
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error storing attendance:', error);
      throw error;
    }
  };
  

  export const getAttendenceByGrade = async (grade) => {
    try {
      const url = `http://localhost/api/attendance/grade/${grade}`; // Adjusted endpoint URL
  
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Optionally, you can include Authorization header for authentication
          // 'Authorization': `Bearer ${accessToken}`
        },
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching attendance by grade:', error);
      throw error;
    }
  };
  

  export const getAttendanceByClass = async (classNo) => {
    try {
      const url = `http://localhost/api/attendance/class/${classNo}`; // Adjusted endpoint URL
  
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Optionally, you can include Authorization header for authentication
          // 'Authorization': `Bearer ${accessToken}`
        },
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching attendance by class:', error);
      throw error;
    }
  };


  export const updateMarks = async (marksData) => {
    try {
      const url = 'http://localhost/api/marks/add'; // Adjusted endpoint URL
  
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Optionally, you can include Authorization header for authentication
          // 'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(marksData) // Convert data to JSON
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error updating marks:', error);
      throw error;
    }
  };
  

  export const getMarks = async (rollNo) => {
    try {
      const url = `http://localhost/api/marks/${rollNo}`; // Adjusted endpoint URL
  
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
     
        },
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching marks:', error);
      throw error;
    }
  };
  
  