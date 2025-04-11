import React from "react";

const TodaysDate: React.FC = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="todays-date">
      {formattedDate}
    </div>
  );
};

export default TodaysDate;
