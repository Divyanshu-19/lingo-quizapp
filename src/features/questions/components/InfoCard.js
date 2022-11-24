import React from "react";

const InfoCard = ({ currentQuestion, totalQuestion }) => {
  return (
    <div
      className="shadow text-center mt-4 ms-3 me-3"
      style={{
        backgroundColor: "rgb(249,249,249)",
        borderRadius: "20px",
        height: "51vh",
      }}
    >
      <div className="fw-bold pt-4">Questions</div>
      <div
        className="fs-2 fw-bold mt-3 pb-5"
        style={{ color: "rgb(65,0,153)" }}
      >
        {currentQuestion < 10 ? "0" : null}
        {currentQuestion} / {totalQuestion < 10 ? "0" : null}
        {totalQuestion}
      </div>
      <div className="fw-bold pt-4">Level</div>
      <div
        className="fs-2 fw-bold mt-3 pb-5"
        style={{ color: "rgb(65,0,153)" }}
      >
        01
      </div>
    </div>
  );
};

export default InfoCard;
