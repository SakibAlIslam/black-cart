import React from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowLeft />
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
