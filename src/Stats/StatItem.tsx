import { Paper, Typography } from "@mui/material";
import React from "react";
import { StatCard } from "../interfaces/stats.interface";

export const StatItem = ({ number, title }: StatCard) => {
  return (
    <Paper
      sx={{
        height: 150,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1" fontWeight="bold">
        {number}
      </Typography>
      <Typography variant="h4">{title}</Typography>
    </Paper>
  );
};
