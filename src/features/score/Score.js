import React from "react";
import { useParams } from "react-router-dom";
import win from "../../static/win.png";

const Score = () => {
  const { id } = useParams();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <img
        src={win}
        alt="win with score"
        style={{ height: "50vh", width: "50vw" }}
      ></img>
      <div
        className="fs-2 fw-bold"
        style={{
          color: "white",
          position: "absolute",
          left: "45vw",
          top: "20vh",
        }}
      >
        {id.split("-")[0]} / {id.split("-")[1]}
      </div>
      <div
        className="fs-1 fw-bold"
        style={{
          color: "blue",
          position: "absolute",
          left: "40vw",
          top: "60vh",
        }}
      >
        Well Done
      </div>
    </div>
  );
};

export default Score;
