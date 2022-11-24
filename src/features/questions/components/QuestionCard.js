import React from "react";

const QuestionCard = ({
  questionHead,
  questionMain,
  questionFooter,
  optionSol,
  selectedOption,
}) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(65,0,153)",
        color: "white",
      }}
    >
      <div className="ms-5 fs-5 fw-light"> {questionHead}</div>
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
