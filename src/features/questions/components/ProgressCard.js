import React from "react";

const ProgressCard = ({ currentProgress, totalQuestion }) => {
  return (
    <div
      className="text-center"
      style={{ backgroundColor: "rgb(244,241,249)" }}
    >
      <div className="fs-5 fw-bold pt-5 pb-3">Progress</div>
      <div className="progress mx-5 mb-3">
        <div
          className="progress-bar"
          role="progressbar"
          aria-label="Basic example"
          style={{ width: `${(currentProgress / totalQuestion) * 100}%` }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div>
        {currentProgress} / {totalQuestion}
      </div>
    </div>
  );
};

export default ProgressCard;
