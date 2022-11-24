import React from "react";
import OptionsCard from "./OptionsCard";

const OptionSection = ({
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
      className="shadow mt-4 mx-4"
      style={{
        backgroundColor: "rgb(244,241,249)",
        height: "75vh",
        borderRadius: "20px",
      }}
    >
      <OptionsCard
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
            Continue
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default OptionSection;
