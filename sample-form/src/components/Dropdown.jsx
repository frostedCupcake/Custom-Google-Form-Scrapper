import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

const Dropdown = () => {
  const data = [
    "Course2-ProfA",
    "Course2-ProfC",
    "Course6-ProfF",
    "Course5-ProfB",
    "Course1-ProfB",
    "Course4-ProfE",
    "Course1-ProfA",
    "Course3-ProfD",
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
            Course Code & Instructor
          </Typography>
          <FormControl
            sx={{
              width: "16rem",
            }}
          >
            <InputLabel id="demo-simple-select-label">Choose</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              {data.map((el) => (
                <MenuItem
                  sx={{
                    fontSize: "1.2rem",
                  }}
                  value={el}
                >
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Paper>
    </>
  );
};

export default Dropdown;
