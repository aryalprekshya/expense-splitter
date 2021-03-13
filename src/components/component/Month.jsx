import React from "react";

export default function Month() {
  const getMonth = () => {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    var d = new Date();
    return monthNames[d.getMonth()];
  };

  return (
    <div>
      <button className="big-button">{getMonth()}'s Calculation</button>
    </div>
  );
}
