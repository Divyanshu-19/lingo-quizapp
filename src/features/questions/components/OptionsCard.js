import React, { useState } from "react";

const Card = ({ option, selectOption, optionSol, setShowNext, showNext }) => {
  const optionStyle = {
    color: "rgb(65,0,153)",
    backgroundColor: "white",
  };

  const correctStyle = {
    color: "white",
    backgroundColor: "rgb(65,0,153)",
  };

  const wrongStyle = {
    color: "white",
    backgroundColor: "red",
  };

  const handleOptionClick = () => {
    if (showNext) {
      return;
    }
    if (option === optionSol[0]) {
      setStyle(correctStyle);
    } else {
      setStyle(wrongStyle);
    }
    selectOption(option);
    setShowNext(true);
  };

  const [style, setStyle] = useState(null);

  return (
    <div
      className="shadow mx-4 my-4 fw-semibold fs-4"
      style={{
        ...optionStyle,
        ...style,
        padding: " 2rem 6rem",
        cursor: showNext ? "not-allowed" : "pointer",
      }}
      onClick={handleOptionClick}
    >
      {option}
    </div>
  );
};

const OptionsCard = ({
  options,
  selectOption,
  optionSol,
  setShowNext,
  showNext,
}) => {
  return (
    <div
      className="d-inline-flex flex-row flex-wrap align-items-center justify-content-around mt-4"
      style={{ width: "85%" }}
    >
      {options.map((option) => (
        <Card
          key={option}
          option={option}
          selectOption={selectOption}
          optionSol={optionSol}
          setShowNext={setShowNext}
          showNext={showNext}
        />
      ))}
    </div>
  );
};

export default OptionsCard;
