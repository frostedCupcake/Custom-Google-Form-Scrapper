import React from "react";

const CoursePage = (props) => {
  return (
    <div className="text-center mt-[5rem] flex flex-col gap-5">
      <div className="text-3xl uppercase">{JSON.stringify(props.data)}</div>
      <div className="text-2xl">
        Instructor Name: {Object.keys(props.data.instructors)}
      </div>
      <div className="text-[1.25rem] ">Student Remarks</div>
      <div>Strongly disagree: 0</div>
      <div>Disagree: 0</div>
      <div>Neutral: 0</div>
      <div>Agree: 0</div>
      <div>Strongly agree: 0</div>
      <div className="text-[1.25rem]">AI Remarks</div>
      <div>Negitive</div>
      <div>Neutral</div>
      <div>positive</div>
    </div>
  );
};

export default CoursePage;
