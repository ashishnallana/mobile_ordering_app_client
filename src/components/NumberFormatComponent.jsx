import React from "react";

const NumberFormatComponent = ({ value }) => {
  const formattedValue = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

  return <span>{formattedValue}</span>;
};

export default NumberFormatComponent;
