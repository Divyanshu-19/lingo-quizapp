import React from "react";
import before from "../../../static/q4_before.png";
import after from "../../../static/q4_after.png";
import OptionsCard3 from "./OptionCard3";

const OptionSection2 = ({
  selectOption,
  optionSol,
  showNext,
  setShowNext,
  options,
  handleNewQuestion,
}) => {
  const handleContinue = () => {
    handleNewQuestion();
  };

  return (
    <div
      className="mt-4 mx-2 row justify-content-"
      style={{
        height: "75vh",
        borderRadius: "20px",
      }}
    >
      <div
        className="col-sm-12 col-lg rounded shadow"
        style={{
          // border: "1px solid black",
          backgroundColor: "rgb(244,241,249)",
        }}
      >
        <OptionsCard3
          selectOption={selectOption}
          optionSol={optionSol}
          showNext={showNext}
          setShowNext={setShowNext}
          options={options}
        />
        {showNext ? (
          <div className="text-end me-3" style={{ position: "relative" }}>
            <button
              className="fw-semibold"
              style={{
                padding: "1.5rem 7rem",
                position: "absolute",
                bottom: "-10rem",
                right: "0",
                border: "none",
                borderRadius: "40px",
                backgroundColor: "rgb(255,136,0)",
                color: "white",
              }}
              onClick={handleContinue}
            >
              Finish
            </button>
          </div>
        ) : null}
      </div>
      <div
        className="shadow col-sm-12 col-lg text-center pt-4 rounded ms-4 "
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <img src={showNext ? after : before} style={{ maxWidth: "35vw" }} />
      </div>
    </div>
  );
};

export default OptionSection2;
