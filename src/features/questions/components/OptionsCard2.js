import React, { useEffect, useState } from "react";

const Card = ({ option, index, addWordToSolution }) => {
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
        <div
          className="shadow mx-1 my-3 fw-semibold fs-5"
          style={{
            ...optionStyle,
            padding: " 1rem 2rem",
            cursor: "pointer",
          }}
          onClick={handleOptionClick}
        >
          {option[0]}
        </div>
      ) : (
        <div
          className="shadow mx-1 my-3 fw-semibold fs-5 opacity-25"
          style={{
            ...selectedStyle,
            padding: " 1rem 2rem",
          }}
        >
          {option[0]}
        </div>
      )}
    </>
  );
};

const ResultCard = ({ option }) => {
  const optionStyle = {
    color: "white",
    backgroundColor: "rgb(65,0,153)",
  };
  return (
    <div
      className="shadow mx-1 my-3 fw-semibold fs-5 px-3 py-2 rounded"
      style={{
        ...optionStyle,
      }}
    >
      {option}
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
  );
  const [optionButton, setOptionButton] = useState(options);

  useEffect(() => {
    if (solution.length === optionSol.length) {
      let flag = 0;
      for (let i = 0; i < solution.length; i++) {
        if (solution[i] !== optionSol[i]) {
          flag = 1;
          break;
        }
      }
      if (flag === 0) {
        selectOption({ valid: true, value: solution });
      } else {
        selectOption({ valid: false, value: solution });
      }
      setShowNext(true);
    }
  }, [solution]);

  const addWordToSolution = (word, index) => {
    setSolution((prev) => [...prev, word[0]]);
    const newOptions = [...optionButton];
    newOptions[index][1] = 1;
    setOptionButton(newOptions);
  };

  return (
    <>
      <div
        className="d-inline-flex flex-row flex-wrap align-items-center justify-content-center mt-5 ps-3"
        style={{ width: "85%" }}
      >
        {solution.map((option) => (
          <ResultCard
            key={option}
            option={option}
            // selectOption={selectOption}
            // optionSol={optionSol}
            // setShowNext={setShowNext}
            // showNext={showNext}
          />
        ))}
      </div>
      <hr className="mx-5 px-5" />
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
            // showNext={showNext}
            addWordToSolution={addWordToSolution}
          />
        ))}
      </div>
    </>
  );
};

export default OptionsCard2;
