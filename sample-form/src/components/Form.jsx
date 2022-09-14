import { Button, Box, Container } from "@mui/material";
import React from "react";
import CourseField from "./CourseField";
import Dropdown from "./Dropdown";
import Header from "./Header";

const Form = () => {
  const courseData = [
    "Course was well-organised",
    "The topics included were useful and interesting",
    "The course has enhanced my understanding of the subject",
    "Remarks for the instructor",
  ];
  const instructorData = [
    "The instructor taught the course rigorously",
    "Student participation was encouraged in class",
    "If possible, I would take another course with this instructor",
    "Remarks for the instructor",
  ];
  console.log(courseData.length);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F0EBF8",
          fontSize: "62.5%",
          boxSizing: "border-box",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "#F0EBF8",
            fontSize: "62.5%",
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              margin: " 0 1.5rem",
              textAlign: "left",
            }}
          >
            <Header />
            <Dropdown />
            {courseData.map((el, i) => (
              <CourseField title={el} />
            ))}
            {instructorData.map((el, i) => (
              <CourseField title={el} />
            ))}
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "rgb(103, 58, 183)",
                width: "8rem",
                margin: "1rem 0",
                fontSize: "1rem",
                padding: ".5rem",
                "&:hover": {
                  backgroundColor: "rgba(103, 58, 183, 0.9)",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Form;
