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

  return <h3> {getMonth()}'s Calculation</h3>;
}
