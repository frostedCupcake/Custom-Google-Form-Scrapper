import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const CoursePage = (props) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const questions = [
    "Course was well-organised",
    "The topics included were useful and interesting",
    "The course has enhanced my understanding of the subject",
    "The instructor taught the course rigorously",
    "Student participation was encouraged in class",
    "If possible, I would take another course with this instructor",
  ];

  const InstructorName = props.data.instructors
    ? Object.keys(props.data.instructors)
    : "";
  const total = props.data.instructors
    ? props.data.instructors[InstructorName].AIRemarks[0] +
      props.data.instructors[InstructorName].AIRemarks[1] +
      props.data.instructors[InstructorName].AIRemarks[2]
    : 1;
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <div className="text-center mt-[5rem] flex flex-col gap-5">
        <div className="text-3xl uppercase">
          {props.data.name ? props.data.name : ""}
        </div>
        <div className="text-2xl">Instructor Name: {InstructorName}</div>
        <div className="text-[1.25rem] ">Student Remarks</div>
        <div>
          {/* Acordion start */}
          <div className="mx-auto">
            {questions.map((el, i) => (
              <Accordion
                sx={{
                  m: "auto",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{el}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col gap-3 ">
                    <div>
                      Strongly disagree:{" "}
                      {props.data.instructors
                        ? props.data.instructors[InstructorName].MCQs[i]
                            .answers[0]
                        : ""}
                    </div>
                    <div>
                      Disagree:{" "}
                      {props.data.instructors
                        ? props.data.instructors[InstructorName].MCQs[i]
                            .answers[1]
                        : ""}
                    </div>
                    <div>
                      Neutral:{" "}
                      {props.data.instructors
                        ? props.data.instructors[InstructorName].MCQs[i]
                            .answers[2]
                        : ""}
                    </div>
                    <div>
                      Agree:{" "}
                      {props.data.instructors
                        ? props.data.instructors[InstructorName].MCQs[i]
                            .answers[3]
                        : ""}
                    </div>
                    <div>
                      Strongly agree:{" "}
                      {props.data.instructors
                        ? props.data.instructors[InstructorName].MCQs[i]
                            .answers[4]
                        : ""}
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          {/* Acordion stop */}
        </div>
        <div className="text-[1.25rem]">
          Remarks Sentiments (according to AI)
        </div>
        <div>
          Negitive :
          {props.data.instructors
            ? (
                (props.data.instructors[InstructorName].AIRemarks[0] / total) *
                100
              ).toFixed(2)
            : ""}
          %
        </div>
        <div>
          Neutral :
          {props.data.instructors
            ? (
                (props.data.instructors[InstructorName].AIRemarks[1] / total) *
                100
              ).toFixed(2)
            : ""}
          %
        </div>
        <div>
          positive :
          {props.data.instructors
            ? (
                (props.data.instructors[InstructorName].AIRemarks[2] / total) *
                100
              ).toFixed(2)
            : ""}
          %
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CoursePage;
