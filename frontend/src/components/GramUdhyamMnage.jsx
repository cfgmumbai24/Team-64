import React from "react";

const GramUdhyamManage = () => {
  const data = {
    goat1: {
      milkRating: "4",
      meatRating: "5",
    },
    goat2: {
      milkRating: "4",
      meatRating: "3",
    },
    goat3: {
      milkRating: "2",
      meatRating: "3",
    },
  };

  return (
    <table
      border="1"
      style={{ width: "50%", textAlign: "center", margin: "auto" }}
    >
      <thead>
        <tr>
          <th>Goat ID</th>
          <th>Milk Rating</th>
          <th>Meat Rating</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((goatId) => {
          const { milkRating, meatRating } = data[goatId];
          const highlightStyle = {
            backgroundColor: "green",
            color: "white",
            padding: "0 20px",
          };
          return (
            <tr key={goatId}>
              <td>{goatId}</td>
              <td style={milkRating > meatRating ? highlightStyle : {}}>
                {milkRating}
              </td>
              <td style={meatRating > milkRating ? highlightStyle : {}}>
                {meatRating}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GramUdhyamManage;
