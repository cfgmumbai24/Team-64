// import React, { useEffect, useState } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import axios from 'axios';

// const fetchAttendanceData = async (classNo) => {
//     try {
//         const response = await axios.get(`http://localhost:5050/api/attendance/${classNo}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching attendance data:', error);
//         return null;
//     }
// };

// const GramhunarManagement = ({ classNo, chartType }) => {
//     const [chartData, setChartData] = useState({
//         categories: [],
//         seriesData: [],
//         lineData: [],
//     });

//     useEffect(() => {
//         const getAttendanceData = async () => {
//             const response = await fetchAttendanceData(classNo);
//             if (response && response.success) {
//                 const data = response.attendance;

//                 // Process data for bar and line charts
//                 const attendanceByDate = data.reduce((acc, record) => {
//                     const date = record.date;
//                     if (!acc[date]) {
//                         acc[date] = 0;
//                     }
//                     acc[date] += record.present ? 1 : 0;
//                     return acc;
//                 }, {});

//                 const categories = Object.keys(attendanceByDate);
//                 const seriesData = Object.values(attendanceByDate);

//                 // Process data for pie chart
//                 const gradeCounts = data.reduce((acc, record) => {
//                     const grade = record.grade;
//                     if (!acc[grade]) {
//                         acc[grade] = 0;
//                     }
//                     acc[grade] += 1;
//                     return acc;
//                 }, {});

//                 const pieData = Object.keys(gradeCounts).map(grade => ({
//                     name: grade,
//                     y: gradeCounts[grade]
//                 }));

//                 setChartData({
//                     categories,
//                     seriesData,
//                     lineData: seriesData, // Use the same data for the line chart
//                     pieData,
//                 });
//             }
//         };

//         getAttendanceData();
//     }, [classNo, chartType]);

//     const barOptions = {
//         chart: {
//             type: 'bar'
//         },
//         title: {
//             text: `Class Attendance for Class ${classNo}`
//         },
//         xAxis: {
//             categories: chartData.categories,
//             title: {
//                 text: 'Date'
//             }
//         },
//         yAxis: {
//             min: 0,
//             title: {
//                 text: 'Number of Present Students',
//                 align: 'high'
//             },
//             labels: {
//                 overflow: 'justify'
//             }
//         },
//         plotOptions: {
//             bar: {
//                 dataLabels: {
//                     enabled: true
//                 }
//             }
//         },
//         series: [{
//             name: 'Attendance',
//             data: chartData.seriesData
//         }]
//     };

//     const pieOptions = {
//         chart: {
//             type: 'pie'
//         },
//         title: {
//             text: 'Attendance by Grade'
//         },
//         tooltip: {
//             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//         },
//         plotOptions: {
//             pie: {
//                 allowPointSelect: true,
//                 cursor: 'pointer',
//                 dataLabels: {
//                     enabled: true,
//                     format: '<b>{point.name}</b>: {point.y} ({point.percentage:.1f}%)'
//                 }
//             }
//         },
//         series: [{
//             name: 'Students',
//             colorByPoint: true,
//             data: chartData.pieData
//         }]
//     };

//     const lineOptions = {
//         chart: {
//             type: 'line'
//         },
//         title: {
//             text: `Attendance Over Time for Class ${classNo}`
//         },
//         xAxis: {
//             categories: chartData.categories,
//             title: {
//                 text: 'Date'
//             }
//         },
//         yAxis: {
//             min: 0,
//             title: {
//                 text: 'Number of Present Students',
//                 align: 'high'
//             },
//             labels: {
//                 overflow: 'justify'
//             }
//         },
//         series: [{
//             name: 'Attendance',
//             data: chartData.lineData
//         }]
//     };

//     return (
//         <div>
//             {chartType === 'bar' && (
//                 <HighchartsReact highcharts={Highcharts} options={barOptions} />
//             )}
//             {chartType === 'pie' && (
//                 <HighchartsReact highcharts={Highcharts} options={pieOptions} />
//             )}
//             {chartType === 'line' && (
//                 <HighchartsReact highcharts={Highcharts} options={lineOptions} />
//             )}
//         </div>
//     );
// };

// export default GramhunarManagement;


import React, { useEffect, useState} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useNavigate} from 'react-router-dom';

// Mock API functions to simulate fetching data
const fetchMockAttendanceDataByClass = (classNo) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                message: `Attendance fetched successfully for class ${classNo}`,
                attendance: [
                    { _id: "1", date: "2024-06-01", stud_id: "101", present: true },
                    { _id: "2", date: "2024-06-01", stud_id: "102", present: false },
                    { _id: "3", date: "2024-06-02", stud_id: "103", present: true },
                    { _id: "4", date: "2024-06-02", stud_id: "104", present: true },
                    { _id: "5", date: "2024-06-03", stud_id: "105", present: false },
                    { _id: "6", date: "2024-06-03", stud_id: "106", present: true },
                    { _id: "7", date: "2024-06-04", stud_id: "107", present: true },
                    { _id: "8", date: "2024-06-04", stud_id: "108", present: true }
                ]
            });
        }, 1000); // Simulate network delay
    });
};

const fetchMockAttendanceDataByGrade = (grade) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                message: `Attendance fetched successfully for grade ${grade}`,
                attendance: [
                    { _id: "1", date: "2024-06-01", stud_id: "101", grade: 'A' },
                    { _id: "2", date: "2024-06-01", stud_id: "102", grade: 'B' },
                    { _id: "3", date: "2024-06-02", stud_id: "103", grade: 'C' },
                    { _id: "4", date: "2024-06-02", stud_id: "104", grade: 'D' },
                    { _id: "5", date: "2024-06-03", stud_id: "105", grade: 'A' },
                    { _id: "6", date: "2024-06-03", stud_id: "106", grade: 'B' },
                    { _id: "7", date: "2024-06-04", stud_id: "107", grade: 'C' },
                    { _id: "8", date: "2024-06-04", stud_id: "108", grade: 'A' }
                ]
            });
        }, 1000); // Simulate network delay
    });
};

const GramhunarManagement = ({ classNo, grade, chartType }) => {
const navigate=useNavigate()

    const [barChartData, setBarChartData] = useState({ categories: [], seriesData: [] });
    const [pieChartData, setPieChartData] = useState([]);

    useEffect(() => {
        const fetchAttendanceData = async () => {
            try {
                const responseClass = await fetchMockAttendanceDataByClass(classNo);
                const classData = responseClass.attendance;

                const attendanceByDate = classData.reduce((acc, record) => {
                    const date = record.date;
                    if (!acc[date]) {
                        acc[date] = 0;
                    }
                    acc[date] += record.present ? 1 : 0;
                    return acc;
                }, {});

                const barCategories = Object.keys(attendanceByDate);
                const barSeriesData = Object.values(attendanceByDate);

                setBarChartData({ categories: barCategories, seriesData: barSeriesData });

                const responseGrade = await fetchMockAttendanceDataByGrade(grade);
                const gradeData = responseGrade.attendance;

                const gradeCounts = gradeData.reduce((acc, record) => {
                    const grade = record.grade;
                    if (!acc[grade]) {
                        acc[grade] = 0;
                    }
                    acc[grade] += 1;
                    return acc;
                }, {});

                const pieData = Object.keys(gradeCounts).map(grade => ({
                    name: grade,
                    y: gradeCounts[grade]
                }));

                setPieChartData(pieData);
            } catch (error) {
                console.error('Error fetching attendance data:', error);
            }
        };

        fetchAttendanceData();
    }, [classNo, grade]);

    const barOptions = {
        chart: {
            type: 'bar',
            style: {
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px'
            }
        },
        title: {
            text: `Class Attendance`,
            style: {
                color: '#333333',
                fontSize: '18px'
            }
        },
        xAxis: {
            categories: barChartData.categories,
            title: {
                text: 'Date',
                style: {
                    fontSize: '14px'
                }
            },
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Present Students',
                align: 'high',
                style: {
                    fontSize: '14px'
                }
            },
            labels: {
                overflow: 'justify',
                style: {
                    fontSize: '12px'
                }
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '12px'
                    }
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true,
            itemStyle: {
                color: '#333333',
                fontSize: '12px'
            },
            itemHoverStyle: {
                color: '#000000'
            }
        },
        series: [{
            name: 'Attendance',
            data: barChartData.seriesData
        }]
    };

    const pieOptions = {
        chart: {
            type: 'pie',
            style: {
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px'
            }
        },
        title: {
            text: 'Grade Wise Distribution',
            style: {
                color: '#333333',
                fontSize: '18px'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
            style: {
                fontSize: '14px'
            }
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y} ({point.percentage:.1f} %)',
                    style: {
                        fontSize: '12px'
                    }
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true,
            itemStyle: {
                color: '#333333',
                fontSize: '12px'
            },
            itemHoverStyle: {
                color: '#000000'
            }
        },
        series: [{
            name: 'Students',
            colorByPoint: true,
            data: pieChartData
        }]
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: '0.3s',
        outline: 'none',
        // Hover effect
        ':hover': {
            backgroundColor: '#45a049',  // Darker shade of green
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
        }
    };

const handleSubmit=()=>{
navigate('/studentdata')
}

  
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={barOptions} />
            <HighchartsReact highcharts={Highcharts} options={pieOptions} />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={handleSubmit}>
            Check Some Great Progresses by students
        </button>
            </div>
        </div>
    );
};

export default GramhunarManagement;