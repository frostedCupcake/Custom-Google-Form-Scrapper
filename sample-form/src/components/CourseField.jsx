import {
  Box,
  Paper,
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const CourseField = ({ title }) => {
  const options = [
    "Strongly disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly agree",
  ];

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          margin: "1rem auto 0 ",
          borderRadius: "10px",
        }}
        elevation={1}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            padding: "2.5rem 2rem",
          }}
        >
          <Typography
            sx={{
              textTransform: "capitalize",
              fontSize: { xs: "1rem", sm: "1.3rem" },
            }}
          >
            {title}
          </Typography>
          {title.slice(0, 7) === "Remarks" ? (
            <TextField
              sx={{
                width: { xs: "100%" },
              }}
              id="outlined-textarea"
              type="text"
              label="Your Answer"
            />
          ) : (
            <FormControl>
              <RadioGroup aria-labelledby="radio-buttons-group-label">
                {options.map((el) => (
                  <FormControlLabel
                    key={el}
                    value={el}
                    control={<Radio />}
                    label={
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                          fontSize: { xs: ".9rem", sm: "1.2rem" },
                        }}
                      >
                        {el}
                      </Typography>
                    }
                  />
                ))}
              </RadioGroup>
            </FormControl>
          )}
        </Box>
      </Paper>
    </>
  );
};

export default CourseField;
