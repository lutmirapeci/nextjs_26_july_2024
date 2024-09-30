import React from "react";
// components
import Grid from "@mui/material/Grid";
// custom components
import ExpressionCard from "./ExpressionCard"; 
// data
import expressions from "../data/expressions.json"; 

const ExpressionList = () => {
  return (
    <Grid container spacing={3}>
      {expressions.map((expression) => (
        <Grid item xs={12} sm={6} md={4} key={expression.id}>
          <ExpressionCard expression={expression} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ExpressionList;
