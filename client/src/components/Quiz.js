import React, { useEffect, useState } from "react";
import Questions from "./Questions";

import { moveNextQuestion, movePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/SetResult";

/** redux store import */
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Quiz = () => {
  const [check, setChecked] = useState(undefined);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(state);
  });

  /** next button event handler */
  const onNext = () => {
    console.log("On Next click");
    if (trace < queue.length) {
      /** increase the trace value by one using moveNextAction */
      dispatch(moveNextQuestion());
      dispatch(PushAnswer(check));
    }
  };

  /** prev button event handler */
  const onPrev = () => {
    console.log("On Prev click");
    if (trace > 0) {
      /** decrease the trace value by one using movePrevAction */
      dispatch(movePrevQuestion());
    }
  };

  const onChecked = (check) => {
    console.log(check);
    setChecked(check);
  };

  /** finished exam after the last question */
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace="true"></Navigate>;
  }

  return (
    <div className="container">
      <h1 className="title text-light">AniQuiz</h1>

      {/* display questions */}
      <Questions onChecked={onChecked} />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
