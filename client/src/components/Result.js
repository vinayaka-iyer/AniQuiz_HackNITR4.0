import React from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
import { useDispatch } from "react-redux";

/** import actions */
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";

const Result = () => {
  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };
  return (
    <div className="container">
      <h1 className="title text-light">AniQuiz</h1>
      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Vinayaka</span>
        </div>
        <div className="flex">
          <span>Total Quiz points: </span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Questions: </span>
          <span className="bold">05</span>
        </div>
        <div className="flex">
          <span>Total Attempts: </span>
          <span className="bold">03</span>
        </div>
        <div className="flex">
          <span>Total Earned Points: </span>
          <span className="bold">30</span>
        </div>
        <div className="flex">
          <span>Quiz Result: </span>
          <span className="bold">Passed</span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart()}>
          Restart
        </Link>
      </div>

      <div className="container">
        {/* result table */}
        <ResultTable />
      </div>
    </div>
  );
};

export default Result;
