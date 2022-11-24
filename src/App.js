import "./App.css";
import McQuestions from "./features/questions/McQuestions";
import Home from "./features/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Score from "./features/score/Score";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<McQuestions />} />
        <Route path="/score/:id" element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
