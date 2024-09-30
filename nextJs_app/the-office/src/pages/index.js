import React from "react";
// components
import Container from "@mui/material/Container";
// custom componnets
import ExpressionList from "../components/ExpressionList";

export default function Home() {
  return (
    <Container>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>The Office - Hilarious Expressions</h1>
      <ExpressionList />
    </Container>
  );
}
