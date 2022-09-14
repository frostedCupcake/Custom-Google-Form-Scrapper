import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";

const primary = purple[500]; // #f44336

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "aqua",
        color: "black",
        gap: "1rem",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">
        The course you’re looking for doesn’t exist.
      </Typography>
    </Box>
  );
}
