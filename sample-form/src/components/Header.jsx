import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          margin: "1rem auto 0 ",
          borderRadius: "10px",
          borderTop: "20px solid #673ab7",
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
            variant="h4"
            sx={{
              textTransform: "uppercase",
              marginTop: "1rem",
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            Aims portal
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: ".9rem", sm: "1.2rem" },
              marginBottom: "1rem",
            }}
          >
            Student Course and Instructor Feedback
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default Header;
