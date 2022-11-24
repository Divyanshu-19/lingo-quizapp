import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="container text-center"
      style={{ border: "1px solid black", height: "100vh", padding: "0" }}
    >
      <div style={{ height: "8vh", backgroundColor: "rgb(65,0,153)" }}></div>
      <div className="fs-3 fw-light mt-5 pt-5" style={{ letterSpacing: "2px" }}>
        Hi, Welcome to the assignment
      </div>
      <div className="fs-3 fw-bolder mt-5" style={{ letterSpacing: "5px" }}>
        Portuguese Language Test 1
      </div>
      <button
        className="btn btn-primary px-5 py-2 fs-6"
        style={{
          backgroundColor: "rgb(65,0,153)",
          borderRadius: "20px",
          marginTop: "5rem",
        }}
        onClick={() => navigate("/questions")}
      >
        Lets begin
      </button>
    </div>
  );
};

export default Home;
