import React, { useState } from "react";
import ProgressCard from "./components/ProgressCard";
import QuestionCard from "./components/QuestionCard";
import Timer from "./components/Timer";
import InfoCard from "./components/InfoCard";
import OptionSection from "./components/OptionSection";
import { useNavigate } from "react-router-dom";

const McQuestions = () => {
  const navigate = useNavigate();
  const questionHead = ["Choose the correct word", "Choose the correct ending"];
  const questionMain = [["eu", null, "o", "carro"], ["conduz"]];
  const questionFooter = [
    ["I", "drive", "the", "car"],
    ["to drive", ""],
  ];

  const options = [
    ["conduzo", "falo", "vai conduzir", "conduzei"],
    ["ar", "er", "ir"],
  ];
  const optionSol = [
    ["conduzo", 1],
    ["ir", 0],
  ];

  const [qnumber, setQNumber] = useState(0);
  const [marks, setMarks] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const selectOption = (option) => {
    setSelectedOption(option);
  };

  const handleNewQuestion = () => {
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

  const stopTimer = () => {
    return navigate(`/score/${marks}-${questionMain.length}`);
  };

  return (
    <div className="container-lg">
      <div className="row">
        <div className="col-9 px-0">
          <QuestionCard
            questionHead={questionHead[qnumber]}
            questionMain={questionMain[qnumber]}
            questionFooter={questionFooter[qnumber]}
            optionSol={optionSol[qnumber]}
            selectedOption={selectedOption}
          />
        </div>
        <div className="col-3 px-0 mx-0">
          <ProgressCard
            currentProgress={qnumber + 1}
            totalQuestion={questionMain.length}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-9 px-0">
          <OptionSection
            options={options[qnumber]}
            selectOption={selectOption}
            optionSol={optionSol[qnumber]}
            showNext={showNext}
            setShowNext={setShowNext}
            handleNewQuestion={handleNewQuestion}
          />
        </div>
        <div className="col-3 px-0 mx-0">
          <Timer totalTime={6} stopTimer={stopTimer} />
          <InfoCard
            currentQuestion={qnumber + 1}
            totalQuestion={questionMain.length}
          />
        </div>
      </div>
    </div>
  );
};

export default McQuestions;
