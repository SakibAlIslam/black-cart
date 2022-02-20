import React from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  background-color: orange;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  top:0;
  bottom:0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin:auto;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeft />
      </Arrow>
      <Arrow direction="right">
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
