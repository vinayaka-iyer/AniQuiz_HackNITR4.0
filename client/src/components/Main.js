import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../styles/Main.css";
import { setUserId } from "../redux/result_reducer";

const Main = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const startQuiz = () => {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    } else {
      window.alert("Please enter a valid username");
    }
  };
  return (
    <div className="container">
      <h1 className="title text-light">AniQuiz</h1>
      <ol>
        <li>The quiz consists of 10 Questions.</li>
        <li>10 points is awarded for each correct answer.</li>
        <li>Each question has 4 options. You can choose only one option.</li>
        <li>You can review and change answers before submitting quiz.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>
      <form id="form">
        <input
          className="userid"
          ref={inputRef}
          type="text"
          placeholder="Username*"
        />
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Main;
