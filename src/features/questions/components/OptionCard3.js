import React, { useEffect, useState } from "react";

const Card = ({ option, index, addWordToSolution, showNext }) => {
  const optionStyle = {
    color: "rgb(65,0,153)",
    backgroundColor: "white",
  };

  const selectedStyle = {
    color: "black",
    backgroundColor: "white",
  };

  const handleOptionClick = () => {
    addWordToSolution(option, index);
  };

  return (
    <>
      {option[1] === 0 ? (
        showNext === false ? (
          <div
            className="shadow rounded mx-2 my-2 fw-semibold fs-3 px-4 py-2"
            style={{
              ...optionStyle,
              cursor: "pointer",
            }}
            onClick={handleOptionClick}
          >
            {option[0]}
          </div>
        ) : (
          <div
            className="shadow rounded mx-2 my-2 fw-semibold fs-3 px-4 py-2"
            style={{
              ...optionStyle,
              cursor: "not-allowed",
            }}
            // onClick={handleOptionClick}
          >
            {option[0]}
          </div>
        )
      ) : (
        <div
          className="shadow rounded mx-2 my-2 fw-semibold fs-3 opacity-25 px-4 py-2"
          style={{
            ...selectedStyle,
            // padding: " 1rem 2rem",
          }}
        >
          {option[0]}
        </div>
      )}
    </>
  );
};

const ResultCard = ({ solution, showNext }) => {
  const optionStyle = {
    color: "orange",
    backgroundColor: "white",
  };
  return (
    <div
      className="shadow mx-5 mt-5 fw-semibold fs-1 px-5 py-3 rounded text-center"
      style={{
        ...optionStyle,
      }}
    >
      {solution}
      {showNext ? null : <span>_</span>}
    </div>
  );
};

const OptionsCard2 = ({
  options,
  selectOption,
  optionSol,
  setShowNext,
  showNext,
}) => {
  const [solution, setSolution] = useState(
    options
      .filter((option) => option[1] === 1)
      .sort((a, b) => a[2] - b[2])
      .map((option) => option[0])
      .join("")
  );
  const [optionButton, setOptionButton] = useState(options);

  useEffect(() => {
    if (solution.length === optionSol[0].length) {
      selectOption(solution);
      setShowNext(true);
    }
  }, [solution]);

  const addWordToSolution = (word, index) => {
    setSolution((prev) => prev + word[0]);
    const newOptions = [...optionButton];
    newOptions[index][1] = 1;
    setOptionButton(newOptions);
  };

  return (
    <>
      <div className="mt-5 ps-3" style={{ width: "85%" }}>
        <ResultCard key={solution} solution={solution} showNext={showNext} />
      </div>
      <div
        className="d-inline-flex flex-row flex-wrap align-items-center justify-content-center mt-4 ps-3"
        style={{ width: "85%" }}
      >
        {optionButton.map((option, index) => (
          <Card
            key={option[0]}
            option={option}
            index={index}
            // selectOption={selectOption}
            // optionSol={optionSol}
            // setShowNext={setShowNext}
            showNext={showNext}
            addWordToSolution={addWordToSolution}
          />
        ))}
      </div>
    </>
  );
};

export default OptionsCard2;
