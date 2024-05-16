import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';

const initialData = [
  { month: 'January', completed: 40, incomplete: 70 },
  { month: 'February', completed: 5, incomplete: 25 },
  { month: 'March', completed: 80, incomplete: 0 },
  { month: 'April', completed: 200, incomplete: 43 },
  { month: 'May', completed: 100, incomplete: 30 },
  { month: 'June', completed: 20, incomplete: 30 },
  { month: 'July', completed: 20, incomplete: 30 },
  { month: 'August', completed: 20, incomplete: 30 },
  { month: 'September', completed: 40, incomplete: 80 },
  { month: 'October', completed: 70, incomplete: 10 },
  { month: 'November', completed: 10, incomplete: 50 },
  { month: 'December', completed: 50, incomplete: 50 },
];

const COLORS = ['#0088FE', '#FF0000']; // Blue for completed, Red for incomplete

const ReportsCharts = () => {
  const [selectedMonth, setSelectedMonth] = useState('April');
  const [selectedData, setSelectedData] = useState(initialData.find(item => item.month === 'April'));

  useEffect(() => {
    setSelectedData(initialData.find(item => item.month === selectedMonth));
  }, [selectedMonth]);

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    const data = initialData.find(item => item.month === month);
    setSelectedData(data);
  };

  const pieChartData = Object.keys(selectedData).filter(key => key !== 'month').map((key, index) => ({
    name: key === 'completed' ? 'Completed' : 'Incomplete',
    value: selectedData[key],
    fill: key === 'completed' ? COLORS[0] : COLORS[1]
  }));

  const barChartData = pieChartData.map(item => ({
    name: item.name,
    pv: item.value // You can adjust this based on your data structure
  }));

  return (
    <div style={{
      width: '50%',
      height: '620px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '8px',
      marginLeft: "400px",
      marginTop: "50px",
      // backgroundColor: "#f2f2f2"
      backgroundColor: "#d9d9d9"
    }}>
      <h3> REPORTS STATUS</h3>
      <div style={{ width: '100%', flexGrow: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <ResponsiveContainer width="45%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={pieChartData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="35%" height="80%">
          <BarChart
            width={100}
            height={100}
            data={barChartData}
            margin={{
              top: 2,
              right: 10,
              left: 10,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{ justifyContent: 'center', marginTop: '2px' }}>
        <select value={selectedMonth} onChange={(e) => handleMonthSelect(e.target.value)}>
          {initialData.map((item, index) => (
            <option key={index} value={item.month}>{item.month}</option>
          ))}
        </select>
      </div>
      <div style={{ justifyContent: 'center', marginTop: '20px' }}>
        <p style={{ color: "blue" }}>Completed: {selectedData.completed}</p>
        <p style={{ color: "red" }}>Notcompleted: {selectedData.incomplete}</p>
      </div>
    </div>
  );
}

export default ReportsCharts;





// import React, { useState, useEffect } from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

// const initialData = [
//   { location: 'East', desktop: 7500, laptop: 6000, mobile: 10000, software: 12000 },
//   { location: 'West', desktop: 20000, laptop: 15000, mobile: 17500, software: 7500 },
// ];

// const COLORS = ['#1890ff', '#ffc107', '#4caf50', '#f44336']; // Blue for desktop, Yellow for laptop, Green for mobile, Red for software

// const ReportsCharts = () => {
//   const [selectedLocation, setSelectedLocation] = useState('East');
//   const [selectedData, setSelectedData] = useState(initialData.find(item => item.location === 'East'));

//   useEffect(() => {
//     setSelectedData(initialData.find(item => item.location === selectedLocation));
//   }, [selectedLocation]);

//   const handleLocationSelect = (location) => {
//     setSelectedLocation(location);
//     const data = initialData.find(item => item.location === location);
//     setSelectedData(data);
//   };

//   return (
//     <div style={{
//       width: '40%',
//       height: '550px',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       border: '2px solid #ccc',
//       borderRadius: '8px',
//       backgroundColor: '#003366',
//       marginLeft:"500px",
//       marginTop:"50px"
//     }}>
//       <h1 style={{ color: 'white', textAlign: 'center' }}>Reports Status</h1>
//       <div style={{ width: '100%', flexGrow: 1, marginLeft: "200px" }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <NewPieChart selectedData={selectedData} />
//         </ResponsiveContainer>
//       </div>
//       <div style={{ justifyContent: 'center',marginTop: '2px'  }}>
//         <select value={selectedLocation} onChange={(e) => handleLocationSelect(e.target.value)}>
//           {initialData.map((item, index) => (
//             <option key={index} value={item.location}>{item.location}</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// const NewPieChart = ({ selectedData }) => {
//   const pieChartData = Object.keys(selectedData).filter(key => key !== 'location').map((key, index) => ({
//     name: key,
//     value: selectedData[key],
//     fill: COLORS[index]
//   }));

//   return (
//     <PieChart width={400} height={400}>
//       <Pie
//         data={pieChartData}
//         cx="50%"
//         cy="50%"
//         labelLine={false}
//         outerRadius={80}
//         fill="#8884d8"
//         dataKey="value"
//         nameKey="name"
//       >
//         {pieChartData.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={entry.fill} />
//         ))}
//       </Pie>
//       <Legend verticalAlign="bottom" />
//     </PieChart>
//   );
// };

// export default ReportsCharts;

