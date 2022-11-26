import React, { useEffect, useState } from "react";
import q1_before from "../../../static/q1_before.mp3";
import q1_after from "../../../static/q1_after.mp3";
import q2_before from "../../../static/q2_before.mp3";
import q2_after from "../../../static/q2_after.mp3";

const QuestionCard = ({
  qNumber,
  questionHead,
  questionMain,
  questionFooter,
  optionSol,
  selectedOption,
}) => {
  const handleAudio = () => {
    audio.play();
  };

  const getAudio = () => {
    if (qNumber === 0 && selectedOption && selectedOption === optionSol[0]) {
      return q1_after;
    } else if (qNumber === 0) {
      return q1_before;
    } else if (
      qNumber === 1 &&
      selectedOption &&
      selectedOption === optionSol[0]
    ) {
      return q2_after;
    } else if (qNumber === 1) {
      return q2_before;
    }
  };

  const [audio, setAudio] = useState(new Audio(getAudio()));

  useEffect(() => {
    if (selectedOption && selectedOption === optionSol[0]) {
      setAudio(new Audio(getAudio()));
    }
  }, [selectedOption]);

  useEffect(() => {
    audio.play();
  }, [audio]);

  return (
    <div
      style={{
        backgroundColor: "rgb(65,0,153)",
        color: "white",
      }}
    >
      <div className="ms-5 fs-5 fw-light">
        {" "}
        {questionHead}{" "}
        <span
          style={{ cursor: "pointer", marginLeft: "1rem" }}
          onClick={handleAudio}
        >
          {/* Audio icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-volume-up-fill"
            viewBox="0 0 16 16"
          >
            <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
            <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
          </svg>
        </span>
      </div>
      <div className="d-flex flex-row">
        {questionMain.map((question, index) => {
          return (
            <div className="d-inline-flex flex-column" key={index}>
              <div className="fs-1 fw-bold pt-3 pb-2 px-5">
                {optionSol[1] === index ? (
                  question === null ? (
                    selectedOption ? (
                      <div
                        style={{
                          width: "12rem",
                          color: "orange",
                          borderBottom: "2px solid orange",
                        }}
                      >
                        {selectedOption}
                      </div>
                    ) : (
                      <div
                        style={{
                          width: "12rem",
                          borderBottom: "2px solid orange",
                        }}
                      >
                        &nbsp;
                      </div>
                    )
                  ) : (
                    <div
                      style={{
                        width: "12rem",
                        color: "orange",
                      }}
                    >
                      {question}
                      {optionSol[1] === index ? (
                        <span
                          style={{
                            borderBottom: "2px solid orange",
                          }}
                        >
                          {selectedOption ? (
                            selectedOption
                          ) : (
                            <>&nbsp;&nbsp;&nbsp;</>
                          )}
                        </span>
                      ) : null}
                      {/* <span style={{ borderBottom: "2px solid orange" }}>
                        {selectedOption}
                      </span> */}
                    </div>
                  )
                ) : (
                  question
                )}
              </div>
              <div className="pt-2 px-5 fw-bolder text-center">
                {questionFooter[index]}
              </div>
            </div>
          );
        })}
        {/* It will show correct or wrong according to the option selected */}
        {selectedOption ? (
          selectedOption === optionSol[0] ? (
            <div
              className="px-3 fs-1 align-self-center"
              style={{
                backgroundColor: "rgb(17,176,112)",
                color: "rgb(65,0,153)",
                borderRadius: "50%",
              }}
            >
              &#10004;
            </div>
          ) : (
            <div
              className="px-3 fs-1 align-self-center"
              style={{
                backgroundColor: "red",
                color: "rgb(65,0,153)",
                borderRadius: "50%",
              }}
            >
              &#x2717;
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default QuestionCard;
