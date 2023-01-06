import React, { useEffect } from "react";
import Questions from "./Questions";

/** redux store import */
import { useSelector } from "react-redux";

const Quiz = () => {
  const state = useSelector((state) => state);
  useEffect(() => {
    console.log(state);
  });

  /** next button event handler */
  const onNext = () => {
    console.log("On Next click");
  };

  /** prev button event handler */
  const onPrev = () => {
    console.log("On Prev click");
  };

  return (
    <div className="container">
      <h1 className="title text-light">AniQuiz</h1>

      {/* display questions */}
      <Questions />

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
