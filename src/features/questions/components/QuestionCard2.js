import React from "react";

const QuestionCard2 = ({ questionHead, questionFooter, selectedOption }) => {
  const mainStyle = "fs-1 fw-bold pt-3 pb-2 px-1";
  const footerStyle = "pt-2 px-3 fw-bolder text-center";

  return (
    <div
      style={{
        backgroundColor: "rgb(65,0,153)",
        color: "white",
      }}
    >
      <div className="ms-5 fs-5 fw-light"> {questionHead}</div>
      <div className="d-flex flex-row">
        {questionFooter.map((question, index) => {
          return (
            <div className="d-inline-flex flex-column ps-5">
              {selectedOption !== null ? (
                <div className={mainStyle} style={{ color: "orange" }}>
                  {selectedOption.value[index]}
                </div>
              ) : (
                <div className="">&nbsp;</div>
              )}

              <div
                className={
                  selectedOption !== null ? footerStyle : mainStyle + " pb-3"
                }
              >
                {question}
              </div>
            </div>
          );
        })}

        {/* It will show correct or wrong according to the option selected */}
        {selectedOption ? (
          selectedOption.valid ? (
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

export default QuestionCard2;
