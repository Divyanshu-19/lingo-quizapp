import React, { useState } from "react";
import ProgressCard from "./components/ProgressCard";
import QuestionCard from "./components/QuestionCard";
import Timer from "./components/Timer";
import InfoCard from "./components/InfoCard";
import OptionSection from "./components/OptionSection";
import OptionSection2 from "./components/OptionSection2";
import { useNavigate } from "react-router-dom";
import QuestionCard2 from "./components/QuestionCard2";

const McQuestions = () => {
  const navigate = useNavigate();
  const questionHead = [
    "Choose the correct word",
    "Choose the correct ending",
    "Re arrange in the proper order for the given english phrase",
    "Type the answer",
  ];
  const questionMain = [
    ["eu", null, "o", "carro"],
    ["conduz"],
    [],
    ["ele", null],
  ];
  const questionFooter = [
    ["I", "drive", "the", "car"],
    ["to drive", ""],
    ["I", "drive", "the", "car", "on the", "road"],
    ["He", "spoke"],
  ];

  const options = [
    ["conduzo", "falo", "vai conduzir", "conduzei"],
    ["ar", "er", "ir"],
    // 0 -> optopm
    // 1 -> 0/1 where 0 is unselected, 1 is selected
    // 2 -> position of option selected
    [
      ["conduzo", 1, 1],
      ["na", 0],
      ["estrada", 0],
      ["carro", 0],
      ["o", 0],
      ["eu", 1, 0],
    ],
    [
      ["i", 0],
      ["o", 1, 3],
      ["f", 1, 0],
      ["p", 0],
      ["a", 1, 1],
      ["r", 0],
      ["s", 0],
      ["v", 0],
      ["c", 0],
      ["a", 0],
      ["l", 1, 2],
      ["u", 0],
    ],
  ];
  const optionSol = [
    ["conduzo", 1],
    ["ir", 0],
    ["eu", "conduzo", "o", "carro", "na", "estrada"],
    ["falou", 1],
  ];
  const type = ["type1", "type1", "type2", "type3"];

  const [qnumber, setQNumber] = useState(0);
  const [marks, setMarks] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const selectOption = (option) => {
    setSelectedOption(option);
  };

  const handleNewQuestion = () => {
    if (type[qnumber] === "type2") {
      handleNewQuestion2();
      return;
    }

    if (selectedOption === optionSol[qnumber][0]) {
      setMarks((prev) => prev + 1);
    }

    setShowNext(false);
    setQNumber((prev) => {
      if (prev < questionMain.length - 1) {
        return prev + 1;
      } else {
        if (selectedOption === optionSol[qnumber][0]) {
          return navigate(`/score/${marks + 1}-${questionMain.length}`);
        } else {
          return navigate(`/score/${marks}-${questionMain.length}`);
        }
      }
    });
    setSelectedOption(null);
  };

  const handleNewQuestion2 = () => {
    if (selectedOption.valid === true) {
      setMarks((prev) => prev + 1);
    }
    setShowNext(false);
    setQNumber((prev) => {
      if (prev < questionMain.length - 1) {
        return prev + 1;
      } else {
        if (selectedOption.valid === true) {
          return navigate(`/score/${marks + 1}-${questionMain.length}`);
        } else {
          return navigate(`/score/${marks}-${questionMain.length}`);
        }
      }
    });
    setSelectedOption(null);
  };

  const stopTimer = () => {
    return navigate(`/score/${marks}-${questionMain.length}`);
  };

  return (
    <div className="container-lg">
      <div className="row">
        <div className="col-9 px-0">
          {(type[qnumber] === "type1" || type[qnumber] === "type3") && (
            <QuestionCard
              qNumber={qnumber}
              questionHead={questionHead[qnumber]}
              questionMain={questionMain[qnumber]}
              questionFooter={questionFooter[qnumber]}
              optionSol={optionSol[qnumber]}
              selectedOption={selectedOption}
            />
          )}
          {type[qnumber] === "type2" && (
            <QuestionCard2
              questionHead={questionHead[qnumber]}
              questionMain={questionMain[qnumber]}
              questionFooter={questionFooter[qnumber]}
              optionSol={optionSol[qnumber]}
              selectedOption={selectedOption}
            />
          )}
        </div>
        <div className="col-3 px-0 mx-0">
          <ProgressCard
            currentProgress={qnumber + 1}
            totalQuestion={questionMain.length}
          />
        </div>
      </div>
      <div className="row">
        {type[qnumber] !== "type3" && (
          <>
            <div className="col-9 px-0">
              <OptionSection
                options={options[qnumber]}
                qNumber={qnumber}
                selectOption={selectOption}
                optionSol={optionSol[qnumber]}
                showNext={showNext}
                setShowNext={setShowNext}
                handleNewQuestion={handleNewQuestion}
                currentType={type[qnumber]}
              />
            </div>
            <div className="col-3 px-0 mx-0">
              <Timer totalTime={4500} stopTimer={stopTimer} />
              <InfoCard
                currentQuestion={qnumber + 1}
                totalQuestion={questionMain.length}
              />
            </div>
          </>
        )}
        {type[qnumber] === "type3" && (
          <OptionSection2
            options={options[qnumber]}
            selectOption={selectOption}
            optionSol={optionSol[qnumber]}
            showNext={showNext}
            setShowNext={setShowNext}
            handleNewQuestion={handleNewQuestion}
          />
        )}
      </div>
    </div>
  );
};

export default McQuestions;
