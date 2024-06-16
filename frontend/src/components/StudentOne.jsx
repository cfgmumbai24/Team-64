import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useParams } from "react-router-dom";

const StudentOne = () => {
  const [gradeData, setGradeData] = useState([]);
  const { slug } = useParams(); // Get slug from URL parameters
  console.log(slug);
  //   const roll_no = 2;
  // Fetching data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5050/api/marks/1`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("HELLO");
        console.log(data["marks"]["total_marks"]);
        var totalMarks = data["marks"]["total_marks"];
        // const marks = data.marks;
        setGradeData(totalMarks); // Update state with fetched totalMarks
      } catch (error) {
        console.error("Error fetching data:", error);
        setGradeData([]); // Set empty data in case of error
      }
    };

    fetchData();
  }, [slug]); // Fetch data when the component mounts or rollNo changes

  // Sample categories and corresponding data
  const categories = [
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
  ];
  console.log(gradeData);
  // Define chart options
  const options = {
    title: {
      text: "Student Grade Progress",
    },
    xAxis: {
      categories: categories,
    },
    yAxis: {
      title: {
        text: "Grade",
      },
      categories: ["D", "C", "B", "A"], // Grades from D to A
    },
    series: [
      {
        name: `Roll Number ${slug}`,
        type: "line",
        data: gradeData, // Use the fetched data for the line chart
        color: "red", // Customize line color if needed
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StudentOne;
