import React, { useEffect, useState } from "react";

const Timer = ({ totalTime, stopTimer }) => {
  const [time, setTime] = useState(totalTime);

  useEffect(() => {
    const intervalRef = setInterval(() => setTime((prev) => prev - 1), 1000);
    if (time <= 0) {
      clearInterval(intervalRef);
      setTime(0);
      stopTimer();
    }
    return () => {
      clearInterval(intervalRef);
    };
  });

  return (
    <div
      className="shadow text-center mt-4 ms-3 me-3"
      style={{ backgroundColor: "rgb(249,249,249)", borderRadius: "20px" }}
    >
      <div className="fw-bold pt-4">Time left</div>
      <div
        className="fs-2 fw-bold mt-3 pb-5"
        style={{ color: "rgb(65,0,153)" }}
      >
        {Math.floor(time / 60)}:{time % 60}
      </div>
    </div>
  );
};

export default Timer;
